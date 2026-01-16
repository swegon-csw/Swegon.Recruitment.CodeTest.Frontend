import { BarElement, CategoryScale, Chart as ChartJS, Legend,LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

import { ChartData } from "@/types/calculation.types";

import { ChartCard, ChartTitle } from "./CalculatorChart.styled";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CalculatorChartProps {
  chartData: ChartData;
}

export default function CalculatorChart({ chartData }: CalculatorChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartCard>
      <ChartTitle>Energy Analysis</ChartTitle>
      <Bar data={chartData} options={options} />
    </ChartCard>
  );
}
