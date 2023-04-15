<template>
    <section class="anime-detail">
        <AnimeDetailContent :loaded="loaded" v-if="loaded"/>
        <AnimePlayerSkeleton v-else />
    </section>
</template>
<script lang="ts" setup>
// import AnimeDetailHeader from "@/modules/anime/components/AnimeDetailHeader.vue";
import AnimePlayerSkeleton from "@/modules/anime/ui/AnimePlayerSkeleton.vue"
import AnimeDetailContent from "@/modules/anime/components/AnimeDetailContent.vue";
import { useAnime } from "@/modules/anime/store/animeStore";
import AnimeDetail from "../types/AnimeDetail";
import RelatedAnime from "../types/RelatedAnime";

const store = useAnime();
const router = useRoute();
const anime = computed(() => store.anime[0]);

const loaded = ref(false);

async function initPage()
{
    await store.fetchAnimeFromDbById(Number(router.params.id))
    await store.fetchRelatedAnimeList(Number(router.params.id))
    await store.fetchAnime(store.getAnimeFromDb?.titleLink)

    store.setCurrentAnime(anime.value)
}

initPage().then(() =>
{
    loaded.value = true
});

</script>

<style lang="scss">
</style>