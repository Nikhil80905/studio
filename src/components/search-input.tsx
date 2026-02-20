'use client';

import { Search, Dumbbell, Layout, ArrowRight, X } from 'lucide-react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { exercises } from '@/lib/data';

const navLinks = [
  { href: '/dashboard/home', label: 'Home', icon: Layout },
  { href: '/dashboard/overview', label: 'Dashboard', icon: Layout },
  { href: '/dashboard/workouts', label: 'Workouts', icon: Layout },
  { href: '/dashboard/exercises', label: 'Exercises', icon: Layout },
  { href: '/dashboard/nutrition', label: 'Nutrition', icon: Layout },
  { href: '/dashboard/progress', label: 'Progress', icon: Layout },
  { href: '/dashboard/calculators', label: 'Calculators', icon: Layout },
];

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const showInput = isFocused || isHovered || query.length > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsFocused(false);
        setQuery('');
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return { sections: [], exercises: [] };

    const lowerQuery = query.toLowerCase();

    const filteredSections = navLinks.filter((link) =>
      link.label.toLowerCase().includes(lowerQuery)
    );

    const filteredExercises = exercises.filter(
      (ex) =>
        ex.name.toLowerCase().includes(lowerQuery) ||
        ex.targetMuscles.some((m) => m.toLowerCase().includes(lowerQuery)) ||
        ex.category.toLowerCase().includes(lowerQuery)
    );

    return {
      sections: filteredSections,
      exercises: filteredExercises.slice(0, 5),
    };
  }, [query]);

  const handleSelect = (href: string) => {
    router.push(href);
    setQuery('');
    setIsFocused(false);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Search
        className={cn(
          'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-all duration-500 ease-in-out z-20',
          showInput && 'text-primary scale-110'
        )}
      />
      <Input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search workouts, sections..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          // Small delay to allow clicking results before the dropdown closes
          setTimeout(() => setIsFocused(false), 200);
        }}
        className={cn(
          'h-10 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] pl-10 pr-12 focus:cursor-text focus:bg-background/80 backdrop-blur-md border-transparent hover:border-primary/20',
          showInput
            ? 'w-72 bg-background/60 border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.15)]'
            : 'w-10 bg-transparent'
        )}
      />
      
      <div 
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 flex items-center gap-1",
          showInput ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {query.length > 0 ? (
          <button 
            onClick={handleClear}
            className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isFocused && query.length > 0 && (
        <div 
          className="absolute top-full left-0 right-0 mt-3 bg-background/95 backdrop-blur-2xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in-up"
          onMouseDown={(e) => e.preventDefault()} // Prevents blur when clicking the dropdown
        >
          <div className="p-3 space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
            {results.sections.length > 0 && (
              <div className="px-3 py-2 text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
                Sections
              </div>
            )}
            {results.sections.map((section) => (
              <button
                key={section.href}
                onClick={() => handleSelect(section.href)}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-all text-sm group"
              >
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Layout className="h-4 w-4" />
                </div>
                <span className="flex-1 text-left font-semibold">{section.label}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary" />
              </button>
            ))}

            {results.exercises.length > 0 && (
              <div className="px-3 py-2 text-[10px] font-bold uppercase text-muted-foreground tracking-wider mt-3 border-t border-border/50 pt-4">
                Exercises & Workouts
              </div>
            )}
            {results.exercises.map((ex) => (
              <button
                key={ex.name}
                onClick={() => handleSelect('/dashboard/exercises')}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/10 transition-all text-sm group"
              >
                <div className="h-9 w-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Dumbbell className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{ex.name}</p>
                  <p className="text-[10px] text-muted-foreground font-medium">{ex.targetMuscles.join(', ')}</p>
                </div>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-secondary" />
              </button>
            ))}

            {results.sections.length === 0 && results.exercises.length === 0 && (
              <div className="p-10 text-center text-muted-foreground">
                <p className="text-sm font-medium">No results found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for "Chest", "Home", or "Nutrition"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
