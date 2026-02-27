<template>
  <!-- Header -->
  <div class="flex items-center mb-6 relative">
    <button
      @click="collapsed = !collapsed"
      class="absolute -left-5 p-2 text-blue-600"
    >
      <Icon icon="mdi:home-outline" class="text-xl" />
    </button>
    <span class="text-md text-gray-500 ml-3">/ Doctor / Profile</span>
  </div>
  <div class="p-4 md:p-6 space-y-6">
    <!-- Top Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- LEFT SIDE -->
      <div class="lg:col-span-1 space-y-6">
        <!-- Profile Card -->
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <img
            src="/images/priya.png"
            class="w-28 h-28 rounded-full mx-auto object-cover"
          />

          <h3 class="mt-4 text-lg font-semibold">Dr. Priya Sharma</h3>

          <p class="text-sm text-gray-500">Hyderabad, India</p>

          <div class="mt-4 flex justify-center gap-3">
            <button class="px-4 py-2 bg-cyan-500 text-white rounded-md text-sm">
              Follow
            </button>
            <button class="px-4 py-2 border rounded-md text-sm">Message</button>
          </div>
        </div>

        <!-- Info Card (Under Profile) -->
        <div class="bg-white rounded-xl shadow p-6">
          <h4 class="font-semibold text-gray-700 mb-4">Info</h4>

          <div class="space-y-3 text-sm text-gray-600">
            <p><strong>Address:</strong> 795 Advent, Suite 01</p>
            <p><strong>Email:</strong> priya.sharma@gmail.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="lg:col-span-3 space-y-6">
        <!-- 4 Input Cards (Replaced Stats) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow p-4">
            <label class="text-sm text-gray-500">Input 1</label>
            <input
              type="text"
              class="w-full mt-2 border rounded-md p-2 text-sm"
            />
          </div>

          <div class="bg-white rounded-xl shadow p-4">
            <label class="text-sm text-gray-500">Input 2</label>
            <input
              type="text"
              class="w-full mt-2 border rounded-md p-2 text-sm"
            />
          </div>

          <div class="bg-white rounded-xl shadow p-4">
            <label class="text-sm text-gray-500">Input 3</label>
            <input
              type="text"
              class="w-full mt-2 border rounded-md p-2 text-sm"
            />
          </div>

          <div class="bg-white rounded-xl shadow p-4">
            <label class="text-sm text-gray-500">Input 4</label>
            <input
              type="text"
              class="w-full mt-2 border rounded-md p-2 text-sm"
            />
          </div>
        </div>

        <div class="bg-white rounded-xl shadow p-6">
          <!-- Tabs -->
          <div class="flex gap-3 mb-6">
            <button
              @click="activeTab = 'basic'"
              :class="
                activeTab === 'basic'
                  ? 'px-4 py-2 bg-cyan-500 text-white rounded-full text-sm'
                  : 'px-4 py-2 border rounded-full text-sm'
              "
            >
              Basic
            </button>

            <button
              @click="activeTab = 'account'"
              :class="
                activeTab === 'account'
                  ? 'px-4 py-2 bg-cyan-500 text-white rounded-full text-sm'
                  : 'px-4 py-2 border rounded-full text-sm'
              "
            >
              Account
            </button>

            <button
              @click="activeTab = 'general'"
              :class="
                activeTab === 'general'
                  ? 'px-4 py-2 bg-cyan-500 text-white rounded-full text-sm'
                  : 'px-4 py-2 border rounded-full text-sm'
              "
            >
              General
            </button>
          </div>

          <!-- BASIC TAB -->
          <div v-if="activeTab === 'basic'">
            <h4 class="font-semibold text-gray-700 mb-4">Basic Information</h4>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                class="border rounded-md p-2 text-sm"
              />

              <input
                type="text"
                placeholder="Last Name"
                class="border rounded-md p-2 text-sm"
              />

              <div class="flex items-center gap-4 col-span-1 md:col-span-2">
                <label class="flex items-center gap-2 text-sm">
                  <input type="radio" name="gender" />
                  Male
                </label>
                <label class="flex items-center gap-2 text-sm">
                  <input type="radio" name="gender" />
                  Female
                </label>
              </div>

              <input type="date" class="border rounded-md p-2 text-sm" />

              <input
                type="text"
                placeholder="Website (http://)"
                class="border rounded-md p-2 text-sm"
              />

              <input
                type="text"
                placeholder="Address Line 1"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="text"
                placeholder="Address Line 2"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="text"
                placeholder="City"
                class="border rounded-md p-2 text-sm"
              />

              <input
                type="text"
                placeholder="State/Province"
                class="border rounded-md p-2 text-sm"
              />

              <select
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              >
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            <div class="mt-6 flex gap-3">
              <button class="bg-cyan-500 text-white px-4 py-2 rounded text-sm">
                Update
              </button>
              <button class="border px-4 py-2 rounded text-sm">Cancel</button>
            </div>
          </div>

          <!-- ACCOUNT TAB -->
          <div v-if="activeTab === 'account'">
            <h4 class="font-semibold text-gray-700 mb-4">Account Data</h4>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Username"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="email"
                placeholder="Email"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="text"
                placeholder="Phone Number"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <h5 class="col-span-1 md:col-span-2 font-medium mt-4">
                Change Password
              </h5>

              <input
                type="password"
                placeholder="Current Password"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="password"
                placeholder="New Password"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />

              <input
                type="password"
                placeholder="Confirm New Password"
                class="border rounded-md p-2 text-sm col-span-1 md:col-span-2"
              />
            </div>

            <div class="mt-6 flex gap-3">
              <button class="bg-cyan-500 text-white px-4 py-2 rounded text-sm">
                Update
              </button>
              <button class="border px-4 py-2 rounded text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import { ref } from "vue";

const activeTab = ref("basic");
</script>
