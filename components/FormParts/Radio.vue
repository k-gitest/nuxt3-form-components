<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="option.label"
        :name="name"
        :value="option.value"
        :checked="option.value === modelValue"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
      <label :for="option.label">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  
  type Props = {
    modelValue: string;
    name: string;
    options: [{
        label: string;
        value: string;
      }];
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>