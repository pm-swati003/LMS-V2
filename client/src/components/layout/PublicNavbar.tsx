import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
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
    ],
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
        ],
      },
    ],
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
    ],
  },
];

export default function PublicNavbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleNavClick = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>
                          <a className={location === child.href ? "text-primary" : ""}>
                            {child.name}
                          </a>
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
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {link.groups.map((group) => (
                      <div key={group.label}>
                        <DropdownMenuLabel className="text-xs uppercase font-semibold text-muted-foreground">
                          {group.label}
                        </DropdownMenuLabel>
                        {group.items.map((item) => (
                          <DropdownMenuItem key={item.name} asChild>
                            <Link href={item.href}>
                              <a className={location === item.href ? "text-primary" : ""}>
                                {item.name}
                              </a>
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
                <a className={`text-sm font-medium hover:text-primary ${
                  location === link.href ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {link.name}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link href="/auth/login">
            <Button>Student Login</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

         <SheetContent
  side="right"
  className="w-3/4 max-w-sm p-0"
>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-heading font-bold text-lg text-primary">Menu</span>
              {/* <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose> */}
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="block py-3 px-3 rounded-lg font-semibold hover:bg-muted"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="p-4 border-t">
              <Link href="/auth/login">
                <Button className="w-full" onClick={handleNavClick}>
                  Student Login
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
