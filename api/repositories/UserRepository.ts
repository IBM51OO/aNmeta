import User, { UserHistory, UserHistoryRemote, UserLogin, UserRegister, UserRemote, UserStatisticEdit, UserStatisticRemote } from "@/modules/user/types/IUser"
import UserAnimeListMapper from "~/modules/user/models/mappers/UserAnimeListMapper";
import UserEditMapper from "~/modules/user/models/mappers/UserEditMapper";
import UserHistoryMapper from "~/modules/user/models/mappers/UserHistoryMapper";

class UserRepository
{
    async upload(payload: any)
    {
        const cookie = useCookie('access_token')

        const { data, error } = await useAsyncData('upload', () => $fetch('http://anime/api/upload',
        {
            method: 'POST',
            credentials: 'include',
            body: payload,
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        if(error)
            console.log(error.value);

        return data
    }
    async login(payload: UserLogin)
    {   
        const { data, error } = await useAsyncData('login', () => $fetch('http://anime/api/login', 
        { 
            method: 'POST',
            credentials: 'include',
            body: 
            {
                email: payload.email,
                password: payload.passowrd
            } 
        }))
        if(error)
            console.log(error.value);
            
        return data
    }
    async update(payload: User, id: number)
    {
        const mappedPayload = UserEditMapper.map(payload)
        const cookie = useCookie('access_token')
        const { data, error } = await useAsyncData('login', () => $fetch(`http://anime/api/user/${id}`,
        {
            method: 'POST',
            credentials: 'include',
            body: mappedPayload,
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        if(error)
            console.log(error.value);

        const response = await data.value;
        return await UserEditMapper.unmap(response as UserRemote)
    }
    async register(payload: UserRegister)
    {
        try
        {
            const { data } = await useAsyncData('register', () => $fetch('http://anime/api/register', 
            {
                // mode: 'no-cors',
                method: 'POST',
                credentials: 'include',
                body: 
                {
                    name: payload.name,
                    email: payload.email,
                    password: payload.password
                }
            }))

            return data
        }
        catch(e)
        {
            console.log(e);
        }
        
    }
    async userById(id: number)
    {
        const cookie = useCookie('access_token')
        const { data } = await useAsyncData('userById', () => $fetch(`http://anime/api/user/${id}`,
        {
            method: 'GET',
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        const response = await data.value;
        return await UserEditMapper.unmap(response as UserRemote)
    }
    async deleteUserBookmark(id: number)
    {
        const cookie = useCookie('access_token')

        const { data } = await useAsyncData('deleteUserBookmark', () => $fetch(`http://anime/api/user-bookmark/${id}`,
        {
            method: 'POST',
            credentials: 'include',

            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
    }
    async getUserBookmark(animeId: number, id: number)
    {
        const cookie = useCookie('access_token')

        const { data } = await useAsyncData('getUserBookmark', () => $fetch(`http://anime/api/get-user-bookmark/${id}`,
        {
            method: 'GET',
            credentials: 'include',
            params:{
                anime_id: animeId
            },
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        const response = await data.value;
        
        return await UserAnimeListMapper.unmapItem(response as UserStatisticRemote)
    }
    async getUserAnimeList(id: number)
    {
        const cookie = useCookie('access_token')

        const { data } = await useAsyncData('getUserAnimeList', () => $fetch(`http://anime/api/get-user-topics/${id}`,
        {
            method: 'GET',
            credentials: 'include',

            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        const response = await data.value;

        return await UserAnimeListMapper.unmap(response as UserStatisticRemote[])
    }
    async fetchVisit(userId: number,titleId: number)
    {
        const cookie = useCookie('access_token')

        const { data } = await useAsyncData('fetchVisit', () => $fetch(`http://anime/api/title-visited/${titleId}`,
        {
            method: 'GET',
            credentials: 'include',
            params: {user_id: userId},
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
    }
    async getUserHistory(id: number): Promise<UserHistory[]>
    {
        const cookie = useCookie('access_token')

        const { data } = await useAsyncData('getUserHistory', () => $fetch(`http://anime/api/visited-list/${id}`,
        {
            method: 'GET',
            credentials: 'include',

            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        const response = await data.value;

        return await UserHistoryMapper.unmap(response as UserHistoryRemote[])
    }
    async updateUserAnimeList(payload: UserStatisticEdit, bookmarkId: number)
    {
        const mappedPayload = UserAnimeListMapper.map(payload)

        const cookie = useCookie('access_token')
        const { data } = await useAsyncData('updateUserAnimeList', () => $fetch(`http://anime/api/update-topics/${bookmarkId}`,
        {
            method: 'POST',
            credentials: 'include',
            body: mappedPayload,
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))

        return data
    }
    async createUserAnimeBookmark(payload: UserStatisticEdit, id: number)
    {
        const mappedPayload = UserAnimeListMapper.map(payload)

        const cookie = useCookie('access_token')
        const { data } = await useAsyncData('createUserAnimeBookmark', () => $fetch(`http://anime/api/create-topics/${id}`,
        {
            method: 'POST',
            credentials: 'include',
            body: mappedPayload,
            headers:
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))

        return data
    }
    async user()
    {   
        
        const cookie = useCookie('access_token')
        const { data, error } = await useAsyncData('user', () => $fetch('http://anime/api/me', 
        { 
            method: 'POST',
            credentials: 'include',

            headers: 
            {
                Authorization: `Bearer ${cookie.value}`,
            }
        }))
        const response = await data.value;
        return await UserEditMapper.unmap(response as UserRemote)
    }
    async checkEmail(payload: string)
    {   
        const { data } = await useAsyncData('email', () => $fetch('http://anime/api/me/', 
        { 
            method: 'POST',
        }))
        return data
    }
}
export default UserRepository