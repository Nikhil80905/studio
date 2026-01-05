'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
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
          <CardDescription>Your weight progress over the last few weeks.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={progressData.weight}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} stroke="hsl(var(--muted-foreground))" fontSize={12} unit="kg" />
              <ChartTooltip
                cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="hsl(var(--primary))"
                fill="url(#colorWeight)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
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
              <h3 className="font-semibold text-muted-foreground">{measurement.date}</h3>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Chest:</strong> {measurement.chest} cm</p>
                <p><strong>Waist:</strong> {measurement.waist} cm</p>
                <p><strong>Hips:</strong> {measurement.hips} cm</p>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-muted-foreground/50 flex items-center justify-center p-4">
            <p className="text-sm text-muted-foreground">+ Add New Entry</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
