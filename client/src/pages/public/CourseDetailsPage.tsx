import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "wouter";
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Globe,
  Star,
  Share2,
  Heart,
  PlayCircle,
  FileText,
  Award,
  Download,
  BarChart,
  Layout,
  MessageCircle
} from "lucide-react";

// Mock Data matching the design
const COURSE_DETAILS = {
  id: "1",
  title: "Strategies for Sustainable Design",
  duration: "12 weeks",
  instructor: "@VTU COE",
  rating: 0.0,
  reviews: 0,
  students: 47,
  level: "Intermediate",
  language: "English",
  price: "Free",
  videoHours: "26 h 7 m 13 s",
  quizzes: 2,
  assignments: 0,
  resources: 0,
  certificate: true,
  lifetimeAccess: true,
  whatYouWillLearn: [
    "Fundamentals of renewable energy sources (solar, wind, hydro).",
    "Grid integration of renewable energy.",
    "IoT applications in energy monitoring.",
    "Hands-on projects on energy optimization.",
    "Smart grid technologies and energy management.",
    "Power distribution and demand-side management.",
    "Case studies on real-world implementations."
  ],
  description: "This course explores how renewable energy can be effectively integrated into smart grids using modern monitoring and optimization technologies. It covers grid infrastructure, energy storage, demand response, and IoT applications in power distribution. Students will learn practical strategies to design and implement energy-efficient systems through hands-on projects and case studies."
};

export default function CourseDetailsPage() {
  const { courseId } = useParams();
  // In a real app, use courseId to fetch data.
  const course = COURSE_DETAILS; 

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden">
         {/* Background Image / Gradient */}
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
              "{course.title}"
            </h1>
            
            <div className="space-y-2 mb-8 text-slate-300">
              <p>Duration: {course.duration}</p>
              <p>{course.instructor}</p>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`size-4 ${i <= course.rating ? 'fill-current' : 'text-slate-600'}`} />
                  ))}
                </div>
                <span className="text-sm">({course.reviews})</span>
                <span className="text-sm">{course.students} Students</span>
              </div>
            </div>

            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-12 text-base font-medium">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent p-0 mb-8 h-auto rounded-none overflow-x-auto">
                {["Overview", "Curriculum", "Discussion", "Review", "Instructor"].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab.toLowerCase()}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 data-[state=active]:shadow-none px-6 py-3 bg-transparent text-gray-500 font-medium whitespace-nowrap"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">What you will learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {course.whatYouWillLearn.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 rounded-full p-1">
                          <CheckCircle2 className="size-4 text-green-600 shrink-0" />
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none text-gray-600 leading-relaxed text-sm">
                  <p>{course.description}</p>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="animate-in fade-in duration-300">
                <div className="p-8 border border-gray-100 rounded-lg text-center text-gray-500">
                  Curriculum content placeholder
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="animate-in fade-in duration-300">
                <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="size-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                        <Users className="size-6 fill-current" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="font-bold text-gray-900 uppercase">CHANDAN KUMAR L</div>
                      <div className="bg-gray-50/80 rounded-lg p-4 text-gray-700 text-sm">
                        Please share notes and slides of each module
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-gray-500">1 year ago</span>
                        <div className="flex items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                          <MessageCircle className="size-4" />
                          <span className="text-xs font-medium">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="review" className="animate-in fade-in duration-300">
                <div className="border border-gray-100 rounded-lg p-8 bg-white shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="text-center md:text-left space-y-2 shrink-0">
                    <div className="text-5xl font-bold text-gray-900">0.0</div>
                    <div className="flex text-yellow-400 justify-center md:justify-start gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="size-4 text-gray-300 fill-gray-100" />
                      ))}
                    </div>
                    <div className="text-gray-500 font-medium text-sm text-center">0 Reviews</div>
                  </div>

                  <div className="flex-1 w-full space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-4">
                        <span className="font-medium text-gray-700 w-3 text-sm">{rating}</span>
                        <div className="flex text-yellow-400 gap-1">
                           {[1, 2, 3, 4, 5].map((s) => (
                             <Star key={s} className="size-4 text-gray-300 fill-gray-100" />
                           ))}
                        </div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gray-300 w-0" />
                        </div>
                        <span className="text-sm text-gray-400 w-4 text-right">0</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="animate-in fade-in duration-300">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold font-heading">Meet Your Instructor</h2>
                  
                  <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                      
                      {/* Profile Section */}
                      <div className="space-y-4 shrink-0">
                        <h3 className="font-bold text-lg text-gray-900">Edutainer India</h3>
                        <div className="flex items-center gap-4">
                          <div className="size-20 rounded-full bg-blue-500 flex items-center justify-center text-white p-4">
                            {/* Owl-like simple icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8-4.41 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 4c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
                            </svg>
                          </div>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wide">Instructor</span>
                        </div>
                      </div>

                      {/* Stats Card */}
                      <div className="flex-1 w-full md:w-auto md:ml-auto">
                        <div className="border border-gray-100 rounded-lg p-6 grid grid-cols-2 gap-x-12 gap-y-6 bg-white">
                          <div className="flex items-center gap-3">
                            <Star className="size-5 text-gray-600" />
                            <div>
                              <div className="font-bold text-gray-900">4.5 Rating</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <Award className="size-5 text-gray-600" />
                            <div>
                              <div className="font-bold text-gray-900">60</div>
                              <div className="text-xs text-gray-500">Courses</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <Users className="size-5 text-gray-600" />
                            <div>
                              <div className="font-bold text-gray-900">2525</div>
                              <div className="text-xs text-gray-500">Students</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-base">About Instructor</h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Why Edutainer is Best? Edutainer is one of the biggest online education portals which makes you industry ready by building skills for technological and professional challenges. It focuses on industrial expectation and result oriented approach by providing end-to-end practical knowledge program by providing the most affordable courses. Edutainer assures courses which provide the most demanded and highest paying jobs in the industry. Undoubtedly, Edutainer is a pioneer in the field of technological study that provides the students with guidance under industrial professionals making them well-informed with the real operational procedures. After the successful completion of the enrolled course, the students get certified from Edutainer with references of leading organizations to get placed in them. So today, "Make a pledge to color your career path with technical courses from Edutainer". Our Mission At Edutainer India, our mission is to empower individuals with the knowledge and skills they need to achieve their personal and professional goals. We believe that education is a powerful tool that can transform lives and create positive change in society. We are committed to making quality education accessible to all, regardless of their background or location, by offering a wide range of online courses in various disciplines.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 sticky top-24">
              <CardContent className="p-0">
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gray-100 flex items-center justify-center border-b border-gray-100">
                  <div className="size-16 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                    <div className="size-12 rounded-full bg-indigo-600 flex items-center justify-center">
                       <PlayCircle className="size-6 text-white fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-heading">{course.price}</span>
                  </div>

                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2"><Clock className="size-4" /> Course Duration</div>
                      <span className="font-medium text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2"><BarChart className="size-4" /> Course Level</div>
                      <span className="font-medium text-gray-900">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2"><Users className="size-4" /> Student Enrolled</div>
                      <span className="font-medium text-gray-900">{course.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2"><Globe className="size-4" /> Language</div>
                      <span className="font-medium text-gray-900">{course.language}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 h-11 text-base">
                    Enroll the Course <Link href="/auth/signup" className="absolute inset-0" /> <Share2 className="ml-2 size-4 rotate-180" />
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-10 text-gray-600">
                      <Heart className="mr-2 size-4" /> Add to Wishlist
                    </Button>
                    <Button variant="outline" className="h-10 text-gray-600">
                      <Share2 className="mr-2 size-4" /> Share Course
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">This Course Includes</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-3">
                        <PlayCircle className="size-4" /> {course.videoHours} Video Lectures
                      </li>
                      <li className="flex items-center gap-3">
                        <FileText className="size-4" /> {course.quizzes} Quizzes
                      </li>
                      <li className="flex items-center gap-3">
                        <Layout className="size-4" /> {course.assignments} Assignments
                      </li>
                      <li className="flex items-center gap-3">
                        <Download className="size-4" /> {course.resources} Downloadable Resources
                      </li>
                      <li className="flex items-center gap-3">
                        <Clock className="size-4" /> Full Lifetime Access
                      </li>
                      <li className="flex items-center gap-3">
                        <Award className="size-4" /> Certificate of Completion
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
