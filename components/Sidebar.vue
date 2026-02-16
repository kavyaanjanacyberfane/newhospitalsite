<template>
  <div
    :class="[
      'bg-sidebar text-white h-full flex flex-col',
      collapsed ? 'w-20' : 'w-64'
    ]"
  >
    <div class="flex items-center justify-center h-16 border-b border-gray-700">
      <Icon icon="mdi:hospital-building" class="text-2xl"/>
      <span v-if="!collapsed" class="ml-2 font-bold">Hospital Site</span>
    </div>

    <nav class="flex-1 p-2 space-y-2">
      <div class="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <Icon icon="mdi:view-dashboard"/>
        <span v-if="!collapsed" class="ml-3">Dashboard</span>
      </div>

      <div class="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
        <Icon icon="mdi:clipboard-text"/>
        <span v-if="!collapsed" class="ml-3">Taskboard</span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  collapsed: Boolean
})

defineEmits(['update:collapsed'])
</script>

