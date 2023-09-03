import { UserHistory, UserHistoryRemote } from "../../types/IUser";

class UserHistoryMapper
{
    static map() 
    {
        
    }
    static unmap(remote: UserHistoryRemote[])
    {
        const mappedRemote: UserHistory[] = [];
        remote.forEach(element => {
            const mappedRemoteItem = {
                id: element.id,
                animeId: element.anime_id,
                userId: element.user_id,
                animeList: element.anime_list
            } 
            mappedRemote.push(mappedRemoteItem)
        });
        return mappedRemote;
    }
}
export default UserHistoryMapper