import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, Lock, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function LessonView() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Main Content (Video Player) */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border/40 flex items-center justify-between px-6 bg-background/95 backdrop-blur z-10">
          <div className="flex items-center gap-4">
            <Link href="/student/course/123">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ChevronLeft className="size-5" />
              </Button>
            </Link>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Course</span>
              <h1 className="text-base font-semibold truncate max-w-[200px] md:max-w-md">Advanced React Patterns</h1>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden md:flex">
             {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </Button>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-950 flex flex-col">
          <div className="flex-1 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer">
              {/* Fake Video Player UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle className="size-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full space-y-2">
                  <div className="h-1 bg-white/30 rounded-full w-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary"></div>
                  </div>
                  <div className="flex justify-between text-white text-xs font-medium">
                    <span>04:20 / 12:45</span>
                    <span>1080p</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background border-t border-border/40 p-6 md:p-8 min-h-[300px]">
             <div className="max-w-4xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                 <h2 className="text-2xl font-heading font-bold">The Compound Component Pattern</h2>
                 <div className="flex gap-2">
                   <Link href="/student/quiz/1">
                     <Button variant="outline"><HelpCircle className="mr-2 size-4" /> Take Quiz</Button>
                   </Link>
                   <Button>Next Lesson <ChevronRight className="ml-2 size-4" /></Button>
                 </div>
               </div>
               <p className="text-muted-foreground leading-relaxed">
                 In this lesson, we explore how to communicate implicitly between components using the Context API to build flexible and declarative APIs.
               </p>
               
               <div className="prose prose-slate dark:prose-invert max-w-none">
                 <h3>Key Takeaways</h3>
                 <ul>
                   <li>Compound components share state implicitly.</li>
                   <li>They allow for flexible ordering of children.</li>
                   <li>Context API is the glue that holds them together.</li>
                 </ul>
               </div>
             </div>
          </div>
        </main>
      </div>

      {/* Course Sidebar */}
      <div 
        className={cn(
          "w-80 border-l border-border/40 bg-muted/10 flex flex-col transition-all duration-300 ease-in-out absolute md:relative right-0 h-full z-20",
          sidebarOpen ? "translate-x-0" : "translate-x-full md:w-0 md:translate-x-0 md:border-l-0 md:overflow-hidden"
        )}
      >
        <div className="h-16 border-b border-border/40 flex items-center px-6 shrink-0 font-heading font-semibold">
          Course Content
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Section 1: Foundations</h3>
              <div className="space-y-1">
                {[
                  { title: "Introduction", duration: "2:30", completed: true },
                  { title: "Why Patterns Matter", duration: "5:45", completed: true },
                  { title: "Setup Environment", duration: "10:15", completed: true },
                ].map((lesson, i) => (
                  <button key={i} className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted text-left group">
                     <CheckCircle2 className="size-4 text-primary shrink-0" />
                     <div className="flex-1 min-w-0">
                       <p className="text-sm font-medium truncate text-muted-foreground group-hover:text-foreground line-through decoration-muted-foreground/50">{lesson.title}</p>
                       <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                     </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Section 2: Advanced Patterns</h3>
              <div className="space-y-1">
                {[
                  { title: "The Compound Component Pattern", duration: "12:45", active: true },
                  { title: "Flexible Compound Components", duration: "15:20" },
                  { title: "Render Props Explained", duration: "08:30" },
                  { title: "Prop Collections & Getters", duration: "14:10" },
                ].map((lesson, i) => (
                  <button 
                    key={i} 
                    className={cn(
                      "w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors",
                      lesson.active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                  >
                     {lesson.active ? (
                       <PlayCircle className="size-4 shrink-0 fill-current" />
                     ) : (
                       <div className="size-4 rounded-full border border-muted-foreground/30 shrink-0" />
                     )}
                     <div className="flex-1 min-w-0">
                       <p className={cn("text-sm font-medium truncate", lesson.active ? "text-primary" : "text-foreground")}>{lesson.title}</p>
                       <span className={cn("text-xs", lesson.active ? "text-primary/70" : "text-muted-foreground")}>{lesson.duration}</span>
                     </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Section 3: Performance</h3>
              <div className="space-y-1">
                {[
                  { title: "React.memo and useMemo", duration: "10:00", locked: true },
                  { title: "Windowing Large Lists", duration: "12:00", locked: true },
                ].map((lesson, i) => (
                  <button key={i} className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted text-left opacity-60">
                     <Lock className="size-4 text-muted-foreground shrink-0" />
                     <div className="flex-1 min-w-0">
                       <p className="text-sm font-medium truncate text-muted-foreground">{lesson.title}</p>
                       <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                     </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
