
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { nutritionPlan } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Apple, Beef, Carrot, Drumstick } from 'lucide-react';
import Image from 'next/image';

const icons: { [key: string]: React.ReactNode } = {
  Breakfast: <Carrot className="h-6 w-6 text-primary" />,
  Lunch: <Drumstick className="h-6 w-6 text-primary" />,
  Dinner: <Beef className="h-6 w-6 text-primary" />,
  Snacks: <Apple className="h-6 w-6 text-primary" />,
};

const nutritionCards = [
  {
    title: 'Daily Calories',
    description: 'Target Intake',
    value: nutritionPlan.summary.calories,
    imageId: 'calories-bg',
  },
  {
    title: 'Protein',
    description: 'Macronutrient Goal',
    value: nutritionPlan.summary.protein,
    imageId: 'protein-bg',
  },
  {
    title: 'Carbohydrates',
    description: 'Macronutrient Goal',
    value: nutritionPlan.summary.carbs,
    imageId: 'carbs-bg',
  },
  {
    title: 'Fats',
    description: 'Macronutrient Goal',
    value: nutritionPlan.summary.fats,
    imageId: 'fats-bg',
  }
];

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
        {nutritionCards.map((card, index) => {
          const image = PlaceHolderImages.find((img) => img.id === card.imageId);
          return (
            <Card key={card.title} className="relative overflow-hidden text-white card-hover" style={{ animation: `fade-in-up 0.5s ${index * 0.1 + 0.2}s ease-out forwards`, opacity: 0 }}>
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription className="text-white/80">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{card.value}</p>
                </CardContent>
              </div>
            </Card>
          );
        })}
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
