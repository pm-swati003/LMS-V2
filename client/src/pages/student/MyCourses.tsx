import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, MoreVertical, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

const MY_COURSES = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Drasner",
    progress: 12,
    total: 24,
    lastAccessed: "2 days ago",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Digital Marketing Strategy",
    instructor: "Seth Godin",
    progress: 18,
    total: 18,
    lastAccessed: "1 week ago",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completed: true
  }
];

export default function MyCourses() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl">My Learning</h1>
          <p className="text-muted-foreground mt-1">Track your progress and continue learning</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {MY_COURSES.map((course) => (
          <Card key={course.id} className="border-border/50 card-hover">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 aspect-video md:aspect-auto relative shrink-0">
                   <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg md:rounded-l-lg md:rounded-tr-none"
                  />
                  <div className="absolute inset-0 bg-background/20 md:hidden" />

                </div>
                
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl">{course.title}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="size-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">Instructor: {course.instructor}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-end justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {Math.round((course.progress / course.total) * 100)}% Complete
                      </span>
                      <span className="text-muted-foreground">
                        {course.progress}/{course.total} Lessons
                      </span>
                    </div>
                    <Progress value={(course.progress / course.total) * 100} className="h-2" />
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">Last accessed {course.lastAccessed}</span>
                      <Button asChild>
  <Link href={`/student/course/${course.id}`}>
    {course.completed ? "Review Course" : "Continue Learning"}
  </Link>
</Button>

                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
