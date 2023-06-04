import { UserLogin, UserRegister } from "@/modules/user/types/IUser"

class UserRepository
{
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
             
        return data
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