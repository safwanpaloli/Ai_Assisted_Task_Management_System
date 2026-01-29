<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
  >
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-semibold text-white">
          Task Detail + AI Summary
        </h1>

        <NuxtLink
          to="/tasks/create"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          + New Task
        </NuxtLink>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Filter Task"
          class="px-4 py-2 rounded-lg bg-white w-60"
        />

        <select class="px-4 py-2 rounded-lg bg-white">
          <option>Status</option>
        </select>

        <select class="px-4 py-2 rounded-lg bg-white">
          <option>All Meedech</option>
        </select>

        <select class="px-4 py-2 rounded-lg bg-white">
          <option>Priority</option>
        </select>
      </div>

      <!-- Main Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- LEFT: Task Detail -->
        <div class="lg:col-span-8">
          <div
            class="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div class="flex justify-between items-start">
              <h2 class="text-2xl font-semibold">
                {{ taskDetail.title }}
              </h2>
              <!-- <button class="text-gray-400 hover:text-gray-600">•••</button> -->
            </div>
            <!-- Badges -->
            <div class="flex gap-4">
              <span class="px-3 py-1 rounded-full bg-slate-100 text-sm">
                Status · {{ taskDetail.status }}
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-sm">
                Priority · {{ taskDetail.priority }}
              </span>
            </div>

            <!-- Description -->
            <div class="bg-slate-50 rounded-xl p-5 space-y-3">
              <h3 class="font-semibold">Description</h3>
              <p class="text-sm text-gray-600">
                Assigned to: {{ taskDetail.assigned_to}}
              </p>
              <input v-model="taskDetail.due_date"
                type="date"
                class="w-full px-4 py-2 rounded-lg border"
              />

              <p class="text-gray-600 text-sm">
                Campaign to launch a cloud-native marketing workflow
                including assets, content and distribution.
              </p>
            </div>

            <!-- AI Summary -->
            <div class="bg-slate-50 rounded-xl p-5 space-y-3">
              <h3 class="font-semibold">AI-Generated Summary</h3>
              <p class="text-sm text-gray-600">
                This task focuses on executing a multi-channel marketing
                campaign with priority alignment and content delivery.
              </p>
            </div>

            <div class="bg-slate-50 rounded-xl p-5">
              <p class="text-sm text-gray-600">
                <strong>AI Summary:</strong> Comprehensive campaign across
                channels. Priority: High.
              </p>
            </div>

            <div class="flex justify-center pt-4">
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <!-- RIGHT: Admin Panel -->
        <div class="lg:col-span-4">
          <AdminPanel>
                <aiSummary />
          </AdminPanel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AdminPanel from "@/components/AdminPanel.vue";
import useTask from "../../composables/useTask";

const {
    taskList,
    fetchTasks
} = useTask()

await fetchTasks()

const taskDetail = computed(()=> {
     return taskList[0]
})
</script>