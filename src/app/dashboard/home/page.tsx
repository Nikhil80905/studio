import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dietPlans } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ForkKnife } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LatestBlogPosts } from '../latest-blog-posts';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'nourish-hero');
  return (
    <div className="animate-fade-in-up space-y-8">
      <Card className="relative overflow-hidden border-none bg-gradient-to-r from-blue-50/5 via-amber-50/5 to-pink-50/5 dark:from-blue-900/10 dark:via-amber-900/10 dark:to-pink-900/10">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-secondary/5 blur-2xl"></div>
        
        <div className="hidden md:block absolute top-0 left-1/4 w-full h-full bg-no-repeat opacity-10 dark:opacity-[0.03] bg-grid-pattern"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8 md:p-12 text-center md:text-left">
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 mb-4'>
                <ForkKnife className="h-4 w-4" />
                <span className="font-semibold text-sm">NOURISH</span>
              </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Tools, resources, and support for your healthy diet.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Get the real facts about fad diets, and learn some healthy weight
              loss strategies.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] hidden md:block">
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
             <div className="absolute inset-0 bg-gradient-to-l from-background/0 via-background/20 to-background/100"></div>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
        <Button variant="link" className="text-muted-foreground hover:text-primary">Feeling Hangry? Here's What To Do</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary">Healthy Weight</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary">Healthy Eating & Nutrition</Button>
        <Button variant="link" className="text-muted-foreground hover:text-primary">Healthy Food Choices</Button>
      </div>

      <div className="space-y-8">
        <div>
          <div className="mb-4 flex items-baseline justify-between">
              <div>
                  <h2 className="text-2xl font-bold tracking-tight">Popular Diet Plans</h2>
                  <p className="text-muted-foreground">Explore diet plans recommended by our experts.</p>
              </div>
            <Button variant="link" asChild>
              <Link href="#">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {dietPlans.map((plan) => {
              const image = PlaceHolderImages.find((img) => img.id === plan.imageId);
              return (
                  <Card key={plan.title} className="card-hover grid md:grid-cols-2 overflow-hidden">
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
                      <div className="p-6 flex flex-col justify-center">
                          <h3 className="text-xl font-bold">{plan.title}</h3>
                          <p className="mt-2 text-muted-foreground text-sm">{plan.description}</p>

                          <Button variant="link" className="p-0 h-auto mt-4 self-start">Read More</Button>
                      </div>
                  </Card>
              )
            })}
          </div>
        </div>

        <LatestBlogPosts />
      </div>
    </div>
  );
}
