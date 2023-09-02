import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { userData } from "../../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: userData.map((data) => data.day),
  datasets: [
    {
      label: "Spending - Last",
      data: userData.map((data) => data.amount),
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        " hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderRadius: 12,
      borderSkipped: false,
      animation: false,
    },
  ],
};
const options = {
  scales: {
    x: {
      display: true, // Show the x-axis labels
      grid: {
        display: false, // Hide the x-axis gridlines
      },
    },
    y: {
      display: false, // Hide the y-axis and gridlines
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  responsive: true,
  layout: {
    padding: {
      top: 0, // Adjust the top padding to make room for the labels
    },
  },
  tooltip: {
    enabled: false,
  },
};

function BarChart() {
  return (
    <Bar
      className="p-5 cursor-pointer bg-swlate-400"
      data={data}
      options={options}
    />
  );
}

export default BarChart;
