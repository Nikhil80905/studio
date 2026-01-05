import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, Flame, Target, Weight } from 'lucide-react';
import Link from 'next/link';
import { WeeklyActivityChart } from './weekly-activity-chart';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Goal
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Full Body Workout</div>
            <p className="text-xs text-muted-foreground">
              45 minutes of strength training
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Calories Burned
            </CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320 kcal</div>
            <p className="text-xs text-muted-foreground">
              +20% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workouts Done</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5 this week</div>
            <p className="text-xs text-muted-foreground">
              Keep up the great work!
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82.0 kg</div>
            <p className="text-xs text-muted-foreground">
              -0.5kg from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <WeeklyActivityChart />

        <Card className="col-span-4 lg:col-span-3 card-hover">
          <CardHeader>
            <CardTitle>Today's Workout</CardTitle>
            <CardDescription>Your personalized plan for today.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Warm-up (5 mins)</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Jumping Jacks - 2 minutes</li>
                <li>Dynamic Stretches - 3 minutes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Main Set (35 mins)</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Squats: 3 sets of 12 reps</li>
                <li>Push-ups: 3 sets of 10 reps</li>
                <li>Pull-ups/Rows: 3 sets of 8 reps</li>
                <li>Plank: 3 sets, 45-second hold</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Cool-down (5 mins)</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Stretching - 5 minutes</li>
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/dashboard/workouts">Start Workout</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
