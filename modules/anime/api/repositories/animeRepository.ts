import { useMyFetch } from "@/composables/useMyFetch";
import RelatedAnime from "../../../anime/types/RelatedAnime"
export default 
{
    getAnimeByLink(titleLink: string)
    {   
        const token = 'b366fa83b760db1dc05b3c7d5f70331e'
        const with_material_data = 'true'

        const with_episodes_data= 'true'
        const worldart_link = titleLink;

        return $fetch('https://kodikapi.com/search', 
            {
                params: {token, with_material_data, with_episodes_data, worldart_link},
            });
    },

    getAnimeFromDb(id: number)
    {   
        return $fetch(`http://anime/api/anime/${id}`)
    },

    getRelatedAnimeList(id: number)
    {
        return $fetch(`http://anime/api/anime/relation/${id}`);
    }
};