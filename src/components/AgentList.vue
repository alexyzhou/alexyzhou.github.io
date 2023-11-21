<script setup lang="ts"></script>

<template>
  <el-popover
    placement="top-start"
    :width="400"
    trigger="click"
    popper-style="border-radius: 0.5rem; --el-popover-padding: 0"
  >
    <template #reference>
      <button
        class="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
      >
        <span>Agents</span>
        <span class="ml-2">
          <svg
            class="h-4 w-4 transform -mt-px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ea893728=""
          >
            <path
              fill="currentColor"
              d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
            />
          </svg>
        </span>
      </button>
    </template>
    <div class="grid grid-cols-1 divide-y divide-gray-200 px-5">
      <div class="py-3 text-base font-semibold w-full text-gray-500">Agent列表</div>
      <div v-for="o in 4" :key="o" class="flex justify-between py-5 gap-x-6">
        <div class="flex min-w-0 gap-x-4">
          <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white"
          >
            A
          </div>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">Erin Lindford</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">Here is the description</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">PM</p>
          <div class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="text-xs leading-5 text-gray-500">Speaking</p>
          </div>
        </div>
      </div>
    </div>
  </el-popover>
</template>
