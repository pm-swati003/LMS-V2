import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Menu, X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NewsTicker } from "@/components/ui/news-ticker";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
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
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {link.name}
                </a>
              </Link>
            ))}
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
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a 
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
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
      <footer className="border-t border-border/40 bg-muted/30 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                  V
                </div>
                <span>VTU online</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering the next generation of leaders through accessible, world-class online education.
              </p>
              <div className="flex gap-4 text-muted-foreground">
                <Facebook className="size-5 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="size-5 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="size-5 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="size-5 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Academics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary hover:underline">Undergraduate</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Graduate</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Online Degrees</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Certificates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Admissions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary hover:underline">How to Apply</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Tuition & Fees</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Financial Aid</a></li>
                <li><a href="#" className="hover:text-primary hover:underline">Deadlines</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 University Ave</li>
                <li>Cambridge, MA 02138</li>
                <li>+1 (555) 123-4567</li>
                <li>info@vtuonline.edu</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 VTU online. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
              <a href="#" className="hover:text-foreground">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
