<template>
  <header class="h-16 bg-white border-b flex items-center justify-between px-6">
    <!-- Search -->
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
            class="w-full text-left px-4 py-2 text-sm text-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
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
