'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Footprints, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      }, 700); // This should match the animation duration
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground card-hover animate-fade-in-up">
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">
            {greeting && (
              <span className="inline-block animate-fade-in">{greeting}, Nikhil 👋</span>
            )}
          </h1>
          <div className="mt-2 h-6 overflow-hidden">
             <p className={cn(
                "text-primary-foreground/80",
                animationState === 'in' && 'animate-quote-in',
                animationState === 'out' && 'animate-quote-out'
              )}
              onAnimationEnd={() => {
                if(animationState === 'out') {
                  // Element is hidden, ready for next quote
                }
              }}
            >
              "{quotes[quoteIndex]}"
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm w-full md:w-auto">
          <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
            <Footprints className="h-5 w-5" />
            <span className="font-bold">1,250</span>
            <span className="text-xs text-primary-foreground/70">kcal left</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
            <Droplets className="h-5 w-5" />
            <span className="font-bold">5/8</span>
            <span className="text-xs text-primary-foreground/70">glasses</span>
          </div>
           <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
            <Zap className="h-5 w-5" />
            <span className="font-bold">Leg Day</span>
            <span className="text-xs text-primary-foreground/70">Next Up</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
