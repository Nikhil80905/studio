'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function LatestBlogPosts() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Latest Diet and Nutrition Blog Posts</h2>
        <Button variant="link" asChild>
          <Link href="#">View All</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, index) => {
          const image = PlaceHolderImages.find((img) => img.id === post.imageId);
          return (
            <Card
              key={index}
              className="card-hover flex items-center gap-6 p-6"
              style={{ animation: `fade-in-up 0.5s ${index * 0.1 + 0.7}s ease-out forwards`, opacity: 0 }}
            >
              {image && (
                <div className="relative h-28 w-28 flex-shrink-0">
                  <Image
                    src={image.imageUrl}
                    alt={post.author}
                    fill
                    className="rounded-full object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                  <hr className="my-2 border-border" />
                  <h3 className="font-semibold text-card-foreground">{post.title}</h3>
                </div>
                <Button variant="ghost" size="sm" className="justify-self-end self-start p-0 h-auto mt-2 text-primary hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
