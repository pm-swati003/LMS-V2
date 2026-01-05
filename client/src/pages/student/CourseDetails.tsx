import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Award, 
  PlayCircle, 
  CheckCircle2, 
  Lock,
  Share2,
  Heart
} from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CourseDetails() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Hero Section */}
      <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 bg-slate-900 text-white p-6 md:p-12 mb-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Course Background"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border-none">Development</Badge>
            <span className="text-slate-400 text-sm">Last updated: Oct 2025</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Advanced React Patterns & Performance Optimization
          </h1>
          
          <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Master modern React by learning advanced design patterns, performance techniques, and state management strategies used by top engineering teams.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>1,240 Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>6h 30m Total Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="size-4" />
              <span>Certificate of Completion</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/student/learn/123/1">
              <Button size="lg" className="h-12 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                Start Learning Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-6 border-white/20 text-white hover:bg-white/10">
              <Heart className="mr-2 size-4" /> Save
            </Button>
            <Button size="lg" variant="ghost" className="h-12 px-4 text-white hover:bg-white/10">
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="w-full justify-start h-12 bg-transparent p-0 border-b border-border/50 rounded-none mb-6">
              <TabsTrigger value="overview" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-6 bg-transparent!">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-6 bg-transparent!">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor" className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-6 bg-transparent!">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <h3 className="text-2xl font-heading font-bold">What you'll learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Advanced Compound Components",
                  "Render Props & Custom Hooks",
                  "Performance Profiling",
                  "State Reducers Pattern",
                  "Control Props Pattern",
                  "React Server Components"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <h3 className="text-2xl font-heading font-bold">Description</h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  This course takes you beyond the basics of React. You'll dive deep into patterns that library authors use to create flexible and reusable components. We'll verify your knowledge with quizzes and practical exercises.
                </p>
                <p>
                  By the end of this course, you will be able to architect complex React applications that are scalable, maintainable, and performant.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-heading font-bold">Course Content</h3>
                <span className="text-sm text-muted-foreground">24 Lessons • 6h 30m</span>
              </div>
              
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-4 mb-4 data-[state=open]:bg-muted/30">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <div className="font-semibold text-lg">Section 1: Introduction to Patterns</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">4 lessons • 45m</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pb-4">
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-md transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="size-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Why Patterns Matter</span>
                      </div>
                      <span className="text-sm text-muted-foreground">10:00</span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-md transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="size-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium">The Compound Component Pattern</span>
                      </div>
                      <span className="text-sm text-muted-foreground">15:30</span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-md transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <Lock className="size-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Flexible Compound Components</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Locked</Badge>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-4 mb-4 data-[state=open]:bg-muted/30">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <div className="font-semibold text-lg">Section 2: Performance Deep Dive</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">6 lessons • 1h 20m</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 text-center text-muted-foreground">Content locked until previous section is complete.</div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="instructor">
               <div className="flex items-start gap-6">
                 <img src="https://github.com/shadcn.png" className="size-20 rounded-full object-cover" alt="Instructor" />
                 <div>
                   <h3 className="text-xl font-bold font-heading">Sarah Drasner</h3>
                   <p className="text-primary font-medium mb-2">Principal Engineer & Author</p>
                   <p className="text-muted-foreground leading-relaxed">
                     Sarah is an award-winning Speaker, Head of Developer Experience at Netlify, and Vue Core Team member. She is the author of "Engineering Management for the Rest of Us."
                   </p>
                 </div>
               </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-border/50 rounded-xl p-6 bg-card sticky top-24 shadow-sm">
            <h3 className="font-heading font-bold text-lg mb-4">Your Progress</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="font-medium">0% Complete</span>
                <span className="text-muted-foreground">0/24 Lessons</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            
            <h4 className="font-medium text-sm mb-3">This course includes:</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex items-center gap-3">
                <PlayCircle className="size-4 text-primary" /> 6.5 hours on-demand video
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="size-4 text-primary" /> 5 downloadable resources
              </li>
              <li className="flex items-center gap-3">
                <Users className="size-4 text-primary" /> Access on mobile and TV
              </li>
              <li className="flex items-center gap-3">
                <Award className="size-4 text-primary" /> Certificate of completion
              </li>
            </ul>
            
            <Link href="/student/learn/123/1">
              <Button className="w-full text-base h-11">Continue Learning</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
