interface User 
{
    name: string,
    email: string,
    avatar: string,
    rememberMe?: boolean;
}
interface UserRegister
{
    name: string,
    email: string,
    password: string,
}

interface UserLogin
{
    email: string,
    passowrd: string,
}
export { UserRegister, UserLogin }
export default User;