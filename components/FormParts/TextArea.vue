<template>
  <textarea
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
</template>

<script setup lang="ts">
  type Props = {
    modelValue: String | null | undefined
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>()
</script>