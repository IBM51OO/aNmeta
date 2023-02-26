<template>
    <section class="anime-detail" v-if="anime">
        <AnimeDetailContent :anime="anime" />
    </section>
</template>
<script lang="ts" setup>
// import AnimeDetailHeader from "@/modules/anime/components/AnimeDetailHeader.vue";
import AnimeDetailContent from "@/modules/anime/components/AnimeDetailContent.vue";
import { useAnime } from "@/modules/anime/store/animeStore";
import AnimeDetail from "../types/AnimeDetail";

const store = useAnime();
const router = useRoute();
const anime = ref<AnimeDetail | null>();

store.fetchAnime(Number(router.params.id))
anime.value = store.anime

</script>

<style lang="scss">
</style>