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
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  interface NavChild {
    name: string;
    href: string;
  }

  interface NavGroup {
    label: string;
    items: NavChild[];
  }

  interface NavItem {
    name: string;
    href: string;
    children?: NavChild[];
    groups?: NavGroup[];
  }

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "Programs", 
      href: "/programs",
      children: [
        { name: "All Programs", href: "/programs" },
        { name: "Honours", href: "/programs/honours" },
        { name: "Minors", href: "/programs/minors" },
        { name: "Skill Enhancement Programs", href: "/programs/skill-enhancement" },
      ]
    },
    { name: "Courses", href: "/courses" },
    { 
      name: "Exams", 
      href: "/exams",
      groups: [
        {
          label: "Exam Registration",
          items: [
            { name: "Honours", href: "/exams/honours" },
            { name: "MOOC Course", href: "/exams/mooc" },
            { name: "PG MOOC Course", href: "/exams/pg-mooc" },
            { name: "Minors", href: "/exams/minors" },
            { name: "Skill Enhancement Course", href: "/exams/skill-enhancement" },
            { name: "Skill Enhancement Programs (12 Credit)", href: "/exams/skill-enhancement-12" },
            { name: "Certificate Course", href: "/exams/certificate" },
          ]
        }
      ]
    },
    { 
      name: "Academics", 
      href: "/academics",
      children: [
        { name: "Apply for Minor Degree", href: "/academics/minor-degree" },
        { name: "Apply for Skill Enhancement", href: "/academics/skill-enhancement" },
        { name: "Apply for PG MOOCS Course", href: "/academics/pg-moocs" },
        { name: "Apply for Honour Degree", href: "/academics/honour-degree" },
        { name: "Registration for PEC and OEC", href: "/academics/pec-oec" },
        { name: "MOOC Resources", href: "/academics/mooc-resources" },
        { name: "Course Exam", href: "/academics/course-exam" },
      ]
    },
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
                            <a className={`w-full cursor-pointer ${location === child.href ? "text-primary" : ""}`}>{child.name}</a>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              if (link.groups) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none data-[state=open]:text-primary">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {link.groups.map((group) => (
                        <div key={group.label}>
                          <DropdownMenuLabel className="text-xs uppercase font-semibold text-muted-foreground tracking-wide">
                            {group.label}
                          </DropdownMenuLabel>
                          {group.items.map((item) => (
                            <DropdownMenuItem key={item.name} asChild>
                              <Link href={item.href}>
                                <a className={`w-full cursor-pointer ${location === item.href ? "text-primary" : ""}`}>{item.name}</a>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
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
                                className={`text-base hover:text-primary transition-colors py-1 ${location === child.href ? "text-primary" : "text-muted-foreground"}`}
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

                  if (link.groups) {
                    return (
                      <div key={link.name} className="flex flex-col gap-2">
                        <span className="text-lg font-medium text-foreground">{link.name}</span>
                        <div className="flex flex-col gap-1 pl-4 border-l border-border">
                          {link.groups.map((group) => (
                            <div key={group.label} className="flex flex-col gap-1">
                              <span className="text-xs uppercase font-semibold text-muted-foreground tracking-wide pt-2 pb-1">
                                {group.label}
                              </span>
                              {group.items.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <a 
                                    className={`text-base hover:text-primary transition-colors py-1 ${location === item.href ? "text-primary" : "text-muted-foreground"}`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              ))}
                            </div>
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
