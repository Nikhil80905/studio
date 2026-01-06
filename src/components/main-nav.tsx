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
import { useEffect, useState, useRef } from 'react';

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
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (!isClient || !navRef.current) return;

    const activeLinkIndex = links.findIndex(link => pathname === link.href);
    const activeLink = activeLinkIndex > -1 ? linkRefs.current[activeLinkIndex] : null;

    if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setIndicatorStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
            opacity: 1
        });
    } else {
        setIndicatorStyle({ opacity: 0 });
    }
  }, [pathname, isClient]);


  if (!isClient) {
    // Render a placeholder or nothing on the server to avoid hydration issues
    return (
        <nav className="relative flex items-center justify-center space-x-2 lg:space-x-4">
            {links.map((link) => (
                <div key={link.href} className="h-10 px-4 py-2 text-sm font-medium text-muted-foreground">
                    {link.label}
                </div>
            ))}
        </nav>
    );
  }

  return (
    <nav ref={navRef} className="relative flex items-center justify-center space-x-2 lg:space-x-4">
      {links.map((link, index) => (
        <Button
            key={link.href}
            asChild
            variant="ghost"
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative z-10",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
        >
          <Link 
            href={link.href}
            ref={el => linkRefs.current[index] = el}
          >
            {link.label}
          </Link>
        </Button>
      ))}
      <div 
        className="absolute -bottom-1 h-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      ></div>
    </nav>
  );
}
