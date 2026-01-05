'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { getWorkoutPlanAction } from '@/app/actions';
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

const formSchema = z.object({
  goal: z.string().min(1, 'Please select a goal.'),
  equipment: z.string().min(1, 'Please select available equipment.'),
  duration: z.number().min(15).max(60),
  activityLevel: z.string().min(1, 'Please select your activity level.'),
  // Optional fields from user profile
  weight: z.number().optional(),
  height: z.number().optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function WorkoutForm() {
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
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
      // Mocked user profile data
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
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Workout</CardTitle>
          <CardDescription>
            Tell us your preferences and we'll generate a personalized plan for
            you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fitness Goal</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary goal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fat-loss">Fat Loss</SelectItem>
                        <SelectItem value="muscle-building">
                          Muscle Building
                        </SelectItem>
                        <SelectItem value="general-fitness">
                          General Fitness
                        </SelectItem>
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Generate Plan
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Your New Plan</CardTitle>
          <CardDescription>
            Your AI-generated workout plan will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          {isLoading && (
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p>Generating your plan...</p>
            </div>
          )}
          {generatedPlan && !isLoading && (
            <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: generatedPlan.replace(/\n/g, '<br>') }} />
          )}
          {!generatedPlan && !isLoading && (
            <p className="text-center text-muted-foreground">
              Fill out the form to get started.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
