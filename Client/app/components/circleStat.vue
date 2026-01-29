<template>
  <div class="flex flex-col items-center">
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center"
      :style="circleStyle"
    >
      <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sm font-semibold">
        {{ value }}
      </div>
    </div>
    <p class="text-xs mt-2 text-gray-600">{{ label }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Number,
  label: String,
  color: String,
});

const circleStyle = {
  background: `conic-gradient(${props.color} ${props.value}%, #e5e7eb 0)`,
};
</script>
