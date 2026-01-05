import { DumbbellIcon } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar>
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <DumbbellIcon className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-semibold">FitZen</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <MainNav />
          </SidebarContent>
          <SidebarFooter>{/* Can add footer items here */}</SidebarFooter>
        </Sidebar>
        <div className="flex flex-col md:ml-[--sidebar-width] transition-[margin-left] duration-300 ease-in-out">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border/50 bg-background/80 px-4 backdrop-blur-sm sm:justify-end">
            <SidebarTrigger className="sm:hidden" />
            <UserNav />
          </header>
          <main className="flex-1 px-6 md:px-10 py-6 md:py-10">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
