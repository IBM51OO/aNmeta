import { UserStatistic, UserStatisticEdit, UserStatisticRemote } from "../../types/IUser";

class UserAnimeListMapper
{
    static map(data: UserStatisticEdit)
    {
        return {
            user_id: data.userId,
            progress: data.progress,
            personal_rate: data.personalRate,
            status_id: data.statusId,
        }
    }
    static unmap(remote: UserStatisticRemote[])
    {
        const mappedRemote: UserStatistic[] = [];

        remote.forEach((el) => 
        {
            const mappedRemoteItem = {
                id: el.id,
                animeId: el.anime_id,
                userId: el.user_id,
                progress: el.progress,
                personalRate: el.personal_rate,
                statusId: el.status_id,
                animeList: el.anime_list
            } as UserStatistic
            mappedRemote.push(mappedRemoteItem)
        })

        return mappedRemote
    }
    static unmapItem(remote: UserStatisticRemote)
    {

        if(!remote)
            return null;
        
        const mappedRemoteItem = {
            id: remote.id,
            animeId: remote.anime_id,
            userId: remote.user_id,
            progress: remote.progress,
            personalRate: remote.personal_rate,
            statusId: remote.status_id,
            animeList: remote.anime_list
        }

        return mappedRemoteItem
    }
}
export default UserAnimeListMapper;