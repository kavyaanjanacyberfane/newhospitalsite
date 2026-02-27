<template>
  <!-- <aside
    :class="[
      'bg-white border-r transition-all duration-300 overflow-hidden',
      collapsed ? 'w-0' : 'w-64',
    ]"
  > -->
  <!-- <aside
  :class="[
    'bg-white border-r transition-all duration-300 overflow-hidden flex-shrink-0',
    collapsed ? 'md:w-0 w-0' : 'md:w-64 w-64'
  ]"
> -->
  <aside
    :class="[
      'bg-white border-r transition-all duration-300 overflow-hidden flex-shrink-0 fixed lg:relative h-full z-40',
      collapsed ? 'w-0' : 'w-64',
    ]"
  >
    <div v-if="!collapsed" class="flex flex-col h-full">
      <!-- Logo -->
      <div class="h-16 flex items-center px-6 border-b">
        <span class="font-semibold text-xl text-gray-700"> XpressMill </span>
      </div>

      <div
        class="relative px-4 py-6 bg-gray-100 border-b"
        ref="profileDropdownRef"
      >
        <div class="flex items-center gap-3">
          <!-- Left Image -->
          <img
            src="/images/priya.png"
            alt="User"
            class="w-14 h-14 rounded-full object-cover border"
          />

          <!-- Right Text -->
          <div class="flex-1">
            <p class="text-sm text-gray-500">Welcome,</p>

            <button
              @click.stop="open = !open"
              class="flex items-center gap-1 font-semibold text-gray-800 hover:text-black"
            >
              Dr. Priya Sharma
              <Icon icon="mdi:chevron-down" class="text-lg mt-1" />
            </button>
          </div>
        </div>

        <!-- Lucid Style Dropdown -->
        <div
          v-if="open"
          class="absolute right-2 top-20 w-44 bg-[#17191c] text-gray-400 rounded-xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.5)] py-4 z-50"
        >
          <ul class="text-sm">
            <NuxtLink
              to="/profile"
              class="flex items-center gap-3 px-6 py-3 hover:bg-white/5 cursor-pointer transition"
            >
              <Icon icon="mdi:account-outline" class="text-lg" />
              <span>My Profile</span>
            </NuxtLink>

            <li
              class="flex items-center gap-3 px-6 py-3 hover:bg-white/5 cursor-pointer transition"
            >
              <Icon icon="mdi:message-outline" class="text-lg" />
              <span>Messages</span>
            </li>

            <li
              class="flex items-center gap-3 px-6 py-3 hover:bg-white/5 cursor-pointer transition"
            >
              <Icon icon="mdi:cog-outline" class="text-lg" />
              <span>Settings</span>
            </li>

            <div class="border-t border-gray-700 my-3"></div>

            <li
              class="flex items-center gap-3 px-6 py-3 hover:bg-white/5 cursor-pointer transition"
            >
              <Icon icon="mdi:power" class="text-lg" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
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
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const profileDropdownRef = ref(null);
const route = useRoute();

defineProps({
  collapsed: Boolean,
});

/* -------------------------
   Close on outside click
------------------------- */
function handleClickOutside(event) {
  if (
    profileDropdownRef.value &&
    !profileDropdownRef.value.contains(event.target)
  ) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

/* -------------------------
   Close on route change
------------------------- */
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>
