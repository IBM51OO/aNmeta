import { defineStore } from 'pinia';
import animeRepository from '../api/repositories/animeRepository';
import AnimeDetail, { Episode } from '../types/AnimeDetail';
import RelatedAnime from '../types/RelatedAnime';
import AnimeTopics from '../types/AnimeTopics';
import { useGlobalStore } from '~/store/globalStore';
interface AnimeState
{
    relatedAnimeList: RelatedAnime[]
    allAnime: AnimeDetail[],
    animeTopics: AnimeTopics,
    currentAnime: AnimeDetail | null
}
const globalStore = useGlobalStore();
export const useAnime = defineStore('animeStore',{
    state: (): AnimeState => ({
        relatedAnimeList: [],
        allAnime: [],
        animeTopics: {} as AnimeTopics,
        currentAnime: null
    }),
  
    getters: 
    {

        getCurrentAnime: (state: AnimeState) => state.currentAnime,
        anime: (state: AnimeState) => state.allAnime,
        getRelatedAnime: (state: AnimeState) => state.relatedAnimeList,
        getTopics: (state: AnimeState) => state.animeTopics
    },
  
    actions: 
    {
        setCurrentAnime(anime: AnimeDetail)
        {
            this.currentAnime = anime
        },

        /*
        ** Получение аниме в kodik по id
        */
        async fetchAnime(id: number) 
        {   
            // globalStore.setLoading(true);
            const response = await animeRepository.getAnimeFromKodik(id);   
            
            this.allAnime =  response.value as AnimeDetail[]
            this.setCurrentAnime(this.serializeEpisodes(this.allAnime[0]))
            // globalStore.setLoading(false);
        },

        serializeEpisodes(anime:AnimeDetail)
        {
            let modifiedAnime = anime;
            if(this.checkValidIsSerial(anime) ? anime.seasons[anime.last_season].episodes as Episode[] : null)
            {
                let episodes: Episode[] = [];

                for(const key in anime.seasons[anime.last_season].episodes)
                {
                    episodes.push(anime.seasons[anime.last_season].episodes[key])
                }
                return {...modifiedAnime, episodes: episodes}
            }
            return anime;
        },

        // Проверяет есть ли у аниме сезоны,
        // если нет значит это фильм, ова или еще какая приблуда
        // возвращает true если если сериал

        checkValidIsSerial(anime: AnimeDetail | null)
        {
            if(anime?.seasons)
            {
                if(anime?.seasons[anime.last_season])
                {
                return true
                }
            }

            return false
        },

        async fetchAnimeTopics() 
        {   
            // globalStore.setLoading(true);
            const response = await animeRepository.getAnimeTopics();
            this.animeTopics = response.value;

        },

        /*
        ** Получение аниме по id из базы
        */
        // async fetchAnimeFromDbById(id: number) 
        // {      
        //     const response = await animeRepository.getAnimeFromDb(id).value;
        //     this.animeFromDb = response as RelatedAnime;
        // },

        /*
        ** Получение связанных аниме по code текущего аниме
        */
        async fetchRelatedAnimeList(id: number) 
        {
            // globalStore.setLoading(true);
            const response = await animeRepository.getRelatedAnimeList(id);
            
            this.relatedAnimeList = response.value as RelatedAnime[];
            // globalStore.setLoading(false);
        }
    }
  })