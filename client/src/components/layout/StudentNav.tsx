import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronDown,
  X,
  Bell,
  LogOut,
  CircleUser,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "@/components/brand/Logo";

interface NavChild {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

export function StudentNav() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    toast({
      title: "Logged out",
      description: "You have been signed out successfully",
    });

    setLocation("/");
  };
  const handleProfile = () => {

    setLocation("/student/settings");
  };

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Programs",
      href: "/programs",
      children: [
        { name: "All Programs", href: "/programs" },
        { name: "Honours", href: "/programs/honours" },
        { name: "Minors", href: "/programs/minors" },
      ],
    },
    { name: "Courses", href: "/courses" },
    { name: "Academics", href: "/academics" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full h-16 border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container max-w-[1500px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* LOGO */}
       <Link href="/">
                 <a className="flex items-center gap-3">
                   <Logo size={56} />
                   <div className="flex flex-col leading-tight">
                     <span className="text-sm md:text-base font-semibold text-foreground">
                       Center for Online Education
                     </span>
                     <span className="text-xs md:text-sm font-medium text-muted-foreground">
                       VTU – Belagavi
                     </span>
                     <span className="hidden md:block text-[11px] text-muted-foreground">
                       Govt. of Karnataka
                     </span>
                   </div>
                 </a>
               </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 font-medium">
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={
                  location === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
          </Button>

          {/* Profile Icon Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/40 hover:bg-muted"
              > */}
                <CircleUser size={28} className=" text-muted-foreground" />


              {/* </Button> */}
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
               className="cursor-pointer"
                onClick={handleProfile}>Profile</DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* MOBILE MENU */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80 p-0">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>

            <nav className="p-4 space-y-2">
              {navLinks.map((link) =>
                link.children ? (
                  <Collapsible key={link.name}>
                    <CollapsibleTrigger className="w-full py-2 font-semibold flex justify-between">
                      {link.name}
                      <ChevronDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 pl-4 text-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 font-semibold"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div className="border-t p-4">
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
