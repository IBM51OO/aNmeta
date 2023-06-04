<template>
    <section class="anime-detail">
        

        <AnimeDetailContent :loading="loading" :animeTopics="animeTopics" v-if="!loading" />
        <AnimePlayerSkeleton v-else />
    </section>
</template>
<script lang="ts" setup>
// import AnimeDetailHeader from "@/modules/anime/components/AnimeDetailHeader.vue";
import AnimePlayerSkeleton from "@/modules/anime/ui/AnimePlayerSkeleton.vue"
import AnimeDetailContent from "@/modules/anime/components/AnimeDetailContent.vue";
import { useAnime } from "@/modules/anime/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";

const store = useAnime();
const router = useRoute();

const globalStore = useGlobalStore();
globalStore.setLoading(true);

const animeTopics = ref();

const loading = computed(() => 
{
    return globalStore.isLoading;
});

globalStore.setLoading(true)

await store.fetchAnime(Number(router.params.id))
await store.fetchRelatedAnimeList(Number(router.params.id))
animeTopics.value = await store.fetchAnimeTopics()

onMounted(() => 
{ 
    globalStore.setLoading(false);
})



</script>

<style lang="scss">
.user
{
    color: black;
}
</style>