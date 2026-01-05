'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Footprints, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "Success isn't greatness. It's consistency. Consistent hard work gains success.",
  "Train insane or remain the same.",
  "The pain you feel today will be the strength you feel tomorrow."
];

export function GreetingCard() {
  const [greeting, setGreeting] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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
      setIsFading(true);
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsFading(false);
      }, 500); // Half a second for fade out
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
          <p className={cn(
              "mt-2 text-primary-foreground/80 transition-opacity duration-500",
              isFading ? 'opacity-0' : 'opacity-100'
            )}>
            "{quotes[quoteIndex]}"
          </p>
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
