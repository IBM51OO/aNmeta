import User, { UserRemote } from "../../types/IUser";

class UserEditMapper
{
    static map(data: User)
    {
        return {
            ...data,
            profile_background: data.backgroundAvatar
        }
    }
    static unmap(remote: UserRemote)
    {
        const mappedRemote = {
            ...remote,
            backgroundAvatar: remote.profile_background
        }
        delete mappedRemote.profile_background;

        return mappedRemote
    }
}
export default UserEditMapper;