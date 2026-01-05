
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { nutritionPlan } from '@/lib/data';
import { Apple, Beef, Carrot, Drumstick } from 'lucide-react';
import Image from 'next/image';

const icons: { [key: string]: React.ReactNode } = {
  Breakfast: <Carrot className="h-6 w-6 text-primary" />,
  Lunch: <Drumstick className="h-6 w-6 text-primary" />,
  Dinner: <Beef className="h-6 w-6 text-primary" />,
  Snacks: <Apple className="h-6 w-6 text-primary" />,
};

export default function NutritionPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
         <Image
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
            alt="Healthy food"
            fill
            className="object-cover"
            data-ai-hint="healthy food"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Nutrition Planner
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personalized diet plan for optimal results.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Calories</CardTitle>
            <CardDescription>Target Intake</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{nutritionPlan.summary.calories}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Protein</CardTitle>
            <CardDescription>Macronutrient Goal</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{nutritionPlan.summary.protein}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Carbohydrates</CardTitle>
            <CardDescription>Macronutrient Goal</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{nutritionPlan.summary.carbs}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fats</CardTitle>
            <CardDescription>Macronutrient Goal</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{nutritionPlan.summary.fats}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Meal Plan</CardTitle>
          <CardDescription>Veg/Non-veg/Vegan options available in settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {nutritionPlan.meals.map((meal, index) => (
              <div key={meal.name}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    {icons[meal.name]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{meal.name}</h3>
                    <p className="text-sm text-muted-foreground">{meal.time}</p>
                  </div>
                </div>
                <ul className="mt-4 ml-4 list-disc space-y-1 pl-4 text-muted-foreground">
                  {meal.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {index < nutritionPlan.meals.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
