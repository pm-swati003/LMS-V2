import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Award, Globe, CheckCircle2, Star, Calendar, ChevronDown, Info } from "lucide-react";
import generatedImage from '@assets/generated_images/modern_university_campus_with_students.png';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


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
const hasExam = examCirculars.length > 0;
const hasAdmissions = admissionCirculars.length > 0;
const allCirculars = [...examCirculars, ...admissionCirculars];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative overflow-hidden min-h-[600px] flex items-center bg-foreground text-background">
  <div className="absolute inset-0 z-0">
    <img
      src="vtu banner.jpg"
      alt="University Campus"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-transparent"></div>
  </div>

  <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
    <div className="max-w-2xl space-y-6">
      <Badge
        variant="secondary"
        className="bg-primary/20 text-primary-foreground border-none px-3 py-1"
      >
        Admissions Open for Fall 2026
      </Badge>

      <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
        Shape Your Future with World-Class Education
      </h1>

      <p className="text-lg md:text-xl text-background/80 leading-relaxed max-w-xl">
        Join a global community of learners and innovators. Experience flexible,
        high-quality online learning designed for the modern world.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link href="/programs">
          <Button size="lg" className="h-14 px-8 text-lg whitespace-nowrap">
            Explore Programs
          </Button>
        </Link>

        <Link href="/auth/login">
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg border-background/30 text-background hover:bg-background/10 whitespace-nowrap"
          >
            Student Portal
          </Button>
        </Link>
      </div>

      <div className="pt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
        <div className="flex -space-x-2">
          {["A", "S", "R", "K"].map((initial, i) => (
            <div
              key={i}
              className="size-8 rounded-full bg-background/10 border-2 border-foreground flex items-center justify-center text-xs font-bold text-background"
            >
              {initial}
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
          <h2 className=" flex justify-center text-2xl md:text-3xl font-heading font-bold mb-8">
            Circulars
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-3 border-b border-border/40 bg-muted/30">
                  <CardTitle className="text-lg font-semibold">
                    All Circulars
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <ScrollArea className="h-[360px] w-full p-4">
                    <div className="space-y-1">
                      {allCirculars.map((item, i) => (
                        <div
                          key={i}
                          className="group flex flex-col gap-1 p-3 rounded-md hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/40 last:border-0"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {item.title}
                            </span>

                            {item.isNew && (
                              <Badge className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0 h-5">
                  NEW
                </Badge>

                            )}
                          </div>

                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="size-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      ))}

                      {allCirculars.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground text-sm">
                          No circulars available at the moment.
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/circulars">
              <Button size="lg" className="h-12 px-8">
                View All Circulars
              </Button>
            </Link>
          </div>
        </div>
      </section>

     {/* 6. Hon'ble Vice Chancellor Message */}
<section className="py-16 bg-white shadow-brand">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-heading font-bold uppercase tracking-wide">
        Hon'ble Vice Chancellor Message
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
      
      {/* Image */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-xl aspect-[3/4] flex items-center justify-center border border-border shadow-sm p-4">
          <img
            src="/public/Dr_S_Vidyashankar.jpg"
            alt="Dr. S Vidyashankar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:col-span-2 space-y-6">
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            The new millennium is witnessing unprecedented challenges and opportunities in higher education. Engineering Education plays a pivotal role in Human Resource Development of any country. In the recent times, the educational sector has gone through a major transformation influenced by the global technological changes viz shifting to Outcome Based Education, enhancement of industry-institute interactions, digital transformation, providing affordable quality education etc.
          </p>

          <p>
            This is paving a way for students to pursue their higher studies and enhanced employment opportunities. Premier institutions across the globe are receiving an impetus towards imbibing research culture into their curriculum. In tune with the changes, NEP-2020 envisions an India-Centered Education System that contributes directly to transforming our nation sustainably into an equitable and vibrant knowledge society by providing high-quality education to all.
          </p>
        </div>

        {/* Name + CTA */}
        <div>
          <h3 className="font-bold text-xl">Dr. S Vidyashankar</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Hon'ble Vice Chancellor – Visvesvaraya Technological University, Belagavi
          </p>

          <Link href="/about">
  <a className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:underline hover:gap-2 transition-all">
    Know more
    <ArrowRight className="size-4" />
  </a>
</Link>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Our Online Programmes Section */}
      <OnlineProgrammesSection />

      {/* Benefits of VTU Online Programmes */}
<section className="py-24 bg-background shadow-brand">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Benefits of VTU Online Programmes
      </h2>
      <p className="text-muted-foreground text-lg">
        Experience world-class education with dedicated support at every step of your learning journey.
      </p>
    </div>

    {/* Block 1 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-1"></div>
        <img
          src="learn frm exp.jpg"
          alt="University campus"
          className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-heading font-bold">
          Learn From the Experts
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Learn from carefully curated content designed and reviewed by experienced faculty from VTU and leading industry professionals.
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-8 py-4">
          <div className="min-w-[100px]">
            <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
            <p className="text-sm text-muted-foreground">Subject Experts</p>
          </div>
          <div className="min-w-[100px]">
            <div className="text-2xl sm:text-3xl font-bold text-primary">4.7/5</div>
            <p className="text-sm text-muted-foreground">Average Content Rating</p>
          </div>
        </div>

        <Link href="/courses">
          <Button size="lg" className="h-12 px-6">
            View Courses
          </Button>
        </Link>
      </div>
    </div>

    {/* Block 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="space-y-6 order-2 lg:order-1">
        <h3 className="text-2xl md:text-3xl font-heading font-bold">
          Dedicated Programme & Course Coordinators
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Each programme is supported by dedicated academic coordinators who ensure smooth course delivery.
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-8 py-4">
          <div className="min-w-[100px]">
            <div className="text-2xl sm:text-3xl font-bold text-primary">20,000+</div>
            <p className="text-sm text-muted-foreground">Doubt Solving Hours</p>
          </div>
          <div className="min-w-[100px]">
            <div className="text-2xl sm:text-3xl font-bold text-primary">200+</div>
            <p className="text-sm text-muted-foreground">Course Coordinators</p>
          </div>
        </div>

        <Link href="/programs">
          <Button size="lg" variant="outline" className="h-12 px-6">
            Learn More
          </Button>
        </Link>
      </div>

      <div className="relative order-1 lg:order-2">
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-1"></div>
        <img
          src="prgm coor.jpg"
          alt="University building"
          className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
        />
      </div>
    </div>

    {/* Block 3 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-1"></div>
        <img
          src="tech coor.jpg"
          alt="Technical support team"
          className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-heading font-bold">
          Dedicated Technical Support Cell
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Our dedicated technical support team ensures uninterrupted learning.
        </p>

        <div className="space-y-3 py-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="size-5 text-primary" />
            </div>
            <span className="text-muted-foreground">1:1 Dedicated Support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="size-5 text-primary" />
            </div>
            <span className="text-muted-foreground">
              Telephonic Support: Mon–Sat, 9:30 AM – 5:30 PM
            </span>
          </div>
        </div>

        <Link href="/contact">
          <Button size="lg" className="h-12 px-6">
            Reach Us
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
<section className="py-24 bg-primary text-primary-foreground text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
      Ready to Start Your Journey?
    </h2>

    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
      Join thousands of students transforming their careers with VTU online.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        variant="secondary"
        className="h-14 px-8 text-lg whitespace-nowrap"
      >
        Apply Now
      </Button>

      <Link href="/contact">
        <Button
          size="lg"
          variant="outline"
          className="h-14 px-8 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 whitespace-nowrap"
        >
          Contact Admissions
        </Button>
      </Link>
    </div>
  </div>
</section>


    </div>
  );
}

function OnlineProgrammesSection() {
  const [activeCategory, setActiveCategory] = useState("Popular Courses");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "Popular Courses",
    "Minor Degree",
    "Honour Degree",
    "Certificate Programme",
    "MOOC Resources",
    "E-Learning VTU",
    "Skill Enhancement Courses",
    "VTU Consortium Courses",
  ];

  const allPrograms = [
    { title: "(Credits – 03) Python Programming", category: "Technology", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80", slug: "python-programming", filter: "Popular Courses" },
    { title: "(Credits – 03) Web Development Fundamentals", category: "Technology", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80", slug: "web-development", filter: "Popular Courses" },
    { title: "(Credits – 03) Digital Photography", category: "Photography", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80", slug: "digital-photography", filter: "Popular Courses" },
    { title: "(Credits – 03) Data Science Essentials", category: "Technology", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", slug: "data-science", filter: "Popular Courses" },
    { title: "(Credits – 03) Business Analytics", category: "Business", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", slug: "business-analytics", filter: "Popular Courses" },
    { title: "(Credits – 03) Machine Learning Basics", category: "Technology", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80", slug: "machine-learning", filter: "Popular Courses" },
    { title: "(Credits – 12) Minor in Computer Science", category: "Technology", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", slug: "minor-cs", filter: "Minor Degree" },
    { title: "(Credits – 12) Minor in Data Analytics", category: "Technology", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80", slug: "minor-data", filter: "Minor Degree" },
    { title: "(Credits – 20) Honours in AI & ML", category: "Technology", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80", slug: "honours-ai", filter: "Honour Degree" },
    { title: "(Credits – 20) Honours in Cybersecurity", category: "Technology", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80", slug: "honours-cyber", filter: "Honour Degree" },
    { title: "(Credits – 06) Certificate in Cloud Computing", category: "Technology", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80", slug: "cert-cloud", filter: "Certificate Programme" },
    { title: "(Credits – 03) MOOC: IoT Fundamentals", category: "Technology", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&q=80", slug: "mooc-iot", filter: "MOOC Resources" },
  ];

  const filteredPrograms = allPrograms.filter(p => p.filter === activeCategory);

  return (
    <section className="py-24 bg-background shadow-brand">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Online Programmes
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from high-quality online programmes from VTU
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Category Dropdown */}
          <div className="lg:hidden">
            <Collapsible open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {activeCategory}
                  <ChevronDown
                    className={`size-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="bg-card border border-border rounded-lg p-2 space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-muted text-foreground"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-4 space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-muted text-foreground"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Program Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
              {filteredPrograms.map((program, i) => (
                <Link key={i} href={`/courses/${program.slug}`} className="block h-full">
                  <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden shrink-0">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary/90 text-primary-foreground text-xs">
                          {program.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                        {program.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No programmes found in this category.
              </div>
            )}

            <div className="text-center mt-10">
              <Link href="/programs">
                <Button variant="outline" size="lg">
                  View All Programmes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  
