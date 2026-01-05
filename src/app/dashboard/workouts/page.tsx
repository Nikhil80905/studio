import { WorkoutForm } from './workout-form';

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Personalized Workouts</h1>
        <p className="text-muted-foreground">
          Let our AI create the perfect workout plan tailored to your needs.
        </p>
      </div>
      <WorkoutForm />
    </div>
  );
}
