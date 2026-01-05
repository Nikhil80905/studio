import { ProgressCharts } from './progress-charts';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Progress Tracking</h1>
        <p className="text-muted-foreground">
          Visualize your journey and celebrate your achievements.
        p>
      </div>
      <ProgressCharts />
    </div>
  );
}
