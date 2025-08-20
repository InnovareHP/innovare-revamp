"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartData = Record<string, string | number>;

interface EmployeeChartProps {
  data: ChartData[];
  mode: "weekly" | "monthly";
}

export default function EmployeeChart({ data, mode }: EmployeeChartProps) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-sm">No data available</p>;
  }

  // Exclude x-axis keys
  const employeeKeys = Object.keys(data[0]).filter(
    (k) => k !== "day" && k !== "date"
  );

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={mode === "weekly" ? "day" : "date"} />
          <YAxis
            tickFormatter={(val) =>
              typeof val === "number" ? val.toFixed(1) : val
            }
          />
          <Tooltip
            formatter={(val) =>
              typeof val === "number" ? val.toFixed(2) : val
            }
          />
          <Legend />
          {employeeKeys.map((emp, idx) => (
            <Bar
              key={emp}
              dataKey={emp}
              stackId="a" // stack all employees
              fill={`hsl(${idx * 60},70%,50%)`}
              radius={idx === employeeKeys.length - 1 ? [4, 4, 0, 0] : 0}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
