'use server';

import {
  generateWorkoutPlan,
  type WorkoutPlanInput,
} from '@/ai/flows/personalized-workout-plan-generation';

export async function getWorkoutPlanAction(input: WorkoutPlanInput) {
  try {
    const result = await generateWorkoutPlan(input);
    return { success: true, plan: result.plan };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate workout plan.' };
  }
}
