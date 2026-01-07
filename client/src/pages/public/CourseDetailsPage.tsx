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
  Layout
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
    "Architecture, Civil and Design"
  ],
  description: "The courses discusses sustainability principles and concepts from across various domains. Elaborates on sustainability definitions, aspects, dynamic nature of it, and its application in everyday life. Further, it discusses global efforts from UNFCCC and other agencies for developing context-based solutions and climate change mitigation efforts. Involves field visits, real-life case studies, and assignments. Includes study on building technologies to improve on efficiency and response to surroundings. Focusses basic scientific principles underlying the environmental performance of the built environment and designing for efficacy on EIA/LCA."
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

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-12 text-base font-medium">
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
              <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent p-0 mb-8 h-auto rounded-none">
                {["Overview", "Curriculum", "Discussion", "Review", "Instructor"].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab.toLowerCase()}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 data-[state=active]:shadow-none px-6 py-3 bg-transparent text-gray-500 font-medium"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">What you will learn</h2>
                  <div className="grid gap-3">
                    {course.whatYouWillLearn.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-green-500 shrink-0" />
                        <span className="text-gray-700 font-medium">"{item}"</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none text-gray-600 leading-relaxed">
                  <p>{course.description}</p>
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <div className="p-8 border border-gray-100 rounded-lg text-center text-gray-500">
                  Curriculum content placeholder
                </div>
              </TabsContent>
              <TabsContent value="discussion">
                <div className="p-8 border border-gray-100 rounded-lg text-center text-gray-500">
                  Discussion forum placeholder
                </div>
              </TabsContent>
              <TabsContent value="review">
                <div className="p-8 border border-gray-100 rounded-lg text-center text-gray-500">
                  Reviews placeholder
                </div>
              </TabsContent>
              <TabsContent value="instructor">
                <div className="p-8 border border-gray-100 rounded-lg text-center text-gray-500">
                  Instructor details placeholder
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
