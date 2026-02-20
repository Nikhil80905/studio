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
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { PlayCircle, Dumbbell, Target, Info, X } from 'lucide-react';

const categories = [
  'All',
  ...Array.from(new Set(exercises.map((e) => e.category))),
];

type Exercise = typeof exercises[0];

const videoMap: Record<string, string> = {
  'Chest': 'https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-dumbbells-at-the-gym-2342-large.mp4',
  'Back': 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-pull-ups-in-a-gym-2343-large.mp4',
  'Legs': 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-squats-with-a-barbell-2345-large.mp4',
  'Shoulders': 'https://assets.mixkit.co/videos/preview/mixkit-athletic-man-lifting-dumbbells-in-the-gym-2346-large.mp4',
  'Arms': 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-biceps-curls-with-dumbbells-2344-large.mp4',
  'Abs': 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-crunches-on-the-floor-2347-large.mp4',
  'Cardio': 'https://assets.mixkit.co/videos/preview/mixkit-man-running-on-the-street-4457-large.mp4',
  'Yoga': 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-on-a-mat-at-home-42407-large.mp4',
  'default': 'https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-dumbbells-at-the-gym-2342-large.mp4'
};

export default function ExercisesPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getVideoSrc = (category: string) => {
    return videoMap[category] || videoMap['default'];
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
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
                          <Button 
                            onClick={() => setSelectedExercise(exercise)}
                            className="w-full gap-2 font-black shadow-lg shadow-primary/20 transition-all active:scale-95" 
                            variant="default" 
                            size="sm"
                          >
                            <PlayCircle className="h-4 w-4" />
                            WATCH DEMO
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedExercise} onOpenChange={(open) => { if (!open) setSelectedExercise(null); }}>
        <DialogPortal>
          <DialogOverlay className="bg-black/90 backdrop-blur-sm z-[100]" />
          <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden border-none bg-background z-[101] focus:outline-none">
            {selectedExercise && (
              <div className="flex flex-col">
                <DialogHeader className="sr-only">
                  <DialogTitle>{selectedExercise.name} Demo</DialogTitle>
                  <DialogDescription>Watch how to perform {selectedExercise.name}.</DialogDescription>
                </DialogHeader>

                <div className="relative aspect-video w-full bg-black group">
                  <video 
                    key={selectedExercise.name}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={PlaceHolderImages.find(img => img.id === selectedExercise.imageId)?.imageUrl}
                  >
                    <source src={getVideoSrc(selectedExercise.category)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                     <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3 drop-shadow-md">
                            <Dumbbell className="h-6 w-6 text-primary" />
                            {selectedExercise.name}
                        </h2>
                        <Badge className="bg-primary/20 backdrop-blur-md border-primary/40 text-primary-foreground uppercase font-black tracking-widest text-xs px-3 py-1">
                            HD DEMO
                        </Badge>
                     </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-8">
                  <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border/50">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Difficulty</span>
                        <Badge className="px-4 py-1 font-bold bg-primary/10 text-primary border-primary/20">{selectedExercise.difficulty}</Badge>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Category</span>
                        <span className="text-foreground font-black text-lg">{selectedExercise.category}</span>
                     </div>
                     <div className="flex-1"></div>
                     <div className="hidden sm:flex flex-col items-end gap-1">
                        <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Target Muscles</span>
                        <div className="flex gap-2">
                           {selectedExercise.targetMuscles.map(m => (
                             <Badge key={m} variant="secondary" className="px-3 py-0.5 font-bold text-[10px] uppercase bg-accent">{m}</Badge>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3 space-y-4">
                      <h4 className="font-black text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                         <Info className="h-4 w-4" />
                         Execution Instructions
                      </h4>
                      <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                        {selectedExercise.description}
                      </p>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                           <Target className="h-4 w-4" />
                           Primary Targets
                        </h4>
                        <div className="flex flex-wrap gap-2">
                             {selectedExercise.targetMuscles.map(m => (
                               <Badge key={m} variant="secondary" className="px-3 py-1.5 font-bold bg-accent hover:bg-accent/80 transition-colors">
                                  {m}
                               </Badge>
                             ))}
                        </div>
                      </div>
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-border shadow-inner bg-muted">
                        {PlaceHolderImages.find(img => img.id === selectedExercise.imageId) && (
                          <Image
                            src={PlaceHolderImages.find(img => img.id === selectedExercise.imageId)!.imageUrl}
                            alt={selectedExercise.name}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-2 left-2 right-2 p-2 bg-background/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-center">
                          REFERENCE IMAGE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}