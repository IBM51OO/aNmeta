<template>
    <section class="anime-detail" v-if="anime">
        <AnimeDetailContent :anime="anime" :relatedAnime="relatedAnime"/>
    </section>
</template>
<script lang="ts" setup>
// import AnimeDetailHeader from "@/modules/anime/components/AnimeDetailHeader.vue";
import AnimeDetailContent from "@/modules/anime/components/AnimeDetailContent.vue";
import { useAnime } from "@/modules/anime/store/animeStore";
import AnimeDetail from "../types/AnimeDetail";
import RelatedAnime from "../types/RelatedAnime";

const store = useAnime();
const router = useRoute();
const anime = ref<AnimeDetail| null>();
const relatedAnime = ref<RelatedAnime[] | null>()



const animeFromDb = computed(() => 
{
    return store.getAnimeFromDb
})

async function loadAnime()
{ 
    await store.fetchAnime(animeFromDb.value?.titleLink)
}

function initPage()
{
    loadAnime().finally(() => 
    {
        anime.value = store.anime?.length > 0 ? store.anime[0] : null
    })
    store.fetchRelatedAnimeList((Number(router.params.id))).finally(() => 
    {
        relatedAnime.value = store.relatedAnimeList
    })
}
store.fetchAnimeFromDbById(Number(router.params.id)).finally(() => 
{
    initPage()
})


</script>

<style lang="scss">
</style>