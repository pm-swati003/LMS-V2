import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NewsTicker } from "@/components/ui/news-ticker";
import { Footer } from "@/components/layout/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

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

  const handleSectionToggle = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

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
              <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0 flex flex-col">
              {/* Fixed Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-heading font-bold text-lg text-primary">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" data-testid="mobile-menu-close">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>

              {/* Scrollable Menu Content */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100vh-140px)]">
                <nav className="flex flex-col p-4 gap-1" data-testid="mobile-nav">
                  {navLinks.map((link) => {
                    const hasChildren = link.children || link.groups;
                    const isExpanded = openSection === link.name;

                    if (hasChildren) {
                      return (
                        <Collapsible
                          key={link.name}
                          open={isExpanded}
                          onOpenChange={() => handleSectionToggle(link.name)}
                        >
                          <CollapsibleTrigger 
                            className="flex items-center justify-between w-full py-3 px-3 rounded-lg text-left font-semibold text-foreground hover:bg-muted transition-colors"
                            data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                          >
                            <span>{link.name}</span>
                            <ChevronDown 
                              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`} 
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-2 data-[state=open]:slide-down-2 duration-200">
                            <div className="ml-3 pl-3 border-l-2 border-border mt-1 mb-2">
                              {link.children && link.children.map((child) => (
                                <Link key={child.name} href={child.href}>
                                  <a 
                                    className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                                      location === child.href 
                                        ? "text-primary bg-primary/5 font-medium" 
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                                    onClick={handleNavClick}
                                    data-testid={`mobile-nav-item-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {child.name}
                                  </a>
                                </Link>
                              ))}
                              {link.groups && link.groups.map((group) => (
                                <div key={group.label} className="mt-2">
                                  <span className="block px-3 py-1 text-xs uppercase font-semibold text-muted-foreground tracking-wide">
                                    {group.label}
                                  </span>
                                  {group.items.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a 
                                        className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                                          location === item.href 
                                            ? "text-primary bg-primary/5 font-medium" 
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                        onClick={handleNavClick}
                                        data-testid={`mobile-nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                      >
                                        {item.name}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    }

                    return (
                      <Link key={link.name} href={link.href}>
                        <a 
                          className={`block py-3 px-3 rounded-lg font-semibold transition-colors ${
                            location === link.href 
                              ? "text-primary bg-primary/5" 
                              : "text-foreground hover:bg-muted"
                          }`}
                          onClick={handleNavClick}
                          data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                        >
                          {link.name}
                        </a>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Fixed Footer with Login Button */}
              <div className="p-4 border-t border-border mt-auto">
                <Link href="/auth/login">
                  <Button className="w-full" onClick={handleNavClick} data-testid="mobile-login-button">
                    Student Login
                  </Button>
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
