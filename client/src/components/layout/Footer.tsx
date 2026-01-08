import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Help", href: "/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Cancellation & Refund Policy", href: "/legal/refund-policy" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                  V
                </div>
                <span>VTU online</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation of leaders through accessible, world-class online education.
            </p>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="hover:text-primary hover:underline transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/40" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VTU online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
