'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dumbbell } from "lucide-react";

const todaysPlan = {
  warmup: [
    { name: "Jumping Jacks", details: "2 minutes", imageId: "running" },
    { name: "Dynamic Stretches", details: "3 minutes", imageId: "yoga" },
  ],
  mainSet: [
    { name: "Squats", details: "3 sets of 12 reps", imageId: "squat" },
    { name: "Push-ups", details: "3 sets of 10 reps", imageId: "push-up" },
    { name: "Pull-ups/Rows", details: "3 sets of 8 reps", imageId: "pull-up" },
    { name: "Plank", details: "3 sets, 45s hold", imageId: "plank" },
  ],
  cooldown: [
      { name: "Stretching", details: "5 minutes", imageId: "yoga" },
  ]
};

function ExerciseItem({ exercise, index }: { exercise: { name: string; details: string; imageId: string; }, index: number }) {
  const image = PlaceHolderImages.find(img => img.id === exercise.imageId);
  return (
    <div 
      className="flex items-center gap-3 bg-accent/50 p-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-accent"
      style={{ animation: `fade-in-up 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
    >
      <div className="relative h-14 w-14 rounded-md overflow-hidden flex-shrink-0">
        {image ? (
            <Image src={image.imageUrl} alt={exercise.name} fill className="object-cover" data-ai-hint={image.imageHint} />
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10">
                <Dumbbell className="h-6 w-6 text-primary" />
            </div>
        )}
      </div>
      <div>
        <p className="font-semibold text-sm">{exercise.name}</p>
        <p className="text-xs text-muted-foreground">{exercise.details}</p>
      </div>
    </div>
  );
}


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
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Warm-up (5 mins)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {todaysPlan.warmup.map((exercise, index) => (
              <ExerciseItem key={exercise.name} exercise={exercise} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Main Set (35 mins)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {todaysPlan.mainSet.map((exercise, index) => (
               <ExerciseItem key={exercise.name} exercise={exercise} index={index + todaysPlan.warmup.length} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Cool-down (5 mins)</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {todaysPlan.cooldown.map((exercise, index) => (
               <ExerciseItem key={exercise.name} exercise={exercise} index={index + todaysPlan.warmup.length + todaysPlan.mainSet.length} />
            ))}
          </div>
        </div>

        <Button asChild className="w-full !mt-8">
          <Link href="/dashboard/workouts">Start Workout</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
