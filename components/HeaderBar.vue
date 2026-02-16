<template>
  <header class="bg-white shadow h-16 flex items-center px-6 justify-between">
    <button @click="$emit('toggle')" class="text-2xl">
      <Icon icon="mdi:menu"/>
    </button>

    <div class="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-1/3">
      <Icon icon="mdi:magnify" class="mr-2"/>
      <input
        type="text"
        placeholder="Search..."
        class="bg-transparent w-full focus:outline-none"
      />
    </div>

    <Icon icon="mdi:account-circle" class="text-3xl"/>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
