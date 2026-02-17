<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    <!-- Sidebar Component -->
    <Sidebar :collapsed="collapsed" />

    <!-- Overlay -->
    <!-- <div
      v-if="!collapsed"
      @click="collapsed = true"
      class="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
    ></div> -->
     <div
      v-if="!collapsed"
      @click="collapsed = true"
      class="fixed  z-30 md:hidden"
    ></div>

    <!-- Main Section -->
    <div class="flex-1 flex flex-col relative transition-all duration-300">
      <!-- Header Component -->
      <HeaderBar
        :collapsed="collapsed"
        @toggleSidebar="collapsed = !collapsed"
      />

      <!-- Page Wrapper -->
      <div class="flex-1 relative p-6 overflow-auto">
        <!-- Page Title Row -->
        <div class="flex items-center mb-6 relative">
          <!-- Collapse Arrow -->
          <button
            @click="collapsed = !collapsed"
            class="absolute -left-5 p-2 text-blue-600"
          >
            <Icon
              :icon="collapsed ? 'mdi:arrow-right-bold' : 'mdi:arrow-left-bold'"
              class="text-xl"
            />
          </button>

          <!-- Dynamic Page Title -->
          <h1 class="text-xl font-semibold text-gray-700 ml-4">
            {{ pageTitle }}
          </h1>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const collapsed = ref(false);
const route = useRoute();

const pageTitle = computed(() => {
  if (route.path.startsWith("/appointments")) return "Appointments";
  if (route.path.startsWith("/taskboard")) return "Taskboard";
  return "Dashboard";
});
</script>
