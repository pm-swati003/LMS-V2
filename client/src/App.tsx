import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Dashboard from "@/pages/student/Dashboard";
import Courses from "@/pages/student/Courses";
import CourseDetails from "@/pages/student/CourseDetails";
import MyCourses from "@/pages/student/MyCourses";
import LessonView from "@/pages/student/LessonView";
import Certificates from "@/pages/student/Certificates";
import Settings from "@/pages/student/Settings";
import Quiz from "@/pages/student/Quiz";
import StudentLayout from "@/components/layout/StudentLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import LandingPage from "@/pages/public/LandingPage";
import ContactPage from "@/pages/public/ContactPage";
import AboutPage from "@/pages/public/AboutPage";
import CoursesPage from "@/pages/public/CoursesPage";
import ProgramsPage from "@/pages/public/ProgramsPage";
import CourseDetailsPage from "@/pages/public/CourseDetailsPage";
import CourseProgramDetailsPage from "@/pages/public/CourseProgramDetailsPage";
import PublicLayout from "@/components/layout/PublicLayout";
import ScrollToTop from "@/components/layout/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Public Landing Page */}
      <Route path="/">
        <PublicLayout>
          <LandingPage />
        </PublicLayout>
      </Route>

      {/* Public Contact Page */}
      <Route path="/contact">
        <PublicLayout>
          <ContactPage />
        </PublicLayout>
      </Route>

      {/* Public About Page */}
      <Route path="/about">
        <PublicLayout>
          <AboutPage />
        </PublicLayout>
      </Route>

      {/* Public Courses Page - MOOC List */}
      <Route path="/courses">
        <PublicLayout>
          <CoursesPage />
        </PublicLayout>
      </Route>

      {/* Public Programs Page - All Programs List */}
      <Route path="/programs">
        <PublicLayout>
          <ProgramsPage />
        </PublicLayout>
      </Route>

      {/* Program Categories Routes */}
      <Route path="/programs/honours">
        <PublicLayout>
          <ProgramsPage />
        </PublicLayout>
      </Route>

      <Route path="/programs/minors">
        <PublicLayout>
          <ProgramsPage />
        </PublicLayout>
      </Route>

      <Route path="/programs/skill-enhancement">
        <PublicLayout>
          <ProgramsPage />
        </PublicLayout>
      </Route>

      {/* MOOC Course Details Page */}
      <Route path="/courses/:courseId">
        <PublicLayout>
          <CourseDetailsPage />
        </PublicLayout>
      </Route>
      
      {/* Degree Program Details Page */}
      <Route path="/programs/:programId">
        <PublicLayout>
          <CourseProgramDetailsPage />
        </PublicLayout>
      </Route>

      {/* Auth Routes */}
      <Route path="/auth/:path*">
        <AuthLayout>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </AuthLayout>
      </Route>

      {/* Student Routes */}
      <Route path="/student/:path*">
        <StudentLayout>
          <Switch>
            <Route path="/student/dashboard" component={Dashboard} />
            <Route path="/student/courses" component={Courses} />
            <Route path="/student/my-courses" component={MyCourses} />
            <Route path="/student/course/:id" component={CourseDetails} />
            <Route path="/student/learn/:courseId/:lessonId" component={LessonView} />
            <Route path="/student/certificates" component={Certificates} />
            <Route path="/student/settings" component={Settings} />
            <Route path="/student/quiz/:id" component={Quiz} />
          </Switch>
        </StudentLayout>
      </Route>

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
