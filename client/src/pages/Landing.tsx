import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  MonitorPlay, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Menu
} from "lucide-react";
import campusImage from '@assets/stock_images/modern_university_ca_d29362a1.jpg';
import professorImage from '@assets/stock_images/professional_univers_00100486.jpg';
import studentsImage from '@assets/stock_images/students_studying_to_9435068c.jpg';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-2xl text-primary">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">L</div>
            Lumina
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Programmes</Link>
            <Link href="#" className="hover:text-primary transition-colors">E-Learning</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Register</Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="size-5" /></Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="#" className="text-lg font-medium">Home</Link>
                  <Link href="#" className="text-lg font-medium">About Us</Link>
                  <Link href="#" className="text-lg font-medium">Programmes</Link>
                  <Link href="#" className="text-lg font-medium">E-Learning</Link>
                  <Link href="#" className="text-lg font-medium">Contact</Link>
                  <div className="h-px bg-border my-2" />
                  <Link href="/auth/login"><Button className="w-full" variant="outline">Login</Button></Link>
                  <Link href="/auth/signup"><Button className="w-full">Register</Button></Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={campusImage} 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-4xl mx-auto">
            Learning Without Limits, <br/>Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Join the future of education with our world-class online degree programs and certification courses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/auth/signup">
              <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white border-none w-full sm:w-auto">
                Start For Free
              </Button>
            </Link>
            <Link href="/student/courses">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur w-full sm:w-auto">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                <Users className="size-6" />
              </div>
              <h3 className="text-3xl font-bold font-heading">3,00,000+</h3>
              <p className="text-muted-foreground font-medium">Students Enrolled</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
              <div className="size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                <Trophy className="size-6" />
              </div>
              <h3 className="text-3xl font-bold font-heading">25 Years</h3>
              <p className="text-muted-foreground font-medium">Of Excellence</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background shadow-sm border">
              <div className="size-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                <GraduationCap className="size-6" />
              </div>
              <h3 className="text-3xl font-bold font-heading">200+</h3>
              <p className="text-muted-foreground font-medium">Affiliated Colleges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative mx-auto md:mx-0 max-w-md">
               <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4" />
               <img 
                 src={professorImage} 
                 alt="Vice Chancellor" 
                 className="relative rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
               />
             </div>
             <div className="space-y-6">
               <div className="space-y-2">
                 <h4 className="text-primary font-bold tracking-wide uppercase">Vice Chancellor's Message</h4>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold">Empowering the Future Through Digital Education</h2>
               </div>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 "The new millennium is witnessing unprecedented challenges and opportunities in higher education. Engineering Education plays a pivotal role in Human Resource Development of any country. In recent times, the educational sector has gone through a major transformation influenced by global technological changes."
               </p>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 "Our platform envisions an India-Centered Education System that contributes directly to transforming our nation sustainably, into an equitable and vibrant knowledge society by providing high quality education to all."
               </p>
               <div className="pt-4 border-l-4 border-primary pl-4">
                 <h3 className="font-bold text-xl font-heading">Dr. S Vidyashankar</h3>
                 <p className="text-muted-foreground">Hon'ble Vice Chancellor, Lumina University</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Courses/Programs */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/50">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-2">
              <h4 className="text-primary font-bold tracking-wide uppercase">Our Programmes</h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Popular Online Courses</h2>
            </div>
            <Link href="/student/courses" className="hidden md:flex items-center text-primary font-medium hover:underline">
              View All Courses <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Renewable Energy & Smart Grids", credits: "03 Credits", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60" },
              { title: "IoT and Smart Systems", credits: "03 Credits", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60" },
              { title: "AI/ML in Engineering", credits: "04 Credits", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60" },
              { title: "Cyber Security & Ethics", credits: "03 Credits", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60" },
            ].map((course, i) => (
              <div key={i} className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="relative aspect-video overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-2 right-2 bg-background/90 backdrop-blur px-2 py-1 rounded text-xs font-bold">
                    {course.credits}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Master the fundamentals with expert guidance.</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">View Details</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">View All Courses</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Lumina Online?</h2>
            <p className="text-muted-foreground text-lg">We provide a comprehensive learning ecosystem designed for your success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto size-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <GraduationCap className="size-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Learn From Experts</h3>
              <p className="text-muted-foreground mb-6">
                Learn from the best content curated & scrutinised by subject experts from the university and industry.
              </p>
              <div className="flex items-center justify-center gap-2 font-bold text-lg">
                <span className="text-primary">1,000+</span> Experts
              </div>
            </div>

            <div className="bg-background border rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto size-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                <Users className="size-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Dedicated Coordinators</h3>
              <p className="text-muted-foreground mb-6">
                We map subject or course experts as co-ordinators for every programme or course offered online.
              </p>
              <div className="flex items-center justify-center gap-2 font-bold text-lg">
                <span className="text-primary">200+</span> Coordinators
              </div>
            </div>

            <div className="bg-background border rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <div className="mx-auto size-20 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                <MonitorPlay className="size-10 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Technical Support</h3>
              <p className="text-muted-foreground mb-6">
                We have established a dedicated technical support cell operating from Monday to Saturday.
              </p>
              <div className="flex items-center justify-center gap-2 font-bold text-lg">
                <span className="text-primary">1:1</span> Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to start your journey?</h2>
               <p className="text-primary-foreground/80 text-lg mb-8">
                 Join thousands of students who are transforming their careers with Lumina Online. Enroll today and get access to world-class education.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/auth/signup">
                   <Button size="lg" variant="secondary" className="h-12 px-8 text-base w-full sm:w-auto text-primary font-bold">
                     Apply Now
                   </Button>
                 </Link>
                 <Link href="/contact">
                   <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                     Contact Support
                   </Button>
                 </Link>
               </div>
             </div>
             <div className="hidden md:block relative">
               <img src={studentsImage} alt="Students" className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" />
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-heading font-bold text-2xl text-white">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">L</div>
                Lumina
              </div>
              <p className="text-slate-400">
                A premier online learning platform dedicated to providing accessible, high-quality education to learners worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Admission Process</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Fee Structure</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/auth/login" className="hover:text-primary transition-colors">Student Portal</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">E-Learning Tutorials</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Question Papers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Results</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>Lumina University, Regional Center, Tech Park, Bangalore - 560001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 text-primary shrink-0" />
                  <span>+91 94802 23900</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 text-primary shrink-0" />
                  <span>support@lumina.edu</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 Lumina LMS. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
