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
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

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
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <Link href={link.href} className="flex-1">
            <SidebarMenuButton
              isActive={pathname === link.href}
              className="w-full justify-start relative"
              tooltip={link.label}
              variant={'ghost'}
            >
              {pathname === link.href && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-secondary rounded-r-full"></span>
              )}
              <link.icon className="h-5 w-5" />
              <span className={cn(pathname === link.href && 'text-secondary-foreground')}>{link.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
