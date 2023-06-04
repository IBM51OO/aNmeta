import { defineStore } from "pinia";

interface GlobalState {
  loading: boolean
}
export const useGlobalStore = defineStore('global', { 
    state: (): GlobalState  => 
    ({
        loading: false,
    }),
    getters: 
    {
        isLoading(): boolean
        {
            return this.loading;
        }
    },
    actions: 
    {
        setLoading(loading: boolean) 
        {
          this.loading = loading;
        },
    }
})