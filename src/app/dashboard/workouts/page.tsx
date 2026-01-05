import { WorkoutForm } from './workout-form';

export default function WorkoutsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop')" }}
          data-ai-hint="gym workout"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Personalized Workouts
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let our AI create the perfect workout plan tailored to your needs.
          </p>
        </div>
      </div>
      <WorkoutForm />
    </div>
  );
}
