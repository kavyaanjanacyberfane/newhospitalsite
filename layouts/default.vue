<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    <!-- Sidebar -->
    <aside
      :class="[
        'bg-white border-r transition-all duration-300 overflow-hidden',
        collapsed ? 'w-0' : 'w-64',
      ]"
    >
      <div v-if="!collapsed" class="flex flex-col h-full">
        <!-- Logo -->
        <div class="h-16 flex items-center px-6 border-b">
          <span class="font-semibold text-xl text-gray-700">
            Saritha Dental
          </span>
        </div>

        <!-- Menu -->
        <nav class="flex-1 p-4 space-y-2 bg-gray-100">
          <div
            class="flex items-center gap-3 p-3 rounded hover:bg-gray-100 cursor-pointer"
          >
            <Icon icon="mdi:view-dashboard-outline" class="menu-icon" />
            <span>Dashboard</span>
          </div>

          <div
            class="flex items-center gap-3 p-3 rounded hover:bg-gray-100 cursor-pointer"
          >
            <Icon icon="mdi:calendar-month-outline" class="menu-icon" />
            <span>Appointment</span>
          </div>

          <div
            class="flex items-center gap-3 p-3 rounded hover:bg-gray-100 cursor-pointer"
          >
            <Icon icon="mdi:clipboard-text-outline" class="menu-icon" />
            <span>Taskboard</span>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Main Section -->
    <div class="flex-1 flex flex-col relative transition-all duration-300">
      <!-- HEADER (with search) -->
      <header
        class="h-16 bg-white border-b flex items-center justify-between px-6"
      >
        <!-- Search Bar -->
        <div class="flex items-center bg-gray-100 rounded-md px-3 py-2 w-96">
          <Icon icon="mdi:magnify" class="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search here..."
            class="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <!-- Right Icons -->
        <div class="flex items-center gap-6 text-gray-600">
          <Icon icon="mdi:calendar-month-outline" />
          <Icon icon="mdi:message-outline" />
          <Icon icon="mdi:bell-outline" />
          <Icon icon="mdi:tune-vertical" />
          <div class="relative flex items-center" ref="dropdownRef">
            <button @click.stop="toggleDropdown" class="flex items-center">
              <Icon
                icon="mdi:account-circle-outline"
                class="text-2xl cursor-pointer"
              />
            </button>

            <!-- Dropdown -->
            <div
              v-if="showDropdown"
              class="absolute right-0 top-full mt-2 w-30 bg-white border rounded-md shadow-lg py-2 z-50 hover:bg-gray-100"
            >
              <button
                @click="logout"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 "
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- PAGE WRAPPER -->
      <div class="flex-1 relative p-6 overflow-auto">
        <!-- Title Row -->
        <div class="flex items-center mb-6 relative">
          <!-- BLUE COLLAPSE ARROW -->
          <button
            @click="collapsed = !collapsed"
            class="absolute -left-5 p-2 text-blue-600"
          >
            <Icon
              :icon="collapsed ? 'mdi:arrow-right-bold' : 'mdi:arrow-left-bold'"
              class="text-xl"
            />
          </button>

          <!-- Title -->
          <h1 class="text-xl font-semibold text-gray-700 ml-4">Dashboard</h1>
        </div>

        <!-- <div class="flex items-center mb-6 relative">
          <button
            @click="collapsed = !collapsed"
            class="absolute -left-5 p-2 text-blue-600"
          >
            <Icon icon="mdi:home" />
          </button>

          <h1 class="text-lg font-semibold text-gray-700 ml-4">/ Dashboard</h1>
        </div> -->

        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const collapsed = ref(false);
const showDropdown = ref(false);
const router = useRouter();
const dropdownRef = ref(null);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function logout() {
  showDropdown.value = false;
  router.push("/");
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.menu-icon.active {
  color: aquamarine;
}
</style>
