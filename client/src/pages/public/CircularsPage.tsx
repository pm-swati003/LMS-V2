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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Exam Circulars Card */}
            <Card className="border-border/60 shadow-lg h-full" data-testid="card-exam-circulars">
              <CardHeader className="pb-4 border-b border-border/40 bg-muted/30">
                <CardTitle className="text-xl font-semibold flex items-center gap-2" data-testid="title-exam-circulars">
                  Exam Circulars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[500px] w-full p-4">
                  <div className="space-y-1">
                    {examCirculars.map((item, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col gap-1.5 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/40 last:border-0"
                        data-testid={`circular-exam-${i}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          {item.isNew && (
                            <Badge variant="destructive" className="text-[10px] px-2 py-0.5 h-5 shrink-0" data-testid={`badge-new-exam-${i}`}>
                              NEW
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="size-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Admissions Circulars Card */}
            <Card className="border-border/60 shadow-lg h-full" data-testid="card-admissions-circulars">
              <CardHeader className="pb-4 border-b border-border/40 bg-muted/30">
                <CardTitle className="text-xl font-semibold flex items-center gap-2" data-testid="title-admissions-circulars">
                  Admissions Circulars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[500px] w-full p-4">
                  <div className="space-y-1">
                    {admissionCirculars.map((item, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col gap-1.5 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/40 last:border-0"
                        data-testid={`circular-admission-${i}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          {item.isNew && (
                            <Badge variant="destructive" className="text-[10px] px-2 py-0.5 h-5 shrink-0" data-testid={`badge-new-admission-${i}`}>
                              NEW
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="size-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
