<template>
  <main class="max-w-7xl mx-auto px-4 py-6">
    <div class="space-y-8">
      <!-- Page Header -->
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 class="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p class="text-gray-500 text-sm">Overview of tasks & productivity</p>
        </div>

        <div class="actions flex gap-3">
          <!-- Tasks (Secondary) -->
          <NuxtLink
            to="/tasks"
            class="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg shadow-sm transition"
          >
            Tasks
          </NuxtLink>

          <!-- New Task (Primary) -->
          <NuxtLink
            to="/tasks/create"
            class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            + New Task
          </NuxtLink>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Tasks" :value="stats.total" color="blue" />
        <DashboardCard
          title="Completed"
          :value="stats.completed"
          color="green"
        />
        <DashboardCard title="Pending" :value="stats.pending" color="yellow" />
        <DashboardCard title="High Priority" :value="stats.high" color="red" />
      </div>

      <!-- Chart Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Chart -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
          <h2 class="text-lg font-semibold mb-1">Task Distribution</h2>
          <p class="text-sm text-gray-500 mb-4">Overview of task statuses</p>

          <Bar :data="chartData" :options="chartOptions" />
        </div>

        <!-- Insights -->
        <div
          class="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-sm"
        >
          <h2 class="text-lg font-semibold mb-4">AI Insights</h2>

          <ul class="space-y-3 text-sm">
            <li class="flex justify-between">
              <span>Completion Rate</span>
              <strong>59%</strong>
            </li>
            <li class="flex justify-between">
              <span>High Risk Tasks</span>
              <strong>{{ stats.high }}</strong>
            </li>
            <li class="flex justify-between">
              <span>Overdue (AI)</span>
              <strong>5</strong>
            </li>
          </ul>

          <div class="mt-6 text-xs text-blue-100">
            <adminPanel />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const stats = ref({
  total: 128,
  completed: 76,
  pending: 32,
  high: 20,
});

const chartData = {
  labels: ["Total", "Completed", "Pending", "High Priority"],
  datasets: [
    {
      label: "Tasks",
      data: Object.values(stats.value),
      borderRadius: 8,
      backgroundColor: [
        "rgba(59,130,246,0.8)",
        "rgba(34,197,94,0.8)",
        "rgba(234,179,8,0.8)",
        "rgba(239,68,68,0.8)",
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      grid: { display: false },
      ticks: { stepSize: 10 },
    },
    x: {
      grid: { display: false },
    },
  },
};
</script>