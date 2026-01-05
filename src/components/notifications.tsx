'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Bell, Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const notifications = [
  {
    title: 'New workout unlocked!',
    description: "You've unlocked the \"Advanced Abs\" workout.",
    time: '15m ago',
  },
  {
    title: 'Workout Reminder',
    description: 'Time for your scheduled leg day workout.',
    time: '1h ago',
  },
  {
    title: 'Progress Milestone!',
    description: 'You hit a new personal best on your squat!',
    time: '3h ago',
  },
];

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" className="relative rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
            </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 bg-card">
          <CardHeader className='pb-4'>
            <CardTitle className='text-lg'>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col gap-3 px-6 pb-6">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                        <Bell className="h-4 w-4 text-primary" />
                    </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="p-4">
                <Button variant="outline" className="w-full">
                    <Check className="mr-2 h-4 w-4" />
                    Mark all as read
                </Button>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
