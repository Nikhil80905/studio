import { GreetingCard } from './greeting-card';
import { StatsCards } from './stats-cards';
import { AiInsights } from './ai-insights';
import { WeeklyActivityChart } from './weekly-activity-chart';
import { TodaysWorkout } from './todays-workout';
import { LatestBlogPosts } from './latest-blog-posts';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <GreetingCard />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <WeeklyActivityChart />
        </div>
        <AiInsights />
      </div>
      <StatsCards />
      <TodaysWorkout />
      <LatestBlogPosts />
    </div>
  );
}
