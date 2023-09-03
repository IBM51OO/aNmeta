import { UserStatistic, UserStatisticRemote } from "../../types/IUser";

class UserStatisticItemMapper
{
    static map(data: User)
    {
        return {
            ...data,
            profile_background: data.backgroundAvatar
        }
    }
}
export default UserStatisticItemMapper;