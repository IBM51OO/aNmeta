<template>
    <div class="context-menu">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{(e: 'close'): void}>()
function close()
{
    emit('close');
}
</script>
<style lang="scss">

.context-menu
{
    background: #fff;
    border-radius: 6px;
    min-width: 150px;
    z-index: 999;
    position: absolute;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
}
</style>