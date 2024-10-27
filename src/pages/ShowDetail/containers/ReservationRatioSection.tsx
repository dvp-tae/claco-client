import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ReactComponent as Male } from "@/assets/svgs/Male.svg";
import { ReactComponent as Female } from "@/assets/svgs/Female.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { forwardRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const ReservationRatioSection = forwardRef<HTMLDivElement>((_, ref) => {
  const chartData = [27, 36, 20, 6, 6];
  const maxDataValue = Math.max(...chartData);
  const malePercentage = 22;
  const femalePercentage = 78;
  const isMaleHigher = malePercentage > femalePercentage;

  const ageGroupData = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    datasets: [
      {
        data: [27, 36, 20, 6, 6],
        backgroundColor: chartData.map((value) =>
          value === maxDataValue
            ? "rgba(233, 102, 58, 1)"
            : "rgba(50, 50, 50, 1)",
        ),
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 6,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: "end" as const,
        align: "end" as const,
        padding: { top: 8 },
        color: chartData.map((value) =>
          value === maxDataValue
            ? "rgba(233, 102, 58, 1)"
            : "rgba(138, 133, 133, 1)",
        ),
        font: {
          size: 16,
          weight: 500,
          family: "Pretendard",
        },
        formatter: (value: number) => `${value}%`,
        clip: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Pretendard",
            size: 16,
            weight: 500,
          },
          color: "rgba(236, 235, 231, 1)",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        suggestedMax: Math.max(...ageGroupData.datasets[0].data) + 8,
      },
    },
  };

  return (
    <section ref={ref}>
      <div className="px-6 pb-[103px]">
        <span className="headline2-bold text-grayscale-80">예매자 비율</span>

        <div className="w-[249px] mt-10 mx-[46px] mx-auto mb-9">
          <Bar data={ageGroupData} options={options} />
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="flex space-x-1 items-center justify-center rounded-[5px] bg-grayscale-20 pl-6 pr-9 py-[22px]">
            <Male className={isMaleHigher ? "change-gender-fillcolor" : ""} />
            <div className="flex flex-col space-y-1">
              <span className="body1-medium text-white">남성</span>
              <span
                className={`heading1-semibold ${isMaleHigher ? "text-primary-400" : "text-grayscale-60"}`}
              >
                {malePercentage}%
              </span>
            </div>
          </div>
          <div className="flex space-x-1 items-center justify-center rounded-[5px] bg-grayscale-20 pl-6 pr-9 py-[22px]">
            <Female
              className={!isMaleHigher ? "change-gender-fillcolor" : ""}
            />
            <div className="flex flex-col space-y-1">
              <span className="body1-medium text-white">여성</span>
              <span
                className={`heading1-semibold ${!isMaleHigher ? "text-primary-400" : "text-grayscale-60"}`}
              >
                {femalePercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default ReservationRatioSection;
