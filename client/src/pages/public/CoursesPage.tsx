import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "wouter";
import { ChevronDown, Filter, Search, Grid, List } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

// Mock Data
const COURSES = [
  { id: 1, title: "Entrepreneurship and Business Leadership + Virtual Internship Program", credits: "04", image: null },
  { id: 2, title: "UI Design, Game Design and Animation - Virtual Internship Program", credits: "04", image: null },
  { id: 3, title: "Photography and Video Production with Adobe Lightroom - Virtual Internship Program", credits: "04", image: null },
  { id: 4, title: "Business Management and Analytics with Excel Architecture - Virtual Internship Program", credits: "04", image: null },
  { id: 5, title: "Digital Marketing and SEO - Virtual Internship Program", credits: "04", image: null },
  { id: 6, title: "Programming Combo Skill Program", credits: "04", image: null },
  { id: 7, title: "Graphic Designing - Virtual Internship Program", credits: "04", image: null },
  { id: 8, title: "Job-Ready Pro Python, React, AR-VR & Data Structure & Interview Mastery", credits: "04", image: null },
  { id: 9, title: "Web Development and React with Python - Virtual Internship Program", credits: "04", image: null },
  { id: 10, title: "3 Credits - IOC Computer Programming Skill with C", credits: "03", image: null },
  { id: 11, title: "3 Credits - IOC Interview preparation - (Corporate Skills)", credits: "03", image: null },
  { id: 12, title: "3 Credits - IOC MS Excel Basic to Advance level", credits: "03", image: null },
  { id: 13, title: "3 Credits - IOC Android App Development with Kotlin Essentials", credits: "03", image: null },
  { id: 14, title: "3 Credits - IOC React Full Stack (Web/App Development Skills)", credits: "03", image: null },
  { id: 15, title: "3 Credits - IOC Employability Skill Course - (Corporate Skills)", credits: "03", image: null },
  { id: 16, title: "3 Credits - IOC Skill enhancement with Data structure (Algorithm - C Language)", credits: "03", image: null },
  { id: 17, title: "3 Credits - IOC Python Essentials and Libraries for Data Science", credits: "03", image: null },
  { id: 18, title: "3 Credits - IOC Object Oriented Programming using C++", credits: "03", image: null },
];

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 dark:bg-slate-900/10 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 opacity-90"></div>
          {/* Decorative lines similar to design */}
          <svg className="absolute w-full h-full text-white/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M-10 80 Q 50 20 110 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <path d="M-10 90 Q 50 30 110 90" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">MOOC Resources</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Courses</span>
            <span>/</span>
            <span className="text-white font-medium">MOOC Resources</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* 2. Filters & Sorting Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-2">Quick Filters:</span>
            {["Reset All", "Skill Programs", "Internships", "Technical", "Management"].map((filter, i) => (
              <Badge 
                key={filter} 
                variant={i === 0 ? "secondary" : "outline"} 
                className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-normal hover:bg-primary hover:text-white transition-colors ${i === 0 ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300' : 'bg-white'}`}
              >
                {filter}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="text-sm text-muted-foreground whitespace-nowrap hidden sm:block">Sort by:</div>
             <Select defaultValue="default">
               <SelectTrigger className="w-full md:w-[180px] bg-white">
                 <SelectValue placeholder="Sort Order" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="default">Default</SelectItem>
                 <SelectItem value="newest">Newest First</SelectItem>
                 <SelectItem value="popular">Most Popular</SelectItem>
               </SelectContent>
             </Select>
             <div className="flex border rounded-md bg-white">
               <Button 
                variant="ghost" 
                size="icon" 
                className={`h-9 w-9 rounded-none rounded-l-md ${viewMode === 'grid' ? 'bg-muted' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                 <Grid className="size-4" />
               </Button>
               <Separator orientation="vertical" className="h-9" />
               <Button 
                variant="ghost" 
                size="icon" 
                className={`h-9 w-9 rounded-none rounded-r-md ${viewMode === 'list' ? 'bg-muted' : ''}`}
                onClick={() => setViewMode('list')}
              >
                 <List className="size-4" />
               </Button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 3. Left Sidebar (Filters Panel) */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6 space-y-6">
                
                {/* MOOC Categories */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold bg-primary text-white px-3 py-1.5 rounded text-sm w-full">MOOC Categories</h3>
                  </div>
                  <div className="space-y-2 pl-1">
                    {["Arts/ Design", "Human Values", "Internship Course", "Skill Enhancement Course"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`mooc-${i}`} />
                        <Label htmlFor={`mooc-${i}`} className="text-sm font-normal text-muted-foreground cursor-pointer hover:text-primary">{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Categories */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                     <h3 className="font-semibold bg-primary text-white px-3 py-1.5 rounded text-sm w-full">Categories</h3>
                  </div>
                  <div className="space-y-2 pl-1">
                    {["Basic Sciences", "E - Learning COE", "Engineering Science", "Humanities and Social Science", "IOC Completed Courses"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`cat-${i}`} />
                        <Label htmlFor={`cat-${i}`} className="text-sm font-normal text-muted-foreground cursor-pointer hover:text-primary">{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                 {/* Course Type */}
                 <div className="space-y-3">
                  <div className="flex items-center justify-between">
                     <h3 className="font-semibold bg-primary text-white px-3 py-1.5 rounded text-sm w-full">Course Type</h3>
                  </div>
                  <div className="space-y-2 pl-1">
                    {["Computer Skills", "Professional Foundation Skill", "Language Skills", "Digital Skills", "Management Skills"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`type-${i}`} />
                        <Label htmlFor={`type-${i}`} className="text-sm font-normal text-muted-foreground cursor-pointer hover:text-primary">{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* 4. Right Content Area (Courses Grid) */}
          <div className="lg:col-span-3">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {COURSES.map((course) => (
                 <Card key={course.id} className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 bg-white">
                   <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-8 border-b border-border/40">
                      {/* Placeholder Image Icon as per design */}
                      <div className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                          <circle cx="9" cy="9" r="2"/>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                      </div>
                   </div>
                   <CardContent className="p-5 flex flex-col h-[180px]">
                     <h3 className="font-semibold text-base line-clamp-3 mb-auto group-hover:text-primary transition-colors">
                       {course.title}
                     </h3>
                     <div className="pt-4 mt-auto">
                       <p className="text-sm text-muted-foreground">Credits : {course.credits}</p>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
             
             {/* Pagination (Visual only) */}
             <div className="mt-12 flex justify-center gap-2">
               <Button variant="outline" size="sm" disabled>Previous</Button>
               <Button variant="default" size="sm" className="bg-primary">1</Button>
               <Button variant="outline" size="sm">2</Button>
               <Button variant="outline" size="sm">3</Button>
               <Button variant="outline" size="sm">Next</Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
