import { Bar } from "vue-chartjs";

export default function () {
    const { $axios } = useNuxtApp()

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

    async function fetchStatus() {
        const { data: statusData } = await $axios.get('status')
        stats.value = statusData;
    }

    return {
        fetchStatus,
        stats,
        chartData,
        chartOptions
    }
}