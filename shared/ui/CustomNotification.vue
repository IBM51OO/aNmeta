<template>
    <notifications>
        <template #body="props">
            <div class="my-notification">
                <div>
                    <p class="title" v-if="props.item.title">
                        {{ props.item.title }}
                    </p>
                    
                    <div v-html="props.item.text"/>
                </div>
                <button class="close" @click="props.close">
                    <Icon name="CrossIcon" size="14" />
                </button>
            </div>
        </template>
    </notifications>
</template>
<script setup lang="ts">

</script>
<style lang="scss">

.my-notification
{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    margin-top: 10px;
    background: #fff;
    border-radius: 3px;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #000;

    -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);

    .close
    {
        border: none;
        display: flex;
        height: 14px;
        width: 14px;
        align-items: flex-start;
        .icon 
        {
            flex-shrink: 0;
            color: #000;
        }
    }
}
</style>