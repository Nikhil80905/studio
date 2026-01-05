'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { progressData } from '@/lib/data';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function ProgressCharts() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Weight Tracking</CardTitle>
          <CardDescription>
            Your weight progress over the last few weeks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ChartContainer
              config={{
                weight: {
                  label: 'Weight',
                  color: 'hsl(var(--primary))',
                },
              }}
            >
              <AreaChart
                data={progressData.weight}
                accessibilityLayer
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-weight)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-weight)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  domain={['dataMin - 2', 'dataMax + 2']}
                  unit="kg"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="weight"
                  type="natural"
                  fill="url(#colorWeight)"
                  stroke="var(--color-weight)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Body Measurements</CardTitle>
          <CardDescription>Your body measurement changes.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {progressData.measurements.map((measurement, index) => (
            <div key={index} className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-muted-foreground">
                {measurement.date}
              </h3>
              <div className="mt-2 space-y-1 text-sm">
                <p>
                  <strong>Chest:</strong> {measurement.chest} cm
                </p>
                <p>
                  <strong>Waist:</strong> {measurement.waist} cm
                </p>
                <p>
                  <strong>Hips:</strong> {measurement.hips} cm
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-lg border border-dashed border-muted-foreground/50 p-4">
            <p className="text-sm text-muted-foreground">+ Add New Entry</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
