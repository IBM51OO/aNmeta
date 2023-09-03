import AnimeDetail from "~/modules/anime/types/AnimeDetail";
import AnimeDetailDb from "~/modules/anime/types/AnimeDetailDb";

interface User 
{
    id?: number,
    name?: string,
    email?: string,
    avatar?: string,
    backgroundAvatar?: string,
    rememberMe?: boolean;
}
interface UserStatisticRemote
{
    id: number,
    anime_id: number,
    user_id: number,
    progress: number,
    personal_rate: number,
    status_id: number,
    anime_list: AnimeDetailDb
}
interface UserStatisticEdit
{
    id: number | null,
    userId: number | null,
    progress: number | null,
    personalRate: number | null,
    statusId: number | null,
}
interface UserHistoryRemote
{
    id: number,
    anime_id: number,
    user_id: number,
    anime_list: AnimeDetailDb
}
interface UserHistory
{
    id: number,
    animeId: number,
    userId: number,
    animeList: AnimeDetailDb
}
interface UserStatistic
{
    id: number,
    animeId: number,
    userId: number,
    progress: number,
    personalRate: number,
    statusId: number,
    animeList: AnimeDetailDb
}
interface UserRemote
{
    id?: number,
    name?: string,
    email?: string,
    avatar?: string,
    profile_background?: string,
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

interface ProfileTabFormData
{
    name: string,
    city: string,
}
export { UserRegister, UserStatisticRemote,UserHistory, UserHistoryRemote, UserLogin, UserStatistic, ProfileTabFormData, UserRemote, UserStatisticEdit }
export default User;