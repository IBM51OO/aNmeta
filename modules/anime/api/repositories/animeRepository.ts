import { useMyFetch } from "@/composables/useMyFetch";
import RelatedAnime from "../../../anime/types/RelatedAnime"
export default 
{
    getAnimeByLink(titleLink: string)
    {   
        return useFetch(`https://kodikapi.com/search?token=b366fa83b760db1dc05b3c7d5f70331e&worldart_link=${titleLink}&with_material_data=true&with_episodes_data=true`);
    },

    getAnimeFromDb(id: number)
    {   
        return useFetch(`http://anime/api/anime/${id}`)
    },

    getRelatedAnimeList(id: number)
    {
        return useFetch(`http://anime/api/anime/relation/${id}`);
    }
};