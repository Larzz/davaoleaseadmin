"use client";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import type { BarShapeProps } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { MonthlySignup } from "@/lib/mock-data";

const chartConfig = {
  signups: {
    label: "Signups",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SignupsChart({ data }: { data: MonthlySignup[] }) {
  const currentMonth = data[data.length - 1]?.month;

  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar
          dataKey="signups"
          fill="var(--chart-1)"
          radius={4}
          shape={(props: BarShapeProps) => (
            <Rectangle
              {...props}
              fillOpacity={props.payload?.month === currentMonth ? 1 : 0.4}
            />
          )}
        />
      </BarChart>
    </ChartContainer>
  );
}
