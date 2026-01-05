import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp, 
  MoreHorizontal,
  PlayCircle
} from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Hello, Student!</h1>
          <p className="text-muted-foreground mt-1">Here's your learning progress for this week.</p>
        </div>
        <Button size="lg" className="shadow-lg shadow-primary/20">Resume Learning</Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Courses in Progress", value: "4", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Completed Lessons", value: "12", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Learning Hours", value: "32h", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Average Score", value: "85%", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
        ].map((kpi, i) => (
          <Card key={i} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${kpi.bg} ${kpi.color}`}>
                <kpi.icon className="size-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{kpi.label}</p>
                <h3 className="text-2xl font-bold font-heading">{kpi.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning & Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning - Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading font-semibold">Continue Learning</h2>
            <Button variant="link" className="text-primary">View All</Button>
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <Card key={i} className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="sm:w-48 h-32 sm:h-auto bg-muted relative shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D`} 
                      alt="Course" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="size-10 text-white fill-white/20" />
                    </div>
                  </div>
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-2 inline-block">UI/UX Design</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 text-muted-foreground">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </div>
                      <h3 className="font-heading font-semibold text-lg line-clamp-1">Advanced Prototyping with Figma</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">Master components, auto-layout, and smart animate.</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Lesson 5 of 12</span>
                        <span>42% Complete</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity - Side Column */}
        <div className="space-y-6">
          <h2 className="text-xl font-heading font-semibold">Recent Activity</h2>
          <Card className="border-border/50 h-full">
            <CardContent className="p-0">
              <div className="divide-y divide-border/40">
                {[
                  { text: "Completed 'Intro to React'", time: "2h ago", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10" },
                  { text: "Started 'Advanced CSS'", time: "5h ago", icon: PlayCircle, color: "text-blue-500", bg: "bg-blue-500/10" },
                  { text: "Scored 90% in Quiz 3", time: "1d ago", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                  { text: "Posted in Community", time: "2d ago", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors">
                    <div className={`mt-0.5 p-2 rounded-full shrink-0 ${item.bg} ${item.color}`}>
                      <item.icon className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
