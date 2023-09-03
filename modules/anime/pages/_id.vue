<template>
    <section class="anime-detail">
        <AnimeDetailContent :loading="loading" v-if="!loading" />
        <AnimePlayerSkeleton v-else />
    </section>
</template>
<script lang="ts" setup>
// import AnimeDetailHeader from "@/modules/anime/components/AnimeDetailHeader.vue";
import AnimePlayerSkeleton from "@/modules/anime/ui/AnimePlayerSkeleton.vue"
import AnimeDetailContent from "@/modules/anime/components/AnimeDetailContent.vue";
import { useAnime } from "@/modules/anime/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";
import api from "~/api/repositories/api";
import { useUserStore } from "~/modules/user/store/UserStore";

const store = useAnime();
const router = useRoute();

const globalStore = useGlobalStore();
const userStore = useUserStore()
globalStore.setLoading(true);


const loading = computed(() => 
{
    return globalStore.isLoading;
});
const currentUser = computed(() => userStore.user)
globalStore.setLoading(true)
if(currentUser.value)
{
    
    api.userRepository.fetchVisit(Number(currentUser.value?.id), Number(router.params.id))
}
Promise.allSettled([
    store.fetchAnime(Number(router.params.id)).then(() => {}),
    store.fetchRelatedAnimeList(Number(router.params.id)),
    store.fetchAnimeTopics()
]).then(() => 
{
    globalStore.setLoading(false);
})
onMounted(() => 
{ 
})



</script>

<style lang="scss">
.user
{
    color: black;
}
</style>