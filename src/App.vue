<script setup lang="ts">
import { ref, onMounted } from "vue";
import InputBox from "./components/InputBox.vue";
import ChatMessages from "./components/ChatMessages.vue";
import AgentList from "./components/AgentList.vue";

// variables
const chatMessagesComp = ref(null);
const msgList = ref([
  {
    from: "assistant",
    nickName: "assistant",
    msgContent: "您好，请问有什么可以帮您？",
    time: Date.now(),
  },
]);
const inputPlaceHolder = ref("请输入你的目标");
const inputEnabled = ref(true);
let userTask = "";

//init

// functions
function sendMsg(msgInput: string) {
  if (msgList.value.length === 1) {
    if (msgInput.length > 0) {
      userTask = msgInput;
    } else {
      return;
    }
  }
  msgList.value.push({
    from: "user",
    nickName: "user",
    msgContent: msgInput,
    time: Date.now(),
  });
}

//callbacks
onMounted(() => {
  console.log(`the component is now mounted.`);
});

//utils
</script>

<template>
  <div class="h-full w-full bg-gray-100 flex flex-col">
    <div class="bg-white h-10 flex flex-row space-x-4 shadow-md px-6">
      <span
        class="h-full flex flex-none items-center text-slate-400 text-sm italic"
        >Multi-Agent Demo</span
      >
      <div class="flex flex-row flex-auto">
        <div class="flex-auto"></div>
        <div class="flex-none flex">
          <AgentList />
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full flex-grow-0">
      <ChatMessages
        ref="chatMessagesComp"
        class="px-4 mt-2 flex-grow-0"
        style="margin-bottom: 7.5rem"
        :messages="msgList"
      />
      <InputBox
        :input-enabled="inputEnabled"
        :input-place-holder="inputPlaceHolder"
        class="absolute bottom-9 left-9 right-9"
        @send="sendMsg"
      />
    </div>
  </div>
</template>
