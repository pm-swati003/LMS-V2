import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Award, Globe, CheckCircle2, Star, Calendar } from "lucide-react";
import generatedImage from '@assets/generated_images/modern_university_campus_with_students.png';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LandingPage() {
  const examCirculars = [
    { title: "Final Semester Exam Schedule Declared", date: "Oct 24, 2025", isNew: true },
    { title: "Hall Ticket Download Instructions", date: "Oct 20, 2025", isNew: true },
    { title: "Re-evaluation Results for B.Tech", date: "Oct 15, 2025", isNew: false },
    { title: "Supplementary Exam Dates Announced", date: "Oct 10, 2025", isNew: false },
    { title: "Exam Center Change Request Form", date: "Oct 05, 2025", isNew: false },
    { title: "Guidelines for Online Examinations", date: "Sep 28, 2025", isNew: false },
  ];

  const admissionCirculars = [
    { title: "Fall 2026 Application Deadline Extended", date: "Oct 22, 2025", isNew: true },
    { title: "Entrance Exam Syllabus Update", date: "Oct 18, 2025", isNew: true },
    { title: "Document Verification Schedule", date: "Oct 12, 2025", isNew: false },
    { title: "Scholarship Application Open", date: "Oct 08, 2025", isNew: false },
    { title: "International Student Admission Guidelines", date: "Sep 30, 2025", isNew: false },
    { title: "Ph.D. Entrance Test Notification", date: "Sep 25, 2025", isNew: false },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
           <img 
             src={generatedImage} 
             alt="University Campus" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-none px-3 py-1">
              Admissions Open for Fall 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Shape Your Future with World-Class Education
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Join a global community of learners and innovators. Experience flexible, high-quality online learning designed for the modern world.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg">Explore Programs</Button>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Student Portal
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="size-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                     {/* Placeholder avatars */}
                   </div>
                 ))}
               </div>
               <p>Joined by 10,000+ students worldwide</p>
            </div>
          </div>
        </div>
      </section>


      {/* Circulars Section */}
      <section className="py-16 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Circulars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exam Circulars Panel */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader className="pb-3 border-b border-border/40 bg-muted/30">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  Exam Circulars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px] w-full p-4">
                  <div className="space-y-1">
                    {examCirculars.map((item, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col gap-1 p-3 rounded-md hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/40 last:border-0"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </span>
                          {item.isNew && (
                            <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-5 shrink-0">NEW</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="size-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Admissions Circulars Panel */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader className="pb-3 border-b border-border/40 bg-muted/30">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  Admissions Circulars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px] w-full p-4">
                  <div className="space-y-1">
                    {admissionCirculars.map((item, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col gap-1 p-3 rounded-md hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/40 last:border-0"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </span>
                          {item.isNew && (
                            <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-5 shrink-0">NEW</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="size-3" />
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

      {/* Programs Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Discover Our Top Programs</h2>
            <p className="text-muted-foreground text-lg">
              Choose from a wide range of accredited programs designed to advance your career and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science",
                level: "Bachelor of Science",
                desc: "Master the foundations of computing, algorithms, and software engineering.",
                tags: ["Software Dev", "AI", "Data"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
              },
              {
                title: "Business Administration",
                level: "MBA",
                desc: "Develop leadership skills and strategic thinking for the global business landscape.",
                tags: ["Management", "Finance", "Strategy"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              },
              {
                title: "Digital Design",
                level: "Bachelor of Arts",
                desc: "Explore the intersection of creativity and technology in modern design.",
                tags: ["UI/UX", "Graphics", "Media"],
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
              }
            ].map((program, i) => (
              <Card key={i} className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                   <img 
                     src={program.image} 
                     alt={program.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4">
                     <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-sm">{program.level}</Badge>
                   </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{program.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/50 pt-4">
                  <Button variant="ghost" className="w-full group-hover:text-primary justify-between p-0 hover:bg-transparent">
                    View Program Details <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/programs">
              <Button variant="outline" size="lg">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Why Choose VTU online?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine academic excellence with cutting-edge technology to deliver a learning experience that fits your life.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Flexible Learning", desc: "Study at your own pace, anytime, anywhere." },
                  { title: "Industry-Relevant Curriculum", desc: "Courses designed with input from top tech companies." },
                  { title: "Career Support", desc: "Dedicated career services to help you land your dream job." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Students collaborating" 
                className="relative rounded-2xl shadow-xl w-full"
              />
              <Card className="absolute -bottom-8 -left-8 max-w-xs shadow-xl hidden md:block">
                 <CardContent className="p-6 flex items-start gap-4">
                    <div className="size-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Star className="size-6 fill-current" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">4.9/5</div>
                      <p className="text-sm text-muted-foreground">Student Satisfaction Rating</p>
                    </div>
                 </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
           <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
             Join thousands of students transforming their careers with VTU online.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" variant="secondary" className="h-14 px-8 text-lg text-primary">Apply Now</Button>
             <Link href="/contact">
               <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white">Contact Admissions</Button>
             </Link>
           </div>
         </div>
      </section>
    </div>
  );
}
