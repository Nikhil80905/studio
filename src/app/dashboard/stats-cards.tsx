'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleProgress } from '@/components/ui/circle-progress';
import { Flame, Activity, TrendingUp } from 'lucide-react';

const StatCard = ({ icon, title, value, footer, delay }: { icon: React.ReactNode, title: string, value: React.ReactNode, footer: string, delay: number }) => (
    <Card 
      className="card-hover"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards', opacity: 0 }}
    >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{footer}</p>
        </CardContent>
    </Card>
);


export function StatsCards() {

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-fade-in-up">
            <StatCard 
              icon={<Flame className="h-5 w-5 text-destructive" />} 
              title="Workout Streak"
              value={
                <div className="flex items-center gap-2">
                    5 days <span className="text-destructive animate-pulse">🔥</span>
                </div>
              }
              footer="Best streak: 12 days"
              delay={100}
            />
            <StatCard 
              icon={<TrendingUp className="h-5 w-5 text-green-500" />} 
              title="Weekly Consistency"
              value="85%"
              footer="+5% from last week"
              delay={200}
            />
            <Card 
              className="md:col-span-1 card-hover"
              style={{ animationDelay: `300ms`, animationFillMode: 'forwards', opacity: 0 }}
            >
                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Fitness Score</CardTitle>
                 </CardHeader>
                <CardContent className="flex items-center justify-center gap-4">
                     <CircleProgress value={82} />
                     <div>
                        <div className="text-2xl font-bold">82/100</div>
                        <p className="text-xs text-muted-foreground">Great progress!</p>
                    </div>
                </CardContent>
            </Card>
            <StatCard 
              icon={<Activity className="h-5 w-5 text-blue-500" />} 
              title="Recovery Status"
              value={
                <div className="flex items-center gap-2">
                    Ready <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </div>
              }
              footer="Recommendation: Train Hard"
              delay={400}
            />
        </div>
    );
}
