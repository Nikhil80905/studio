import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dietPlans } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ForkKnife, Sparkles, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LatestBlogPosts } from '../latest-blog-posts';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'nourish-hero');
  
  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Hero Section */}
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-blue-500/5 via-primary/5 to-secondary/5 dark:from-blue-900/20 dark:via-primary/20 dark:to-secondary/20">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
        
        {/* Pattern Overlay */}
        <div className="hidden md:block absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8 md:p-16 text-center md:text-left z-10">
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in'>
                <Sparkles className="h-4 w-4" />
                <span className="font-bold text-xs uppercase tracking-widest">Nourish Your Body</span>
              </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              Fuel Your <span className="text-primary">Fitness</span> Journey.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-lg">
              Expert-backed nutrition strategies and healthy weight loss plans designed to help you thrive, not just survive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">Get Started</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">Learn More</Button>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] hidden md:block">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="Healthy Salad"
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background"></div>
          </div>
        </div>
      </Card>

      {/* Feature Highlights */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center text-center p-6 space-y-3 rounded-2xl bg-card border border-border/50 card-hover">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Personalized Goals</h3>
          <p className="text-sm text-muted-foreground">Tailored nutrition plans that adapt to your unique fitness level and aspirations.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 space-y-3 rounded-2xl bg-card border border-border/50 card-hover">
          <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Fast Progress</h3>
          <p className="text-sm text-muted-foreground">Scientifically-proven strategies to optimize your recovery and boost your metabolism.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 space-y-3 rounded-2xl bg-card border border-border/50 card-hover">
          <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-2">
            <ForkKnife className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg">Healthy Choices</h3>
          <p className="text-sm text-muted-foreground">Learn how to make sustainable food choices that fit your lifestyle and taste.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center pt-4">
        <Button variant="link" className="text-muted-foreground hover:text-primary font-semibold">Feeling Hangry? Here's What To Do</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary font-semibold">Healthy Weight Strategies</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary font-semibold">Nutrition 101</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary font-semibold">Meal Prep Tips</Button>
      </div>

      <div className="space-y-12">
        <section>
          <div className="mb-8 flex items-baseline justify-between">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight">Popular Diet Plans</h2>
                  <p className="text-muted-foreground mt-1">Explore science-based approaches to nutrition.</p>
              </div>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="#">View All Plans</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {dietPlans.map((plan) => {
              const image = PlaceHolderImages.find((img) => img.id === plan.imageId);
              return (
                  <Card key={plan.title} className="card-hover grid md:grid-cols-2 overflow-hidden border-border/40">
                      <div className="relative aspect-[4/3] md:aspect-auto w-full h-full min-h-[200px]">
                          {image && (
                              <Image 
                                  src={image.imageUrl}
                                  alt={plan.title}
                                  fill
                                  className="object-cover"
                                  data-ai-hint={plan.imageId.split('-').slice(0, 2).join(' ')}
                              />
                          )}
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-xl font-bold leading-tight">{plan.title}</h3>
                          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                          <Button variant="link" className="p-0 h-auto mt-6 self-start text-primary font-bold">
                            EXPLORE PLAN
                          </Button>
                      </div>
                  </Card>
              )
            })}
          </div>
        </section>

        <LatestBlogPosts />
      </div>
    </div>
  );
}
