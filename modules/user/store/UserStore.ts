import { defineStore } from "pinia";
import api from "~/api/repositories/api";
import User, { LoginResponse, UserLogin, UserRegister, UserStatisticEdit } from "@/modules/user/types/IUser";

interface UserStore 
{
  user: User | undefined
  isAuth: boolean
  currentUserProfile: User | undefined
}

export const useUserStore = defineStore('user', { 
    state: (): UserStore  => 
    ({
        user: undefined,
        currentUserProfile: [],
        isAuth: false
    }),
    getters: 
    {
        isUserAuth(): boolean
        {
            return this.isAuth;
        },

        getUser(): User | undefined
        {
            return this.user;
        },

        getCurrentUserProfile(): User | undefined
        {
            return this.currentUserProfile;
        }
    },
    actions: 
    {
        setUser(user: User | undefined)
        {
            this.user = user
        },

        setAuth(status: boolean) 
        {
            this.isAuth = status
        },

        setCurUser(user: User | undefined)
        {
            this.currentUserProfile = user
        },

        setUserToken(data: {access_token: string} | null)
        {
            const config = useRuntimeConfig();
            const cookie = useCookie('access_token', 
            {
                sameSite: 'strict',
                expires: this.getUser?.rememberMe ? new Date(Date.now() + config.cookieRememberMeExpires) : new Date(Date.now() + config.cookieExpires),
            })
            cookie.value = cookie.value || data && data.access_token;
        },

        async updateUser(user: User, id: number)
        {
            await api.userRepository.update(user, id).then((data) => 
            {
                this.setUser(data as User)
            })
        },
        async uploadFile(formData: any)
        {            
            return (await api.userRepository.upload(formData)).value
        },
        async fetchUserById(id: number) 
        {            
            await api.userRepository.userById(id).then((data) => 
            {
                this.setCurUser(data)
            })
        },
        async fetchUser() 
        {
            await api.userRepository.user().then((data) => 
            {                
                this.setUser(data as User)
                this.setAuth(true);
            })
        },
        async fetchUserAnimeList(userId: number)
        {
           return await api.userRepository.getUserAnimeList(userId)
        },
        async updateUserTopicTitle(title: UserStatisticEdit, bookmarkId: number)
        {            
            await api.userRepository.updateUserAnimeList(title, bookmarkId)
        },
        async login(payload: UserLogin) 
        {
            await api.userRepository.login(payload).then((data) => 
            {
                const response = data.value as  {access_token: string}
                
                this.setUserToken(response)
            })            
        },

        async logout() 
        {
            this.setUser(undefined);
            this.setAuth(false);
            this.setUserToken(null)

            const cookie = useCookie('access_token')
            cookie.value = null;
        },

        async register(payload: UserRegister) 
        {
            await api.userRepository.register(payload).then((data) => 
            {
                this.setUserToken(data.value as {access_token: string})
            })            
        },
    }
})