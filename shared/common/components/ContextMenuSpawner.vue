<template>
    <div @click.stop="toggle">
        <slot />
        <Teleport to="body">
            <div>
                <transition mode="out-in">
                    <ContextMenu
                        v-click-outside="() => isOpen = false"
                        v-if="isOpen"
                        :style="getStyles"
                    >
                        <slot name="menu" />
                    </ContextMenu>
                </transition>
            </div>
        </Teleport>
    </div>
</template>
<script setup lang="ts">
import ContextMenu from '@/shared/common/components/ContextMenu.vue'

const isOpen = ref(false)
const slots = useSlots();

function toggle() 
{
    isOpen.value = !isOpen.value;
    console.log(spawner);
    
}
const spawner: ComputedRef<HTMLElement> = computed(() => 
{
    const slot = slots as any
    return slot.default()[0].el
})
const getSpawnerRect: ComputedRef<DOMRect> = computed(() => 
{
    return spawner.value.getBoundingClientRect();
})


const getStyles = computed(() => {
    if (!spawner.value) return {};

    const rect = getSpawnerRect.value;
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX + rect.width;

    return {
      top: `${top}px`,
      left: `${left}px`,
    };
  })
</script>
