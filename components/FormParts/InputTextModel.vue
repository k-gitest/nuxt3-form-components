<template>
  <div>
    <label :for="option">{{option}}</label><br>
    <input
      type="text"
      :id="option"
      :name="option"
      v-model="model" />
  </div>
</template>

<script setup lang="ts">
  const model = defineModel<string | null | undefined>('text')
  const option = defineModel<string>('option')
</script>