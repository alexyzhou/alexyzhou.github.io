<script setup lang="ts"></script>

<template>
  <el-popover
    placement="top-start"
    :width="400"
    trigger="click"
    popper-style="border-radius: 0.5rem; --el-popover-padding: 0"
  >
    <template #reference>
      <div class="flex items-center">
        <svg
          class="mr-1.5 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
          ></path>
        </svg>
        <span class="text-gray-500 text-sm"> Agents </span>
      </div>
    </template>
    <div class="grid grid-cols-1 divide-y divide-gray-200 px-5">
      <div class="py-3 text-base font-semibold w-full text-gray-500">
        Agent列表
      </div>
      <div v-for="o in 4" :key="o" class="flex justify-between py-5 gap-x-6">
        <div class="flex min-w-0 gap-x-4">
          <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white"
          >
            A
          </div>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              Erin Lindford
            </p>
            <p class="mt-1 text-xs leading-5 text-gray-500">
              Here is the description
            </p>
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
