'use server';

import {
  generateWorkoutPlan,
  type WorkoutPlanInput,
  type WorkoutPlanOutput,
} from '@/ai/flows/personalized-workout-plan-generation';

export async function getWorkoutPlanAction(input: WorkoutPlanInput): Promise<{ success: true; plan: WorkoutPlanOutput } | { success: false; error: string }> {
  try {
    const result = await generateWorkoutPlan(input);
    return { success: true, plan: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate workout plan.' };
  }
}
