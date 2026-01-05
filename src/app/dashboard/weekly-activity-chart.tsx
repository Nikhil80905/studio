'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { activityData } from '@/lib/data';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function WeeklyActivityChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Calories burned each day this week.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer
          config={{
            calories: {
              label: 'Calories',
              color: 'hsl(var(--primary))',
            },
          }}
          className="h-[350px] w-full"
        >
          <BarChart data={activityData} accessibilityLayer>
            <XAxis
              dataKey="day"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value} kcal`}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={{ fill: 'hsl(var(--accent))', radius: 4 }}
            />
            <Bar
              dataKey="calories"
              fill="var(--color-calories)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
