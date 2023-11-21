<script setup lang="ts">
defineProps(["messages"]);
</script>

<template>
  <div id="msgBox" class="flex flex-col overflow-x-auto mb-4 w-full">
    <div class="flex flex-col h-full">
      <div id="msgList" class="grid grid-cols-12 gap-y-2">
        <div
          v-for="msg in messages"
          :key="msg.time"
          :class="[
            { fromUser: msg.from.toLowerCase() === 'user' },
            'message-item',
          ]"
        >
          <div class="message-box">
            <div class="message-hd">
              {{ msg.nickName.substr(0, 1).toUpperCase() }}
            </div>
            <div class="message-bd">
              <div style="white-space: pre-wrap">{{ msg.msgContent }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-item {
  @apply col-start-1 col-end-10 p-3 rounded-lg;

  .message-box {
    @apply flex flex-row items-center;
  }

  .message-hd {
    @apply flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white;
  }

  .message-bd {
    @apply relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl;
  }

  &.fromUser {
    @apply col-start-3 col-end-13;

    .message-box {
      @apply justify-start flex-row-reverse;
    }

    .message-bd {
      @apply ml-0 mr-3 bg-indigo-100;
    }
  }
}
</style>
