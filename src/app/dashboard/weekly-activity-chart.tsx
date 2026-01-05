'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { activityData } from '@/lib/data';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function WeeklyActivityChart() {
  return (
    <Card className="col-span-4 card-hover">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Calories burned each day this week.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer
          config={{
            calories: {
              label: 'Calories',
              color: 'hsl(var(--chart-1))',
            },
            caloriesGradient: {
              label: 'Calories',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[350px] w-full"
        >
          <BarChart data={activityData} accessibilityLayer margin={{ top: 20, right: 20, bottom: 0, left: -10 }}>
             <defs>
              <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-calories)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-caloriesGradient)" stopOpacity={0.4}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
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
              tickFormatter={(value) => `${value}`}
              label={{ value: 'kcal', position: 'top', offset: 10, fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={{ fill: 'hsl(var(--accent))', radius: 8 }}
            />
            <Bar
              dataKey="calories"
              fill="url(#colorCalories)"
              radius={[8, 8, 0, 0]}
              animationDuration={800}
              animationEasing="ease-in-out"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
