'use client';

import Image from 'next/image';
import { exercises } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  'All',
  ...Array.from(new Set(exercises.map((e) => e.category))),
];

export default function ExercisesPage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
         <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
            alt="Exercise Library"
            fill
            className="object-cover"
            data-ai-hint="fitness workout"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Exercise Library
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The fitness that fits you. Browse our collection of exercises to
            build your perfect workout.
          </p>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exercises
                .filter((e) => category === 'All' || e.category === category)
                .map((exercise, index) => {
                  const image = PlaceHolderImages.find(
                    (img) => img.id === exercise.imageId
                  );
                  return (
                    <Card
                      key={exercise.name}
                      className="flex flex-col card-hover group relative overflow-hidden"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={exercise.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        </div>
                      
                      <div className="relative flex flex-1 flex-col justify-between p-4 !pb-2 z-10 -mt-20">
                       <div>
                          <CardTitle className="text-lg text-white">
                            {exercise.name}
                          </CardTitle>
                           <Badge variant="secondary" className="mt-2 text-xs">
                            {exercise.difficulty}
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-xs font-semibold uppercase text-white/70">
                            Target Muscles
                          </h4>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {exercise.targetMuscles.map((muscle) => (
                              <Badge key={muscle} variant="outline" className="text-white/90 border-white/30 text-xs">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
