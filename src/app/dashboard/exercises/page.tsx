'use client';

import { useState, useEffect } from 'react';
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
import { PlayCircle, Dumbbell, Target, Info } from 'lucide-react';

const categories = [
  'All',
  ...Array.from(new Set(exercises.map((e) => e.category))),
];

export default function ExercisesPage() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatches with Radix Dialogs
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-12 min-h-[350px] flex flex-col justify-center text-center">
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
            Master Every <span className="text-primary">Move.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore our professional library of exercises with high-definition video demonstrations and expert coaching.
          </p>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center pb-8 sticky top-[120px] z-20 bg-background/50 backdrop-blur-md py-4 rounded-full">
          <TabsList className="bg-muted/30 p-1 rounded-full h-12 border border-border/50">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold"
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
                      className="flex flex-col card-hover group relative overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={exercise.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                           <div className="absolute bottom-4 left-4 z-20">
                              <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-white/10 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5">
                                {exercise.difficulty}
                              </Badge>
                           </div>
                        </div>
                      
                      <div className="flex-1 flex flex-col p-6">
                        <div className="mb-6">
                          <CardTitle className="text-xl font-bold mb-3">
                            {exercise.name}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2">
                            {exercise.targetMuscles.map((muscle) => (
                              <Badge key={muscle} variant="outline" className="text-[10px] uppercase font-bold border-primary/20 text-primary bg-primary/5">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full gap-2 font-black shadow-lg shadow-primary/20 transition-all active:scale-95" variant="default" size="sm">
                                <PlayCircle className="h-4 w-4" />
                                WATCH DEMO
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden border-none bg-black/95 backdrop-blur-xl">
                              <DialogHeader className="sr-only">
                                <DialogTitle>{exercise.name} Demo</DialogTitle>
                                <DialogDescription>Video demonstration and instructions for {exercise.name}.</DialogDescription>
                              </DialogHeader>
                              
                              <div className="relative aspect-video w-full group">
                                <video 
                                  className="w-full h-full object-cover"
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
                                <div className="absolute top-0 left-0 w-full p-8 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none">
                                   <div className="flex items-center justify-between">
                                      <h2 className="text-3xl font-black text-white flex items-center gap-3 drop-shadow-md">
                                          <Dumbbell className="h-8 w-8 text-primary" />
                                          {exercise.name}
                                      </h2>
                                      <Badge className="bg-primary/20 backdrop-blur-md border-primary/40 text-primary-foreground uppercase font-black tracking-widest text-xs px-4 py-1">
                                          HD DEMO
                                      </Badge>
                                   </div>
                                </div>
                              </div>
                              
                              <div className="p-8 bg-background">
                                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border/50">
                                   <div className="flex flex-col gap-1">
                                      <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Difficulty</span>
                                      <Badge className="px-4 py-1 font-bold bg-primary/10 text-primary border-primary/20">{exercise.difficulty}</Badge>
                                   </div>
                                   <div className="flex flex-col gap-1">
                                      <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Category</span>
                                      <span className="text-foreground font-black text-lg">{exercise.category}</span>
                                   </div>
                                </div>

                                <div className="grid md:grid-cols-5 gap-8">
                                  <div className="md:col-span-3 space-y-4">
                                    <h4 className="font-black text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                                       <Info className="h-4 w-4" />
                                       Execution Instructions
                                    </h4>
                                    <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                                      {exercise.description}
                                    </p>
                                  </div>
                                  <div className="md:col-span-2 space-y-4">
                                    <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                       <Target className="h-4 w-4" />
                                       Primary Targets
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                         {exercise.targetMuscles.map(m => (
                                           <Badge key={m} variant="secondary" className="px-3 py-1.5 font-bold bg-accent hover:bg-accent/80 transition-colors">
                                              {m}
                                           </Badge>
                                         ))}
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
