import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { nutritionPlan } from '@/lib/data';
import { Apple, Beef, Carrot, Drumstick } from 'lucide-react';

const icons: { [key: string]: React.ReactNode } = {
  Breakfast: <Carrot className="h-6 w-6 text-primary" />,
  Lunch: <Drumstick className="h-6 w-6 text-primary" />,
  Dinner: <Beef className="h-6 w-6 text-primary" />,
  Snacks: <Apple className="h-6 w-6 text-primary" />,
};

export default function NutritionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Nutrition Planner</h1>
        <p className="text-muted-foreground">
          Your personalized diet plan for optimal results.
        </p>
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
