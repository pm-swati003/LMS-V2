import PublicNavbar from "@/components/layout/PublicNavbar.tsx";
import { NewsTicker } from "@/components/ui/news-ticker";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const announcements = [
    "Admissions for Fall 2026 are now open!",
    "New Master's in Data Science launching soon.",
    "Virtual Open House scheduled for November 15th.",
    "Student research showcase winners announced.",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PublicNavbar />

      {/* Announcement Ticker */}
      <div style={{ boxShadow: "inset 0 4px 12px hsl(var(--primary) / 0.12)" }}>
        <NewsTicker items={announcements} />
      </div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
