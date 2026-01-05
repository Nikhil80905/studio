'use client';

import { useState, useEffect } from 'react';
import { LogoIcon } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
       <div className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold hidden md:block">FitZen</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search workouts, exercises..."
              className="pl-9"
            />
          </div>
          <UserNav />
        </div>
    </header>
  );
}

function NavigationBar() {
    return (
        <div className="sticky top-16 z-30 flex h-14 items-center justify-center border-b bg-background/80 backdrop-blur-sm">
            <MainNav />
        </div>
    )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }
  
  return (
      <div className="relative min-h-screen flex flex-col">
        <DashboardHeader />
        <NavigationBar />
        <main className="flex-1 p-6 md:p-10">
            {children}
        </main>
      </div>
  );
}
