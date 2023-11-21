<script setup lang="ts">
import { ref } from "vue";
import AgentList from "./AgentList.vue";
const emits = defineEmits(["send"]);

defineProps<{
  inputPlaceHolder: string;
  inputEnabled: boolean;
}>();

//variables
const msgInput = ref("");

//functions
function clickSend() {
  const inputValue = msgInput.value;
  //clear inputs
  msgInput.value = "";
  emits("send", inputValue);
}
</script>

<template>
  <div class="flex flex-row items-center h-16 rounded-xl bg-white px-4 shadow-lg">
    <div class="flex-grow">
      <div class="relative w-full">
        <input
          v-model="msgInput"
          type="text"
          class="flex w-full border border-indigo-100 rounded-lg focus:outline-none focus:border-indigo-300 pl-4 h-10"
          :placeholder="inputPlaceHolder"
          :disabled="!inputEnabled"
          @keyup.enter="clickSend"
        />
      </div>
    </div>
    <div class="ml-4">
      <button
        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        @click="clickSend"
      >
        <span>Send</span>
        <span class="ml-2">
          <svg
            class="w-4 h-4 transform rotate-45 -mt-px"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="ml-4">
      <AgentList />
    </div>
  </div>
</template>
