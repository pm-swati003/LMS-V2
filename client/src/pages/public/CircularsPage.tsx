import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "lucide-react";

export default function CircularsPage() {
  const examCirculars = [
    { title: "Final Semester Exam Schedule Declared", date: "Oct 24, 2025", isNew: true },
    { title: "Hall Ticket Download Instructions", date: "Oct 20, 2025", isNew: true },
    { title: "Re-evaluation Results for B.Tech", date: "Oct 15, 2025", isNew: false },
    { title: "Supplementary Exam Dates Announced", date: "Oct 10, 2025", isNew: false },
    { title: "Guidelines for Online Examinations", date: "Sep 28, 2025", isNew: false },
    { title: "Mid-Semester Exam Timetable Released", date: "Sep 15, 2025", isNew: false },
    { title: "Practical Exam Schedule for Engineering", date: "Sep 10, 2025", isNew: false },
    { title: "Project Viva Voce Guidelines", date: "Sep 05, 2025", isNew: false },
    { title: "Answer Sheet Re-evaluation Process", date: "Aug 28, 2025", isNew: false },
    { title: "Exam Center Allocation Details", date: "Aug 20, 2025", isNew: false },
    { title: "Internal Assessment Marks Submission", date: "Aug 15, 2025", isNew: false },
    { title: "Semester End Exam Registration Open", date: "Aug 10, 2025", isNew: false },
  ];

  const admissionCirculars = [
    { title: "Fall 2026 Application Deadline Extended", date: "Oct 22, 2025", isNew: true },
    { title: "Entrance Exam Syllabus Update", date: "Oct 18, 2025", isNew: true },
    { title: "Document Verification Schedule", date: "Oct 12, 2025", isNew: false },
    { title: "Merit List Publication Date", date: "Oct 05, 2025", isNew: false },
    { title: "Counseling Round 2 Schedule", date: "Sep 30, 2025", isNew: false },
    { title: "Fee Payment Deadline Extension", date: "Sep 22, 2025", isNew: false },
    { title: "Scholarship Application Guidelines", date: "Sep 18, 2025", isNew: false },
    { title: "Hostel Accommodation Registration", date: "Sep 12, 2025", isNew: false },
    { title: "Transfer Certificate Submission", date: "Sep 05, 2025", isNew: false },
    { title: "Lateral Entry Admission Notification", date: "Aug 30, 2025", isNew: false },
    { title: "Management Quota Seat Allocation", date: "Aug 25, 2025", isNew: false },
    { title: "Online Admission Portal Launch", date: "Aug 15, 2025", isNew: false },
  ];
const hasExam = examCirculars.length > 0;
const hasAdmissions = admissionCirculars.length > 0;
const allCirculars = [...examCirculars, ...admissionCirculars];

  return (
    <div data-testid="page-circulars">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="heading-circulars">
            Circulars
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-circulars">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Circulars</span>
          </nav>
        </div>
      </section>

     {/* Content Section */}
<section className="py-16 bg-background border-b border-border/40">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="flex justify-center text-2xl md:text-3xl font-heading font-bold mb-8">
      Circulars
    </h2>

    <div className="overflow-hidden rounded-lg border border-border max-w-6xl mx-auto">
      {/* Table Header */}
      <div className="grid grid-cols-[80px_180px_1fr_80px] bg-primary text-primary-foreground text-sm font-semibold">
        <div className="py-4 text-center">Sl.No</div>
        <div className="py-4 text-center">Announcement Date</div>
        <div className="py-4 px-4">Title</div>
        <div className="py-4 text-center">Info</div>
      </div>

      {/* Table Body */}
      <ScrollArea className="h-[420px]">
        {allCirculars.map((item, index) => (
          <div
            key={index}
            className="
              grid grid-cols-[80px_180px_1fr_80px]
              items-center text-sm
              border-b border-border
              hover:bg-primary/5
              transition-colors
            "
          >
            {/* Sl No */}
            <div className="py-4 text-center font-medium">
              {index + 1}
            </div>

            {/* Date */}
            <div className="py-4 text-center text-muted-foreground">
              {item.date}
            </div>

            {/* Title */}
            <div className="py-4 px-4 flex items-center gap-2">
              <span className="text-foreground leading-relaxed hover:text-primary transition-colors">
                {item.title}
              </span>

              {item.isNew && (
                <Badge className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0 h-5">
                  NEW
                </Badge>
              )}
            </div>

            {/* Info Icon */}
            <div className="py-4 flex justify-center">
              <Link href="/circulars">
                <button
                  aria-label="View circular"
                  className="
                    p-2 rounded-full
                    text-primary
                    hover:bg-primary/10
                    transition-colors
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))}

        {allCirculars.length === 0 && (
          <div className="py-12 text-center text-muted-foreground text-sm">
            No circulars available at the moment.
          </div>
        )}
      </ScrollArea>
    </div>
  </div>
</section>


    </div>
  );
}
