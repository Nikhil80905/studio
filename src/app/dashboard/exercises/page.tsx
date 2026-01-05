import Image from 'next/image';
import { exercises } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['All', ...Array.from(new Set(exercises.map((e) => e.category)))];

export default function ExercisesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Exercise Library</h1>
        <p className="text-muted-foreground">
          Browse our collection of exercises to build your perfect workout.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exercises
                .filter((e) => category === 'All' || e.category === category)
                .map((exercise) => {
                  const image = PlaceHolderImages.find((img) => img.id === exercise.imageId);
                  return (
                    <Card key={exercise.name} className="flex flex-col card-hover">
                      <CardHeader>
                        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={exercise.name}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col justify-between">
                        <div>
                          <CardTitle className="text-lg">{exercise.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{exercise.difficulty}</Badge>
                          <CardDescription className="mt-2 text-sm">
                            {exercise.description}
                          </CardDescription>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground">Target Muscles</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {exercise.targetMuscles.map(muscle => (
                                    <Badge key={muscle} variant="secondary">{muscle}</Badge>
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
