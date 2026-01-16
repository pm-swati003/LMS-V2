import { useLocation, Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, CirclePower } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookOpen,
  Library,
  GraduationCap,
  Settings,
} from "lucide-react";
import { StudentNav } from "@/components/layout/StudentNav";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const isDashboardPage = location === "/student/dashboard";
  const isSettingsPage = location === "/student/settings";

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setLocation("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "Browse Courses", href: "/student/courses", icon: BookOpen },
    { name: "My Courses", href: "/student/my-courses", icon: Library },
    { name: "Certificates", href: "/student/certificates", icon: GraduationCap },
  ];

  return (
    <>
      <StudentNav />

      <div className="pt-16">
        <SidebarProvider>
          <div className="flex min-h-[calc(100vh-4rem)] w-full bg-neutral-50">
            {/* SIDEBAR */}
            {!isSettingsPage && (
              <Sidebar
                collapsible="icon"
                className="border-r border-border/40 top-16 h-[calc(100vh-4rem)] shadow-[2px_0_8px_rgba(0,0,0,0.04)]"
              >
                <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/40 px-6">
                  <span className="font-heading font-bold text-xl text-primary truncate group-data-[collapsible=icon]:hidden">
                    Student Dashboard
                  </span>
                </SidebarHeader>

                <SidebarContent className="px-2 py-4">
                  <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {navigation.map((item) => (
                          <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton
                              asChild
                              isActive={location === item.href}
                              tooltip={item.name}
                            >
                              <Link href={item.href}>
                                <item.icon className="size-5" />
                                <span>{item.name}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>

                  <SidebarGroup className="mt-auto">
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                            <CirclePower className="size-5 text-destructive" />
                            <span className="text-destructive">Logout</span>
                          </SidebarMenuButton>

                          <SidebarMenuButton asChild tooltip="Settings">
                            <Link href="/student/settings">
                              <Settings className="size-5" />
                              <span>Profile Settings</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>

                <SidebarRail />
              </Sidebar>
            )}

            {/* MAIN */}
            <SidebarInset className="bg-muted/40">
              {/* DASHBOARD TOP BAR */}
              {isDashboardPage && (
                <div className="flex h-16 items-center gap-4 border-b border-border/30 bg-neutral-50/60 px-6">
                  {!isSettingsPage && <SidebarTrigger />}

                  <div className="relative max-w-md hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search courses..."
                      className="w-full rounded-full bg-muted pl-9 md:w-[300px] lg:w-[400px] border-none"
                    />
                  </div>
                </div>
              )}

              {/* PAGE CONTENT */}
              <main className="flex-1 p-6 md:p-8 animate-in fade-in duration-500">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}
