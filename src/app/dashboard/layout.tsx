'use client';

import { LogoIcon } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';

function DashboardHeader() {
  return (
    <header
      className={`sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/50 bg-background/80 px-4 backdrop-blur-sm sm:justify-end`}
    >
      <SidebarTrigger className="sm:hidden" />
      <UserNav />
    </header>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen md:flex">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <LogoIcon className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-semibold">FitZen</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <MainNav />
          </SidebarContent>
          <SidebarFooter>{/* Can add footer items here */}</SidebarFooter>
        </Sidebar>
        <div className="flex-1 md:ml-[var(--sidebar-width)] transition-[margin-left] duration-300 ease-in-out group-data-[state=collapsed]/sidebar-wrapper:md:ml-[5rem]">
          <DashboardHeader />
          <main className="flex-1 px-6 pb-6 md:px-10 md:pb-10 pt-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
