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
import { PlayCircle, Info, Dumbbell } from 'lucide-react';

const categories = [
  'All',
  ...Array.from(new Set(exercises.map((e) => e.category))),
];

export default function ExercisesPage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-2xl bg-card p-12 min-h-[300px] flex flex-col justify-center text-center">
         <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
            alt="Exercise Library"
            fill
            className="object-cover"
            data-ai-hint="fitness workout"
            priority
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-0"></div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-foreground">
            Exercise Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master your technique with our comprehensive guide to every movement.
          </p>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center pb-8">
          <TabsList className="bg-muted/30 p-1 rounded-full h-12">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0 outline-none">
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
                      className="flex flex-col card-hover group relative overflow-hidden border-border/40"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={exercise.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              data-ai-hint={image.imageHint.split(' ').slice(0, 2).join(' ')}
                            />
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                           <div className="absolute bottom-4 left-4 z-20">
                              <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-white/10 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5">
                                {exercise.difficulty}
                              </Badge>
                           </div>
                        </div>
                      
                      <div className="flex-1 flex flex-col p-5">
                        <div className="mb-4">
                          <CardTitle className="text-xl font-bold mb-2">
                            {exercise.name}
                          </CardTitle>
                          <div className="flex flex-wrap gap-1.5">
                            {exercise.targetMuscles.map((muscle) => (
                              <Badge key={muscle} variant="outline" className="text-[10px] uppercase font-bold border-primary/20 text-primary">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full gap-2 font-bold shadow-sm" variant="default" size="sm">
                                <PlayCircle className="h-4 w-4" />
                                WATCH DEMO
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none bg-black">
                              <div className="relative aspect-video w-full group">
                                <video 
                                  className="w-full h-full object-contain"
                                  controls
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  poster={image?.imageUrl}
                                >
                                  <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-dumbbells-at-the-gym-2342-large.mp4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                                   <h2 className="text-2xl font-black text-white flex items-center gap-3">
                                      <Dumbbell className="h-6 w-6 text-primary" />
                                      {exercise.name}
                                   </h2>
                                </div>
                              </div>
                              <div className="p-8 bg-background">
                                <div className="flex items-center gap-4 mb-6">
                                   <Badge className="px-4 py-1">{exercise.difficulty}</Badge>
                                   <span className="text-muted-foreground text-sm font-medium">Category: <span className="text-foreground">{exercise.category}</span></span>
                                </div>
                                <div className="space-y-6">
                                  <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Professional Instructions</h4>
                                    <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                                      {exercise.description}
                                    </p>
                                  </div>
                                  <div className="pt-4 border-t border-border/50">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">Target Muscle Groups</h4>
                                    <div className="flex flex-wrap gap-2">
                                         {exercise.targetMuscles.map(m => <Badge key={m} variant="secondary" className="px-3 py-1 font-bold">{m}</Badge>)}
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
