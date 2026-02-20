'use client';

import Image from 'next/image';
import { exercises } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle, Info } from 'lucide-react';

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
            priority
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Exercise Library
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Master your form. Explore our curated list of exercises with detailed instructions for every muscle group.
          </p>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center overflow-x-auto pb-4">
          <TabsList className="bg-muted/50">
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
                              data-ai-hint={image.imageHint.split(' ').slice(0, 2).join(' ')}
                            />
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        </div>
                      
                      <div className="relative flex flex-1 flex-col justify-between p-4 !pb-2 z-10 -mt-20">
                       <div className="mb-4">
                          <CardTitle className="text-lg text-white">
                            {exercise.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                             <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-tight px-2 py-0">
                              {exercise.difficulty}
                            </Badge>
                             <Badge variant="outline" className="text-[10px] text-white/80 border-white/20 uppercase font-bold tracking-tight px-2 py-0">
                              {exercise.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-1 mb-4">
                            {exercise.targetMuscles.map((muscle) => (
                              <Badge key={muscle} variant="outline" className="text-[10px] text-white/90 border-white/30">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full gap-2 text-xs font-bold" variant="secondary" size="sm">
                                <PlayCircle className="h-4 w-4" />
                                View Demo
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Info className="h-5 w-5 text-primary" />
                                  {exercise.name} Instructions
                                </DialogTitle>
                                <DialogDescription className="pt-2">
                                  Follow these steps for perfect form and maximum efficiency.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="relative aspect-video rounded-lg overflow-hidden border bg-black">
                                   <video 
                                      controls 
                                      className="w-full h-full object-cover"
                                      poster={image?.imageUrl}
                                      autoPlay
                                      muted
                                      loop
                                    >
                                      <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-dumbbells-at-the-gym-2342-large.mp4" type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-muted-foreground">Description</h4>
                                    <p className="text-sm leading-relaxed text-foreground/90">
                                      {exercise.description}
                                    </p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div>
                                      <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-muted-foreground">Level</h4>
                                      <Badge>{exercise.difficulty}</Badge>
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-muted-foreground">Target</h4>
                                      <div className="flex flex-wrap gap-1">
                                         {exercise.targetMuscles.map(m => <Badge key={m} variant="outline" className="text-[10px]">{m}</Badge>)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
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
