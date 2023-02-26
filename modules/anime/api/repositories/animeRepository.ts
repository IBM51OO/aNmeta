// const { apiBase } = useRuntimeConfig().public;
export default 
{
    getAnime(id: number) 
    {
        return useFetch(`http://anime/api/anime/${id}`);
    },
};