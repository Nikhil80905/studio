'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Footprints, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const quotes = [
  "Strive for progress, not perfection.",
  "The body achieves what the mind believes.",
  "Sweat is just fat crying.",
  "Train insane or remain the same.",
  "Be stronger than your excuses."
];

export function GreetingCard() {
  const [greeting, setGreeting] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animationState, setAnimationState] = useState('in');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    const quoteInterval = setInterval(() => {
      setAnimationState('out');
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setAnimationState('in');
      }, 700);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <Card className="relative text-white card-hover animate-fade-in-up overflow-hidden border-none rounded-2xl min-h-[220px] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop"
          alt="Gym Motivation"
          fill
          className="object-cover"
          data-ai-hint="bench press"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>
      
      <CardContent className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-black tracking-tight drop-shadow-lg">
            {greeting && (
              <span className="inline-block animate-fade-in">{greeting}, Nikhil 👋</span>
            )}
          </h1>
          <div className="h-8 overflow-hidden">
             <p className={cn(
                "text-white/90 text-lg font-medium italic drop-shadow-md",
                animationState === 'in' && 'animate-quote-in',
                animationState === 'out' && 'animate-quote-out'
              )}
            >
              "{quotes[quoteIndex]}"
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
          <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors cursor-default">
            <Footprints className="h-6 w-6 text-primary" />
            <span className="text-xl font-black">1,250</span>
            <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">kcal left</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors cursor-default">
            <Droplets className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-black">5/8</span>
            <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">glasses</span>
          </div>
           <div className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors cursor-default">
            <Zap className="h-6 w-6 text-yellow-400" />
            <span className="text-xl font-black">Leg Day</span>
            <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Next Up</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
