<template>
    <div class="context-menu-spawner" ref="contextMenu" @click.stop="toggle">
            <slot />
        <Teleport to="body">
            <div>
                <transition mode="out-in">
                    <ContextMenu
                        v-click-outside="() => isOpen = false"
                        v-if="isOpen"
                        :style="getStyles"
                        @close="close"
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
const contextMenu = ref()


function toggle() 
{
    isOpen.value = !isOpen.value;
}
function close()
{
    isOpen.value = false;
}
const getSpawnerRect = () => 
{
    const el = contextMenu.value as HTMLElement
    return el ? el.getBoundingClientRect() : null
}


const getStyles = computed(() => {
    const rect = getSpawnerRect();
    if(!rect) return {};

    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX + rect.width;

    return {
      top: `${top}px`,
      left: `${left}px`,
    };
  })
</script>