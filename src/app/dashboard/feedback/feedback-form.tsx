'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function FeedbackForm() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Feedback Sent!",
                description: "Thank you for helping us improve.",
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    }

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
                Have a suggestion or found a bug? Let us know!
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="e.g., Feature Request: Add new chart type" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Describe your feedback in detail..." required rows={6}/>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Feedback
                </Button>
            </form>
        </CardContent>
    </Card>
  );
}
