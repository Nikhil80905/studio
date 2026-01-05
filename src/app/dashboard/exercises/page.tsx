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
      <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 z-0"></div>
         <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl z-0"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-card-foreground">
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
                      className="flex flex-col card-hover"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CardHeader className="p-0">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={exercise.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col justify-between p-4">
                        <div>
                          <CardTitle className="text-lg">
                            {exercise.name}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">
                            {exercise.difficulty}
                          </Badge>
                          <CardDescription className="mt-2 text-sm line-clamp-3">
                            {exercise.description}
                          </CardDescription>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-xs font-semibold uppercase text-muted-foreground">
                            Target Muscles
                          </h4>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {exercise.targetMuscles.map((muscle) => (
                              <Badge key={muscle} variant="secondary">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
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
