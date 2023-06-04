<template>
    <div class="context-menu-link">
        <Icon :name="props.iconName" v-if="props.iconName" class="icon"/>
        <NuxtLink v-if="props.to" :to="props.to">
            <slot />
        </NuxtLink>
        <button class="context-menu-button">
            <slot />
        </button>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    to?: string,
    iconName?: string
}>();
</script>
<style lang="scss">
.context-menu-link
{
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'Inter';
    margin: 5px 8px;
    padding: 5px 8px;
    transition: 300ms all ease;
    .icon
    {
        margin-right: 5px;
    }
    .context-menu-button
    {
        border: none;
        outline: none;
    }
}
.context-menu-link:hover
{
    background: #f2f2f2;
}
</style>