import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "wouter";
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Download, 
  FileText,
  Calendar,
  Globe,
  Star
} from "lucide-react";

// Mock Data for a single course
const COURSE_DATA = {
  id: "1",
  title: "Entrepreneurship and Business Leadership + Virtual Internship Program",
  description: "Master the art of entrepreneurship and leadership in this comprehensive program designed for aspiring business leaders. Gain practical experience through our virtual internship.",
  credits: "04",
  duration: "12 Weeks",
  level: "Intermediate",
  language: "English",
  rating: 4.8,
  students: 1250,
  price: "$499",
  eligibility: ["Bachelor's Degree in any field", "Basic understanding of business concepts", "Proficiency in English"],
  learningOutcomes: [
    "Develop a strategic mindset for business growth",
    "Understand financial management and forecasting",
    "Master team leadership and conflict resolution",
    "Create effective marketing strategies",
    "Navigate legal and ethical business challenges",
    "Build a scalable business model"
  ],
  curriculum: [
    {
      title: "Module 1: Foundations of Entrepreneurship",
      lessons: ["The Entrepreneurial Mindset", "Identifying Opportunities", "Market Research Basics", "Business Model Canvas"]
    },
    {
      title: "Module 2: Strategic Leadership",
      lessons: ["Leadership Styles", "Building High-Performance Teams", "Decision Making Under Uncertainty", "Change Management"]
    },
    {
      title: "Module 3: Financial Intelligence",
      lessons: ["Reading Financial Statements", "Cash Flow Management", "Funding Your Venture", "Valuation Basics"]
    },
    {
      title: "Module 4: Marketing & Sales",
      lessons: ["Digital Marketing Strategy", "Sales Funnel Optimization", "Customer Acquisition Cost", "Brand Building"]
    }
  ],
  faqs: [
    {
      question: "Is this course self-paced?",
      answer: "Yes, this course is designed to be flexible. You can access the materials at any time and progress at your own pace within the 12-week duration."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Absolutely! Upon successful completion of the course and the virtual internship project, you will receive a verified certificate from VTU Online."
    },
    {
      question: "What is the virtual internship component?",
      answer: "The virtual internship involves working on a real-world project provided by our industry partners. You will apply the skills learned in the course to solve a business problem."
    }
  ]
};

export default function CourseProgramDetailsPage() {
  const { courseId } = useParams();
  // In a real app, use courseId to fetch data. For now, we use static mock data.
  const course = COURSE_DATA; 

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 dark:bg-slate-900/10 min-h-screen pb-20">
      
      {/* 1. Hero / Course Summary Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
         {/* Abstract Background */}
         <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 opacity-90"></div>
          <svg className="absolute w-full h-full text-white/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M-10 80 Q 50 20 110 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span className="text-white font-medium truncate">{course.title}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="size-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-white">{course.rating}</span>
                  <span>({course.students} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                   <Globe className="size-4" />
                   <span>{course.language}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Award className="size-4" />
                   <span>Certificate Included</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button size="lg" className="h-12 px-8 text-base bg-white text-slate-900 hover:bg-slate-100">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <Download className="mr-2 size-4" /> Brochure
                </Button>
              </div>
            </div>

            {/* Key Details Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 border-white/10 backdrop-blur-sm text-white h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Course Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <Clock className="size-5 text-indigo-300" />
                      <span className="text-slate-200">Duration</span>
                    </div>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="size-5 text-indigo-300" />
                      <span className="text-slate-200">Credits</span>
                    </div>
                    <span className="font-semibold">{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <Users className="size-5 text-indigo-300" />
                      <span className="text-slate-200">Level</span>
                    </div>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-3">
                      <Calendar className="size-5 text-indigo-300" />
                      <span className="text-slate-200">Start Date</span>
                    </div>
                    <span className="font-semibold">Flexible</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12 space-y-20">
        
        {/* 2. Why Choose This Program */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose This Program?</h2>
            <p className="text-muted-foreground">
              Designed by industry experts, this program offers a unique blend of theoretical knowledge and practical application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Award, title: "Industry Recognized", desc: "Curriculum aligned with global industry standards and job requirements." },
               { icon: Users, title: "Expert Mentorship", desc: "Learn from seasoned professionals and academic leaders." },
               { icon: FileText, title: "Practical Projects", desc: "Work on real-world case studies and build a professional portfolio." }
             ].map((item, i) => (
               <Card key={i} className="text-center border-border/50 shadow-sm hover:shadow-md transition-all">
                 <CardContent className="pt-8 pb-8 px-6 space-y-4">
                   <div className="mx-auto size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                     <item.icon className="size-7" />
                   </div>
                   <h3 className="font-bold text-xl">{item.title}</h3>
                   <p className="text-muted-foreground">{item.desc}</p>
                 </CardContent>
               </Card>
             ))}
          </div>
        </section>

        {/* 3. Eligibility / Criteria Section */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-heading font-bold mb-4">Eligibility Criteria</h2>
              <p className="text-muted-foreground">
                Ensure you meet the following requirements before applying for this program.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.eligibility.map((criteria, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="size-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What You Will Learn */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">What You Will Learn</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
               {course.learningOutcomes.map((outcome, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="size-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                     <CheckCircle2 className="size-4 text-indigo-300" />
                   </div>
                   <span className="text-lg text-slate-200">{outcome}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 5. Curriculum Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Program Curriculum</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {course.curriculum.map((module, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-lg bg-white px-2">
                <AccordionTrigger className="px-4 hover:no-underline hover:bg-slate-50 rounded-md">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-semibold text-lg">{module.title}</span>
                    <span className="text-sm text-muted-foreground font-normal mt-1">{module.lessons.length} Lessons</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <ul className="space-y-3 mt-2">
                    {module.lessons.map((lesson, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-600 pl-2 border-l-2 border-slate-200 ml-1">
                        <div className="size-1.5 rounded-full bg-slate-400"></div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 6. Application Process */}
        <section>
           <h2 className="text-3xl font-heading font-bold mb-12 text-center">Application Process</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[
               { step: "01", title: "Submit Application", desc: "Complete the online application form with your details." },
               { step: "02", title: "Review & Selection", desc: "Our team reviews your profile against eligibility criteria." },
               { step: "03", title: "Enroll & Start", desc: "Pay the fees and get immediate access to the learning portal." }
             ].map((step, i) => (
               <div key={i} className="relative p-8 bg-white rounded-xl border border-border/50 shadow-sm text-center group hover:border-primary/30 transition-all">
                 <div className="text-6xl font-black text-slate-100 absolute top-4 left-1/2 -translate-x-1/2 -z-10 group-hover:text-indigo-50 transition-colors">
                   {step.step}
                 </div>
                 <div className="relative z-10">
                   <h3 className="font-bold text-xl mb-3 mt-4">{step.title}</h3>
                   <p className="text-muted-foreground">{step.desc}</p>
                 </div>
                 {i < 2 && (
                   <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-slate-300">
                     <ArrowRight className="size-6" />
                   </div>
                 )}
               </div>
             ))}
           </div>
        </section>

        {/* 7. FAQs Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {course.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/40">
                <AccordionTrigger className="text-left font-medium text-lg py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 8. Contact / Enquiry Section */}
        <section className="bg-slate-100 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground">
              Fill out the form below and our admissions team will get back to you shortly.
            </p>
          </div>
          
          <form className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 000-0000" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Interested Program</Label>
                <Input id="program" defaultValue={course.title} disabled className="bg-slate-50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your query here..." className="bg-white min-h-[120px]" />
            </div>

            <div className="text-center pt-4">
              <Button size="lg" className="px-10 text-lg">Submit Enquiry</Button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}
