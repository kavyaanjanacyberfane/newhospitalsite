<template>
    <!-- <aside
    :class="[
      'bg-white border-r transition-all duration-300 overflow-hidden',
      collapsed ? 'w-0' : 'w-64',
    ]"
  > -->
 <aside
  :class="[
    'bg-white border-r transition-all duration-300 overflow-hidden flex-shrink-0',
    collapsed ? 'md:w-0 w-0' : 'md:w-64 w-64'
  ]"
>
    <div v-if="!collapsed" class="flex flex-col h-full">
      <!-- Logo -->
      <div class="h-16 flex items-center px-6 border-b">
        <span class="font-semibold text-xl text-gray-700">
          Saritha Dental
        </span>
      </div>

      <nav class="flex-1 p-4 space-y-2 bg-gray-100">
        <NuxtLink
          to="/dashboard"
          class="flex items-center gap-3 p-3 rounded hover:bg-gray-200"
          active-class="bg-gray-200 font-semibold"
        >
          <Icon icon="mdi:view-dashboard-outline" />
          <span>Dashboard</span>
        </NuxtLink>

        <NuxtLink
          to="/appointments"
          class="flex items-center gap-3 p-3 rounded hover:bg-gray-200"
          active-class="bg-gray-200 font-semibold"
        >
          <Icon icon="mdi:calendar-month-outline" />
          <span>Appointment</span>
        </NuxtLink>

        <NuxtLink
          to="/taskboard"
          class="flex items-center gap-3 p-3 rounded hover:bg-gray-200"
          active-class="bg-gray-200 font-semibold"
        >
          <Icon icon="mdi:clipboard-text-outline" />
          <span>Taskboard</span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  collapsed: Boolean,
});
</script>
