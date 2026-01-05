'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Check, Loader2, Dumbbell } from 'lucide-react';
import Image from 'next/image';

import { getWorkoutPlanAction } from '@/app/actions';
import { type WorkoutPlanOutput } from '@/ai/flows/personalized-workout-plan-generation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  goal: z.string().min(1, 'Please select a goal.'),
  equipment: z.string().min(1, 'Please select available equipment.'),
  duration: z.number().min(15).max(60),
  activityLevel: z.string().min(1, 'Please select your activity level.'),
  weight: z.number().optional(),
  height: z.number().optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function WorkoutForm() {
  const [generatedPlan, setGeneratedPlan] = useState<WorkoutPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: 'muscle-building',
      equipment: 'gym',
      duration: 45,
      activityLevel: 'intermediate',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setGeneratedPlan(null);

    const result = await getWorkoutPlanAction({
      ...values,
      weight: 82,
      height: 175,
      age: 28,
      gender: 'male',
      workoutHistory: 'Completed 3 of 5 workouts last week.'
    });

    setIsLoading(false);

    if (result.success && result.plan) {
      setGeneratedPlan(result.plan);
      toast({
        title: 'Plan Generated!',
        description: 'Your personalized workout plan is ready.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Could not generate workout plan.',
      });
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Create Your Workout</CardTitle>
          <CardDescription>
            Tell us your preferences and we'll generate a personalized plan for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fitness Goal</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary goal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fat-loss">Fat Loss</SelectItem>
                        <SelectItem value="muscle-building">Muscle Building</SelectItem>
                        <SelectItem value="general-fitness">General Fitness</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="equipment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Equipment</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Where will you work out?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">Home (Bodyweight/Light equip.)</SelectItem>
                        <SelectItem value="gym">Gym (Full equipment)</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="activityLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Activity Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workout Duration: {field.value} minutes</FormLabel>
                    <FormControl>
                      <Slider
                        min={15}
                        max={60}
                        step={15}
                        defaultValue={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                      />
                    </FormControl>
                    <FormDescription>How long you want to work out.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Plan
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="lg:col-span-2">
        {isLoading && (
          <div className="flex h-full min-h-[400px] w-full items-center justify-center rounded-lg border border-dashed bg-card/50">
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-fade-in">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="font-semibold">Generating your personalized plan...</p>
              <p className="text-sm">Our AI is crafting the perfect workout for you.</p>
            </div>
          </div>
        )}
        
        {generatedPlan && !isLoading && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary">{generatedPlan.title}</h2>
              <p className="text-muted-foreground">{generatedPlan.description}</p>
            </div>
            <div className="space-y-4">
              {generatedPlan.exercises.map((exercise, index) => {
                 const image = PlaceHolderImages.find(
                    (img) => img.id === exercise.imageId
                  );
                return (
                <Card 
                  key={index}
                  className="card-hover overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards', opacity: 0 }}
                >
                  <CardContent className="p-0 flex items-center gap-4">
                     <div className="relative aspect-square w-24 h-24 flex-shrink-0">
                      {image ? (
                        <Image
                          src={image.imageUrl}
                          alt={exercise.name}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-primary/10">
                          <Dumbbell className="h-8 w-8 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 py-4">
                      <h3 className="font-bold text-card-foreground">{exercise.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exercise.sets} &bull; {exercise.reps}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="mr-4">
                        <Check className="h-5 w-5 text-green-500" />
                    </Button>
                  </CardContent>
                </Card>
              )})}
            </div>
            <Button className="w-full">Start Workout</Button>
          </div>
        )}

        {!generatedPlan && !isLoading && (
           <div className="flex h-full min-h-[400px] w-full items-center justify-center rounded-lg border border-dashed bg-card/50">
            <div className="text-center text-muted-foreground animate-fade-in">
              <h3 className="text-lg font-semibold">Your New Plan Awaits</h3>
              <p className="text-sm">Fill out the form to get started.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
