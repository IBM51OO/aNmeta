<template>
    <section class="recomendations">
        <HeaderRecomendation />
    </section>
    <section class="content">
        <LastUpdatesTitles />
        <CollectionCards />
        <PopularNovelties />
        <RegistrationBanner v-if="!isAuth" />
        <ReleaseCalendar />
    </section>
</template>

<script lang="ts" setup>
import CollectionCards from '@/modules/home/components/CollectionCards.vue';
import HeaderRecomendation from '@/modules/home/components/HeaderRecomendation.vue';
import ReleaseCalendar from '@/modules/home/components/ReleaseCalendar.vue';
import LastUpdatesTitles from '@/modules/home/components/LastUpdatesTitles.vue';
import RegistrationBanner from '@/modules/home/components/RegistrationBanner.vue';
import PopularNovelties from '@/modules/home/components/PopularNovelties.vue';
import { useUserStore } from '@/modules/user/store/UserStore';

const userStore = useUserStore();

const isAuth = computed(() => userStore.isAuth)

</script>

<style lang="scss">
.content
{
    background: #141518;
    padding-top: 20px;
}
</style>