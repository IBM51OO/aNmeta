import { defineStore } from "pinia";
import api from "~/api/repositories/api";
import User, { LoginResponse, UserLogin, UserRegister } from "@/modules/user/types/IUser";

interface UserStore 
{
  user: User | undefined
  isAuth: boolean
}

export const useUserStore = defineStore('user', { 
    state: (): UserStore  => 
    ({
        user: undefined,
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
        
        async fetchUser() 
        {
            await api.userRepository.user().then((data) => 
            {                
                this.setUser(data.value as User)
                this.setAuth(true);
            })
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