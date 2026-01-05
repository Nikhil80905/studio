import type { SVGProps } from 'react';

export function DumbbellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 1.343a2 2 0 1 1 2.828 2.828l-1.414 1.414-2.829-2.829 1.415-1.414Z" />
      <path d="m21.5 5.5-2.828-2.828" />
      <path d="M7.8 16.2 5 19l-2.2-2.2" />
      <path d="m16.2 7.8 2.8-2.8" />
      <path d="M3.986 8.762A2 2 0 1 0 1.157 5.934l1.415-1.414 2.828 2.828-1.414 1.414Z" />
      <path d="M5 5 2.2 2.2" />
      <path d="m19 5-2.8 2.8" />
    </svg>
  );
}
