
import { placeholder } from '@babel/types';

<template>
    <div class="input-wrapper">
        <input :value="modelValue" @input="emit('update:modelValue', handleInputChange($event))" type="text" :placeholder="placeholder">
    </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
    placeholder: string;
    modelValue: string
}>(),
{
    placeholder: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value;

</script>
<style lang="scss" scoped>
.input-wrapper
{
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Open Sans';
    width:  100%;
    input
    {
        width: 300px;
        padding: 7px;
        border-radius: 3px;
        border: none;
        outline:2px solid #1b90fd;
    }
    input::placeholder
    {
        font-size: 14px;
    }
}
</style>