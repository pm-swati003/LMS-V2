import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Search, Filter, Star, Clock, BookOpen } from "lucide-react";
import { Link } from "wouter";

const CATEGORIES = ["All", "Design", "Development", "Business", "Marketing", "Data Science"];

const COURSES = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Drasner",
    rating: 4.9,
    students: 1240,
    duration: "6h 30m",
    lessons: 24,
    price: "$49",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=60",
    category: "Development",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Gary Simon",
    rating: 4.8,
    students: 850,
    duration: "12h 15m",
    lessons: 48,
    price: "$89",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=800&q=60",
    category: "Design",
    tag: "New",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    instructor: "Andrew Ng",
    rating: 4.7,
    students: 2100,
    duration: "24h 00m",
    lessons: 96,
    price: "$129",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=60",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "Seth Godin",
    rating: 4.6,
    students: 340,
    duration: "4h 45m",
    lessons: 18,
    price: "$39",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=60",
    category: "Marketing",
  },
];

export default function Courses() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-3">
          <SidebarTrigger />

          <div>
            <h1 className="text-3xl font-heading font-bold">Browse Courses</h1>
            <p className="text-muted-foreground mt-1">
              Discover new skills and advance your career
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, skills, or instructors"
              className="pl-9 bg-background"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat, i) => (
          <Button
            key={cat}
            size="sm"
            variant={i === 0 ? "default" : "outline"}
            className="rounded-full whitespace-nowrap"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {COURSES.map((course) => (
          <Link href={`/student/course/${course.id}`} key={course.id} className="group">
            <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/20 transition-all">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {course.tag && (
                  <Badge className="absolute top-3 left-3 bg-white/90 text-black">
                    {course.tag}
                  </Badge>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.students})
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary">
                  {course.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  By {course.instructor}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    {course.lessons} lessons
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex items-center justify-between">
                <span className="font-bold text-lg">{course.price}</span>
                <Button size="sm" variant="secondary">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
