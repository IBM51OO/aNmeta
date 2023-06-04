export default 
{
    // getAnimeByLink(titleLink: string)
    // {   
    //     const token = 'b366fa83b760db1dc05b3c7d5f70331e'
    //     const with_material_data = 'true'

    //     const with_episodes_data= 'true'
    //     const worldart_link = titleLink;

    //     const { data } = useAsyncData('anime', () => $fetch('https://kodikapi.com/search', 
    //     {
    //         params: {token, with_material_data, with_episodes_data, worldart_link},
    //     }));
        
    //     return data;
    // },

    async getAnimeFromKodik(id: number)
    {   
        const { data } = await useAsyncData('animeByDb', () => $fetch(`http://anime/api/anime/${id}`))
        return data
    },

    async getRelatedAnimeList(id: number)
    {
        const { data } = await useAsyncData('relatedAnime', () => $fetch(`http://anime/api/anime/relation/${id}`))
        return data;
    },

    async getAnimeTopics()
    {   
        const { data } = await useAsyncData('animeTopics', () => $fetch('http://anime/api/topics'))
        return data
    },
};