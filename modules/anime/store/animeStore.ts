import { defineStore } from 'pinia';
import animeRepository from '../api/repositories/animeRepository';
import AnimeDetail from '../types/AnimeDetail';
import RelatedAnime from '../types/RelatedAnime';
interface AnimeState
{
    relatedAnimeList: RelatedAnime[] | null,
    animeFromDb: RelatedAnime | null,
    allAnime: AnimeDetail[] | null,
}

export const useAnime = defineStore('animeStore',{
    state: (): AnimeState => ({
        relatedAnimeList: null,
        animeFromDb: null,
        allAnime: null
    }),
  
    getters: 
    {
        anime: (state: AnimeState) => state.allAnime,
        getRelatedAnime: (state: AnimeState) => state.relatedAnimeList,
        getAnimeFromDb: (state: AnimeState) => state.animeFromDb
    },
  
    actions: 
    {
        async fetchAnime(titleLink: string) 
        {   
            await animeRepository.getAnimeByLink(titleLink).then((data) => 
            {
                const response = data.data.value
                this.allAnime = response.results as AnimeDetail[]
            })
        },

        async fetchAnimeFromDbById(id: number) 
        {            
            await animeRepository.getAnimeFromDb(id).then((data) => 
            {                
                this.animeFromDb = data.data.value as RelatedAnime;
            })
            
        },
        async fetchRelatedAnimeList(code: number) 
        {
            await animeRepository.getRelatedAnimeList(code).then((response: any) => 
            {
                this.relatedAnimeList = response.data.value as RelatedAnime[];
            })
        }
    }
  })