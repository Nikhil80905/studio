'use server';

/**
 * @fileOverview Generates personalized workout plans based on user input.
 *
 * - generateWorkoutPlan - A function that generates a workout plan.
 * - WorkoutPlanInput - The input type for the generateWorkoutPlan function.
 * - WorkoutPlanOutput - The return type for the generateWorkoutPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkoutPlanInputSchema = z.object({
  goal: z
    .string()
    .describe(
      'The fitness goal (fat loss, muscle building, general fitness).' + ' ' + 'This will affect all of the exercises assigned.'
    ),
  equipment: z
    .string()
    .describe('The available equipment (home, gym, or both).')
    .optional(),
  duration: z
    .number()
    .describe('The workout duration in minutes (15, 30, 45, 60).')
    .optional(),
  activityLevel: z
    .string()
    .describe('The activity level (beginner, intermediate, advanced).')
    .optional(),
  weight: z
    .number()
    .describe('The users weight in kilograms.')
    .optional(),
  height: z
    .number()
    .describe('The users height in centimeters')
    .optional(),
  age: z.number().describe('The users age in years.').optional(),
  gender: z.string().describe('The users gender.').optional(),
  workoutHistory: z
    .string()
    .describe('The workout completion history, to customize to the users needs')
    .optional(),
});
export type WorkoutPlanInput = z.infer<typeof WorkoutPlanInputSchema>;

const WorkoutPlanOutputSchema = z.object({
  plan: z.string().describe('The generated workout plan.'),
});
export type WorkoutPlanOutput = z.infer<typeof WorkoutPlanOutputSchema>;

export async function generateWorkoutPlan(input: WorkoutPlanInput): Promise<WorkoutPlanOutput> {
  return personalizedWorkoutPlanFlow(input);
}

const workoutPlanPrompt = ai.definePrompt({
  name: 'workoutPlanPrompt',
  input: {schema: WorkoutPlanInputSchema},
  output: {schema: WorkoutPlanOutputSchema},
  prompt: `You are a personal fitness trainer who creates workout plans tailored to the user.

  Consider the following information about the user:

  Goal: {{{goal}}}
  Equipment: {{{equipment}}}
  Duration: {{{duration}}} minutes
  Activity Level: {{{activityLevel}}}
  Workout history: {{{workoutHistory}}}
  Weight: {{{weight}}} KG
  Height: {{{height}}} CM
  Age: {{{age}}} years
  Gender: {{{gender}}}

  Create a workout plan that is tailored to this user and their needs, formatted as a numbered list.
  Consider the users height, weight, age, gender, and goals, when providing the workout plan, such that it is safe for them.
`,
});

const personalizedWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'personalizedWorkoutPlanFlow',
    inputSchema: WorkoutPlanInputSchema,
    outputSchema: WorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await workoutPlanPrompt(input);
    return output!;
  }
);
