<template>
  <label :for="option">{{option}}</label><br>
  <input
    type="text"
    :id="option"
    :name="option"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script setup lang="ts">

  type Props = {
    modelValue: String | null | undefined;
    option: string;
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>()

</script>