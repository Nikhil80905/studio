'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TodaysWorkout() {
  return (
    <Card 
      className="card-hover animate-fade-in-up"
      style={{ animationDelay: '500ms' }}
    >
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
  );
}
