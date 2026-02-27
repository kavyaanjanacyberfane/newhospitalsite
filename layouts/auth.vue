<template>
  <div class="min-h-screen flex overflow-hidden relative">

    <!-- Left Dark Panel -->
    <div class="w-full md:w-[30%] bg-[#1f2d3d]"></div>

    <!-- Right Image -->
    <div
      class="hidden md:block flex-1 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200');"
    ></div>

    <!-- Floating Login Section -->
    <div
      class="absolute top-1/2 left-[10%] -translate-y-1/2 w-full max-w-md px-6"
    >

      <!-- Logo + Name -->
      <div class="flex items-center gap-3 mb-6">
        <!-- <img
          src="/images/sarithalogo.webp"
          alt="Saritha Dental"
          class="w-16 h-16 object-contain"
        /> -->
        <span class="text-white text-2xl font-semibold tracking-wide">
          XpressMill
        </span>
      </div>

      <!-- Login Card -->
      <!-- <div class="bg-white rounded-xl shadow-xl p-8"> -->
        <slot />
      </div>

    </div>

</template>
