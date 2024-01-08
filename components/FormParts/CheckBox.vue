<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <input 
        type="checkbox"
        :id="option.label"
        :name="name"
        :value="option.value"
        :checked="modelValue.includes(option.value)"
        v-model="model"
        />
      <label :for="option.label">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  type Props = {
    name: string;
    modelValue: string[];
    options: [{
      label: string;
      value: string;
    }];
  }

  const props = defineProps<Props>()

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string[]): void;
  }>();
</script>