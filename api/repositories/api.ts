import UserRepository from "./UserRepository";
function createRepositories()
{
    return {
        userRepository: new UserRepository()
    };
}

const api = createRepositories();

export default api;