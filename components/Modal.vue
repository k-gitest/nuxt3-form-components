<template>
  <button @click="open = true">{{ btText }}</button>

    <div v-if="open" class="modal">
      <slot />
      <button @click="open = false">閉じる</button>
    </div>
    <div @click="open = false" v-if="open" class="modalBack"></div>

</template>

<script setup lang="ts">
  type props = {
    btText: string;
  }
  const props = defineProps<props>()
  const open = ref(false)
</script>

<style scoped>
  .modal {
    position: fixed;
    background-color: rgba(255,255,255,1);
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
  }

  .modalBack{
    position:fixed;
    background-color: rgba(0,0,0,0.5);
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:998;
  }
</style>