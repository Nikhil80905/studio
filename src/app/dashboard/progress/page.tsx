import Image from 'next/image';
import { ProgressCharts } from './progress-charts';

export default function ProgressPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
          alt="Progress Tracking"
          fill
          className="object-cover"
          data-ai-hint="hiking journey"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Progress Tracking
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize your journey and celebrate your achievements.
          </p>
        </div>
      </div>
      <ProgressCharts />
    </div>
  );
}
