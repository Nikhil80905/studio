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
    if (isHovered && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isHovered]);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Search
        className={cn(
          'absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-all duration-300 z-10',
          showInput && 'text-primary'
        )}
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out pl-10 focus:cursor-text focus:w-64 focus:bg-card/80 focus:border-primary/50',
           showInput ? 'w-64 bg-card/80 border-primary/20' : 'bg-transparent border-transparent'
        )}
      />
    </div>
  );
}
