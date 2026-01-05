'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { activityData } from '@/lib/data';
import { ChartTooltipContent } from '@/components/ui/chart';

export function WeeklyActivityChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Calories burned each day this week.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={activityData}>
            <XAxis
              dataKey="day"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value} kcal`}
            />
            <Tooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={{ fill: 'hsl(var(--accent))', opacity: 0.5 }}
            />
            <Bar
              dataKey="calories"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
