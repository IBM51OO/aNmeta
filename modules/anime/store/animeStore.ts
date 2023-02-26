import { defineStore } from 'pinia';
import animeRepository from '../api/repositories/animeRepository';
import AnimeDetail from '../types/AnimeDetail';
interface AnimeState
{
    animeState: AnimeDetail | null
}

export const useAnime = defineStore('animeStore',{
    state: (): AnimeState => ({
        animeState: null,
    }),
  
    getters: 
    {
        anime: (state: AnimeState) => state.animeState
    },
  
    actions: 
    {
        fetchAnime(id: number) 
        {
            animeRepository.getAnime(id).then((response: any) => 
            {
                this.animeState = response.data.value[0] as AnimeDetail;
            })
        }
    }
  })