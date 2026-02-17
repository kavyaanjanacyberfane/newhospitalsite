<template>
  <div class="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
    <h2 class="text-xl text-gray-700 mb-6">Login to your account</h2>

    <!-- Email -->
    <input
      v-model="username"
      type="text"
      placeholder="user@gmail.com"
      class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-teal-500"
    />

    <!-- Password -->
    <input
      v-model="password"
      type="password"
      placeholder="********"
      class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-teal-500"
    />

    <!-- Error -->
    <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>

    <!-- Remember -->
    <div class="flex items-center mb-6 text-sm text-gray-600">
      <input type="checkbox" class="mr-2 accent-teal-500" />
      Remember me
    </div>

    <!-- Login Button -->
    <button
      @click="login"
      class="w-full bg-[#17a2b8] text-white py-2 rounded hover:bg-[#138496] transition"
    >
      LOGIN
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref("");
function login() {
  // Hardcoded credentials
  const validEmail = "kavya@cyberfane.com";
  const validPassword = "123456";
  if (username.value === validEmail && password.value === validPassword) {
    error.value = "";
    router.push("/dashboard");
  } else {
    error.value = "Invalid email or password";
  }
}
</script>
