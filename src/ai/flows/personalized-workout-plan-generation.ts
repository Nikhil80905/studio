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

const ExerciseSchema = z.object({
  name: z.string().describe("The name of the exercise."),
  sets: z.string().describe("The number of sets to perform, as a string (e.g., '3 sets')."),
  reps: z.string().describe("The number of repetitions per set, as a string (e.g., '10-12 reps')."),
  description: z.string().describe("A brief description of how to perform the exercise.").optional(),
  imageId: z.string().describe("The ID of the image for the exercise. MUST be one of the provided IDs."),
});

const WorkoutPlanOutputSchema = z.object({
  title: z.string().describe("A catchy title for the generated workout plan."),
  description: z.string().describe("A brief, encouraging description of the workout plan."),
  exercises: z.array(ExerciseSchema).describe("An array of exercises for the workout plan."),
});
export type WorkoutPlanOutput = z.infer<typeof WorkoutPlanOutputSchema>;

export async function generateWorkoutPlan(input: WorkoutPlanInput): Promise<WorkoutPlanOutput> {
  return personalizedWorkoutPlanFlow(input);
}

const workoutPlanPrompt = ai.definePrompt({
  name: 'workoutPlanPrompt',
  input: {schema: WorkoutPlanInputSchema},
  output: {schema: WorkoutPlanOutputSchema},
  prompt: `You are a world-class personal fitness trainer AI. Your task is to create a highly personalized and effective workout plan based on the user's details.

  The output MUST be a valid JSON object that strictly conforms to the provided output schema. Do not add any extra commentary or text outside of the JSON structure.

  Available Exercises and their image IDs:
  - Bench Press: 'bench-press'
  - Push-up: 'push-up'
  - Pull-up: 'pull-up'
  - Deadlift: 'deadlift'
  - Squat: 'squat'
  - Lunges: 'lunges'
  - Bicep Curl: 'bicep-curl'
  - Plank: 'plank'
  - Running: 'running'
  - Downward-Facing Dog: 'yoga'

  User Details:
  - Fitness Goal: {{{goal}}}
  - Available Equipment: {{{equipment}}}
  - Preferred Workout Duration: {{{duration}}} minutes
  - Activity Level: {{{activityLevel}}}
  - Workout History: {{{workoutHistory}}}
  - Weight: {{{weight}}} kg
  - Height: {{{height}}} cm
  - Age: {{{age}}} years
  - Gender: {{{gender}}}

  Workout Plan Requirements:
  1.  **Title**: Create a catchy, motivating title for the workout plan.
  2.  **Description**: Write a short, encouraging description of the plan and its benefits.
  3.  **Exercises**: Generate a list of 5-7 exercises appropriate for the user's goal, equipment, and experience level.
      - For each exercise, provide:
        - \`name\`: The name of the exercise.
        - \`sets\`: The number of sets (e.g., "3 sets").
        - \`reps\`: The repetition range (e.g., "10-12 reps" or "30 seconds").
        - \`description\`: A concise, clear description of how to perform the exercise safely and effectively.
        - \`imageId\`: The corresponding image ID from the list of available exercises. This MUST be one of the provided IDs.

  Generate the workout plan now.
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
