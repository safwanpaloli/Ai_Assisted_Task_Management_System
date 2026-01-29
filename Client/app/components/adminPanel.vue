<template>
  <aside class="sidebar">
    <!-- Admin User -->
    <div class="admin-card">
      <img class="avatar" src="https://i.pravatar.cc/80" />
      <h3>Admin User</h3>
    </div>

    <!-- Menu -->
    <ul class="menu">
      <li class="active">Tasks</li>
      <li>Users <small>(Admin only)</small></li>
      <li class="logout">Logout</li>
    </ul>

    <div class="additional-actions" >
        <slot />
    </div>
    
    <!-- Graph -->
    <div class="chart-card">
      <h4>Monthly Task Completion</h4>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </aside>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Completed Tasks',
      data: [30, 60, 45, 80, 55],
      backgroundColor: '#3b82f6',
      borderRadius: 6,
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  background: #0f172a;
  color: #fff;
  padding: 16px;
  border-radius: 14px;
}

.admin-card {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.menu {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.menu li {
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.menu li.active {
  background: #2563eb;
}

.menu li.logout {
  color: #f87171;
}

.chart-card {
  background: #020617;
  padding: 12px;
  border-radius: 12px;
}
</style>
