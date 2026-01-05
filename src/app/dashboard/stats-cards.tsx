'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleProgress } from '@/components/ui/circle-progress';
import { Flame, Activity, TrendingUp, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const StatCard = ({ 
  icon, 
  title, 
  value, 
  footer, 
  delay,
  imageId
}: { 
  icon: React.ReactNode, 
  title: string, 
  value: React.ReactNode, 
  footer: string, 
  delay: number,
  imageId?: string
}) => {
    const image = PlaceHolderImages.find(img => img.id === imageId);
    
    return (
      <Card 
        className="card-hover relative overflow-hidden text-white"
        style={{ animation: `fade-in-up 0.5s ${delay / 1000}s ease-out forwards`, opacity: 0 }}
      >
        {image && (
          <Image
            src={image.imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/80">{title}</CardTitle>
              {icon}
          </CardHeader>
          <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-xs text-white/70">{footer}</p>
          </CardContent>
        </div>
      </Card>
    )
};


export function StatsCards() {

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              imageId="streak-bg"
            />
            <StatCard 
              icon={<TrendingUp className="h-5 w-5 text-green-500" />} 
              title="Weekly Consistency"
              value="85%"
              footer="+5% from last week"
              delay={200}
              imageId="consistency-bg"
            />
            <Card 
              className="md:col-span-1 card-hover relative overflow-hidden"
              style={{ animation: `fade-in-up 0.5s 0.3s ease-out forwards`, opacity: 0 }}
            >
                 <Image
                    src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop"
                    alt="Fitness Score"
                    fill
                    className="object-cover"
                    data-ai-hint="fitness score"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                 <div className="relative text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white/80">Fitness Score</CardTitle>
                        <HeartPulse className="h-5 w-5 text-primary" />
                    </CardHeader>
                    <CardContent className="flex items-center justify-center gap-4">
                        <CircleProgress value={82} />
                        <div>
                            <div className="text-2xl font-bold">82/100</div>
                            <p className="text-xs text-white/70">Great progress!</p>
                        </div>
                    </CardContent>
                 </div>
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
              imageId="recovery-bg"
            />
        </div>
    );
}
