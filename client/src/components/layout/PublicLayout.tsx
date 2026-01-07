import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NewsTicker } from "@/components/ui/news-ticker";
import { Footer } from "@/components/layout/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  interface NavItem {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
  }

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "Programs", 
      href: "#",
      children: [
        { name: "Undergraduate", href: "/programs/undergraduate" },
        { name: "Postgraduate", href: "/programs/postgraduate" },
        { name: "Diploma Programs", href: "/programs/diploma" },
        { name: "Certificates", href: "/programs/certificates" },
      ]
    },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const announcements = [
    "Admissions for Fall 2026 are now open!",
    "New Master's in Data Science launching soon.",
    "Virtual Open House scheduled for November 15th.",
    "Student research showcase winners announced.",
    "Campus library renovation completed."
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                V
              </div>
              <span>VTU online</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none data-[state=open]:text-primary">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href}>
                            <a className="w-full cursor-pointer">{child.name}</a>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link key={link.name} href={link.href}>
                  <a className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <Link href="/auth/login">
               <Button>Student Login</Button>
             </Link>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.name} className="flex flex-col gap-2">
                        <span className="text-lg font-medium text-foreground">{link.name}</span>
                        <div className="flex flex-col gap-2 pl-4 border-l border-border">
                          {link.children.map((child) => (
                            <Link key={child.name} href={child.href}>
                              <a 
                                className="text-base text-muted-foreground hover:text-primary transition-colors py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link key={link.name} href={link.href}>
                      <a 
                        className="text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </Link>
                  );
                })}
                <div className="h-px bg-border my-2" />
                <Link href="/auth/login">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>Student Login</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Announcement Ticker */}
      <NewsTicker items={announcements} />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
