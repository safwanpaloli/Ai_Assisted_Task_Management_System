<template>
  <div class="min-h-screen flex justify-center">
    <div class="w-[360px] space-y-4">

      <!-- Sidebar Card -->
      <div class="bg-white rounded-xl shadow">
        <div class="p-4 border-b font-semibold text-blue-800">
          Admin User
        </div>

        <div class="p-4 space-y-3 text-sm">
          <p class="font-semibold text-blue-600">Tasks</p>
          <p class="text-gray-600">
            Users <span class="text-xs">(Only visible to Admin)</span>
          </p>
          <p class="text-gray-600">Logout</p>
        </div>

        <!-- Circular Stats -->
        <div class="p-4">
          <div class="flex justify-between">
            <CircleStat label="Total Tasks" :value="150" color="#3b82f6" />
            <CircleStat label="Completed" :value="90" color="#10b981" />
            <CircleStat label="Non-Tasks" :value="90" color="#6366f1" />
          </div>
          <p class="text-center text-sm mt-3 font-medium">
            Monthly Task Completion
          </p>
        </div>

        <!-- Small Chart -->
        <div class="h-32 px-4 pb-4">
          <Bar :data="chartData" :options="smallChartOptions" />
        </div>
      </div>

      <div class="additional actions">
        <slot />
      </div>
      <!-- Large Chart -->
      <div class="bg-slate-800 rounded-xl p-4 text-white shadow">
        <p class="text-sm mb-3">Monthly Task Completion</p>
        <div class="h-48">
          <Bar :data="chartData" :options="darkChartOptions" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import CircleStat from "./CircleStat.vue";

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [10, 120, 140, 40, 130],
      backgroundColor: "#3b82f6",
      borderRadius: 6,
    },
  ],
};

const smallChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { display: false },
  },
};

const darkChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { display: false },
    },
    y: {
      ticks: { color: "#fff" },
      grid: { color: "#334155" },
    },
  },
};
</script>
