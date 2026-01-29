<script setup>
defineProps({
  title: String,
  value: Number,
  color: String
})
</script>

<template>
  <div
    class="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
  >
    <p class="text-sm text-gray-500 mb-1">
      {{ title }}
    </p>
    <p
      class="text-3xl font-semibold"
      :class="{
        'text-blue-600': color === 'blue',
        'text-green-600': color === 'green',
        'text-yellow-600': color === 'yellow',
        'text-red-600': color === 'red'
      }"
    >
      {{ value }}
    </p>
  </div>
</template>
