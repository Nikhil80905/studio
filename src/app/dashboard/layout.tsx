'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { Notifications } from '@/components/notifications';
import { SearchInput } from '@/components/search-input';
import { redirect, usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-neutral-700 bg-neutral-900 px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <LogoIcon className="h-8 w-8 text-primary" />
        <h1 className="hidden text-xl font-semibold text-white md:block">FitZen</h1>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <Link href="/dashboard/settings">
           <Button size="icon" className="relative rounded-full">
              <Settings className="h-5 w-5" />
           </Button>
        </Link>
        <Notifications />
        <UserNav />
      </div>
    </header>
  );
}

function NavigationBar() {
  return (
    <div className="sticky top-16 z-30 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex-1">
        <MainNav />
      </div>
      <SearchInput />
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    redirect('/dashboard/home');
  }
  
  if (!isClient) {
    return null;
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <DashboardHeader />
      <NavigationBar />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
