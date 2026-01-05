'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

interface CircleProgressProps extends React.SVGProps<SVGSVGElement> {
  value?: number;
}

export const CircleProgress = React.forwardRef<SVGSVGElement, CircleProgressProps>(
  ({ value = 0, className, ...props }, ref) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    const getStrokeColor = (val: number) => {
      if (val < 40) return 'hsl(var(--destructive))';
      if (val < 70) return 'hsl(var(--secondary))';
      return 'hsl(var(--primary))';
    };

    const color = getStrokeColor(value);

    return (
      <svg
        ref={ref}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className={cn('animate-fade-in', className)}
        {...props}
      >
        <circle
          className="text-muted/50"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          stroke={color}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{ transition: 'stroke-dashoffset 0.5s ease-out, stroke 0.5s ease-out' }}
        />
      </svg>
    );
  }
);

CircleProgress.displayName = 'CircleProgress';
