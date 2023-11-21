<script setup lang="ts">
import { ref, onMounted } from "vue";
import InputBox from "./components/InputBox.vue";
import ChatMessages from "./components/ChatMessages.vue";

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
  <div class="h-full w-full bg-gray-100">
    <div class="flex flex-row h-full w-full">
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
