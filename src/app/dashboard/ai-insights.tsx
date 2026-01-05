'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const insights = [
    {
        icon: <TrendingUp className="h-5 w-5 text-green-500" />,
        text: "Your bench press has improved by 5kg this month. Keep it up!",
        type: "positive"
    },
    {
        icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
        text: "You've skipped leg day twice in a row. Let's focus on legs in the next session.",
        type: "warning"
    },
    {
        icon: <Lightbulb className="h-5 w-5 text-blue-500" />,
        text: "Consider increasing your protein intake by 10% to boost muscle recovery.",
        type: "tip"
    }
];

export function AiInsights() {
    const image = PlaceHolderImages.find((img) => img.id === 'ai-insights-bg');

    return (
        <Card 
          className="card-hover animate-fade-in-up relative overflow-hidden text-white" 
          style={{ animationDelay: `300ms` }}
        >
            {image && (
                <Image
                    src={image.imageUrl}
                    alt="AI Insights"
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <span>AI Insights</span>
                    </CardTitle>
                    <CardDescription className="text-white/80">Personalized tips to boost your progress.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {insights.map((insight, index) => (
                        <div 
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                            style={{ animation: `fade-in-up 0.5s ${index * 0.1 + 0.5}s ease-out forwards`, opacity: 0 }}
                        >
                            <div className="flex-shrink-0">{insight.icon}</div>
                            <p className="text-sm text-white/90">{insight.text}</p>
                        </div>
                    ))}
                </CardContent>
            </div>
        </Card>
    );
}
