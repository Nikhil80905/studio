'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Calculator,
  Dumbbell,
  HeartPulse,
  LayoutDashboard,
  Settings,
  BookOpen,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/workouts', label: 'Workouts', icon: Dumbbell },
  { href: '/dashboard/exercises', label: 'Exercises', icon: BookOpen },
  { href: '/dashboard/nutrition', label: 'Nutrition', icon: HeartPulse },
  { href: '/dashboard/progress', label: 'Progress', icon: BarChart3 },
  { href: '/dashboard/calculators', label: 'Calculators', icon: Calculator },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <nav className="flex items-center space-x-2 lg:space-x-4 overflow-x-auto pb-2 sm:pb-0">
      {links.map((link) => (
        <Button
            key={link.href}
            asChild
            variant="ghost"
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
        >
          <Link href={link.href}>
            {link.label}
            {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full"></span>
            )}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
