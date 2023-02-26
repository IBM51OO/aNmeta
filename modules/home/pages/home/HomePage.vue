<template>
    <section class="recomendations">
        <HeaderRecomendation />
    </section>
    <section class="content">
        <LastUpdatesTitles />
        <PopularNovelties />
        <RegistrationBanner />
        <ReleaseCalendar />
    </section>
</template>

<script lang="ts" setup>
import HeaderRecomendation from '@/modules/home/components/HeaderRecomendation.vue';
import ReleaseCalendar from '@/modules/home/components/ReleaseCalendar.vue';
import LastUpdatesTitles from '@/modules/home/components/LastUpdatesTitles.vue';
import RegistrationBanner from '@/modules/home/components/RegistrationBanner.vue';
import PopularNovelties from '@/modules/home/components/PopularNovelties.vue';
</script>

<style lang="scss">
.content
{
    background: #141518;
    padding-top: 20px;
}
</style>