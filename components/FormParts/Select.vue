<template>
  <select
    :name="name"
    :value="modelValue"
    @change="
    emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
    <option v-for="(option, index) in options" :key="index" :selected="option === modelValue">{{ option }}</option>
  </select>
</template>

<script setup lang="ts">
  type Props = {
    name: string;
    modelValue: string;
    options: string[];
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

</script>