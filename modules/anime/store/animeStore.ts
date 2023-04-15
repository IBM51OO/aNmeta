import { defineStore } from 'pinia';
import animeRepository from '../api/repositories/animeRepository';
import AnimeDetail from '../types/AnimeDetail';
import RelatedAnime from '../types/RelatedAnime';
interface AnimeState
{
    relatedAnimeList: RelatedAnime[]
    animeFromDb: RelatedAnime | null,
    allAnime: AnimeDetail[],
    currentAnime: AnimeDetail | null
}

export const useAnime = defineStore('animeStore',{
    state: (): AnimeState => ({
        relatedAnimeList: [],
        animeFromDb: null,
        allAnime: [],
        currentAnime: null
    }),
  
    getters: 
    {
        getCurrentAnime: (state: AnimeState) => state.currentAnime,
        anime: (state: AnimeState) => state.allAnime,
        getRelatedAnime: (state: AnimeState) => state.relatedAnimeList,
        getAnimeFromDb: (state: AnimeState) => state.animeFromDb
    },
  
    actions: 
    {
        setCurrentAnime(anime: AnimeDetail)
        {
            this.currentAnime = anime
        },

        /*
        ** Получение аниме в kodik по title_link
        */
        async fetchAnime(titleLink: string) 
        {   
            await animeRepository.getAnimeByLink(titleLink).then((data) => 
            {
                this.allAnime = data.results as AnimeDetail[]
            })
        },

        /*
        ** Получение аниме по id из базы
        */
        async fetchAnimeFromDbById(id: number) 
        {            
            await animeRepository.getAnimeFromDb(id).then((data) => 
            {                  
                this.animeFromDb = data as RelatedAnime;
            })
            
        },

        /*
        ** Получение связанных аниме по code текущего аниме
        */
        async fetchRelatedAnimeList(id: number) 
        {
            await animeRepository.getRelatedAnimeList(id).then((response: any) => 
            {                
                this.relatedAnimeList = response as RelatedAnime[];
            })
        }
    }
  })