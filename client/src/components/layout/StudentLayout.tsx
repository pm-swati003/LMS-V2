import { useLocation, Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CirclePower } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";


export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

const handleLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  setLocation("/");
};


  const isSettingsPage = location === "/student/settings";

  const navigation = [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "Browse Courses", href: "/student/courses", icon: BookOpen },
    { name: "My Courses", href: "/student/my-courses", icon: Library },
    { name: "Certificates", href: "/student/certificates", icon: GraduationCap },
  ];

  return (
    <>
      {/* GLOBAL NAVBAR */}
      <StudentNav />

      {/* OFFSET BELOW FIXED NAVBAR */}
      <div className="pt-16">
        <SidebarProvider>
          <div className="flex min-h-[calc(100vh-4rem)] w-full bg-neutral-50">

            {!isSettingsPage && (
              <Sidebar
                collapsible="icon"
                className="border-r border-border/40 top-16 h-[calc(100vh-4rem)] shadow-[2px_0_8px_rgba(0,0,0,0.04)]"
              >
                <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/40 px-6">
                <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary w-full overflow-hidden">
                  <span className="truncate group-data-[collapsible=icon]:hidden">
                    Student Dashboard
                  </span>
                  </div>
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
                          <SidebarMenuButton tooltip="Logout" onClick={handleLogout}>
              <CirclePower className="size-5 text-destructive cursor-pointer"/>
              <span className="cursor-pointer text-destructive">Logout</span>
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

            <SidebarInset className="bg-muted/40">
               {/* STUDENT TOP BAR (ONLY SEARCH + SIDEBAR TOGGLE) */}
  <div className="flex h-16 items-center gap-4 border-b border-border/30 bg-neutral-50/60 px-6">
    {!isSettingsPage && <SidebarTrigger />}

    <div className="flex-1">
      <div className="relative max-w-md hidden md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search courses..."
          className="w-full rounded-full bg-muted pl-9 md:w-[300px] lg:w-[400px] border-none focus-visible:ring-1"
        />
      </div>
    </div>
  </div>
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
