'use client';

import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const showInput = isFocused || isHovered;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Search
        className={cn(
          'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-all duration-500 ease-in-out z-10',
          showInput && 'text-primary scale-110'
        )}
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search workouts, recipes..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'h-10 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] pl-10 pr-12 focus:cursor-text focus:bg-background/80 backdrop-blur-md border-transparent hover:border-primary/20',
          showInput
            ? 'w-72 bg-background/60 border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.1)]'
            : 'w-10 bg-transparent'
        )}
      />
      <div 
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 flex items-center gap-1",
          showInput ? "opacity-100" : "opacity-0"
        )}
      >
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
  );
}
