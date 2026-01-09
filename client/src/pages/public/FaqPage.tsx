import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Award, FileText, Monitor } from "lucide-react";

const faqData = [
  {
    id: "q1",
    question: "What is a minor degree program?",
    answer: "A minor degree program is an additional academic credential that students can earn alongside their major degree. It typically consists of a focused set of courses in a specific discipline, allowing students to gain specialized knowledge in a secondary area of interest. At VTU Online, minor degree programs require completion of 12-18 credits in the chosen field and are designed to complement your primary course of study."
  },
  {
    id: "q2",
    question: "How many additional courses do the students have to complete to get a minor degree award?",
    answer: "Students typically need to complete 4-6 additional courses (12-18 credits) to earn a minor degree award. The exact number varies depending on the specific minor program chosen. These courses are structured to provide comprehensive knowledge in the minor discipline while being manageable alongside your major coursework."
  },
  {
    id: "q3",
    question: "What is the mode of study of these courses?",
    answer: "All courses are delivered through our comprehensive online learning platform. Students can access video lectures, study materials, assignments, and assessments at their convenience. The mode includes live interactive sessions, recorded lectures, discussion forums, and virtual labs where applicable. This flexible approach allows students to learn at their own pace while maintaining academic rigor."
  },
  {
    id: "q4",
    question: "The provision of offline study of these courses made?",
    answer: "Yes, provisions for offline study are available. Students can download course materials, lecture notes, and video content for offline access through our mobile application. Additionally, select programs offer optional in-person workshops and practical sessions at designated VTU centers. However, assessments and examinations are conducted online as per the university guidelines."
  },
  {
    id: "q5",
    question: "One when can start the study of these minor courses?",
    answer: "Students can enroll in minor degree courses from their third semester onwards, once they have completed the foundational courses of their major program. Enrollment is open during the designated registration periods at the beginning of each semester. Early registration is recommended as seats in popular minor programs may be limited."
  }
];

const programCategories = [
  { icon: GraduationCap, label: "Honour Degree" },
  { icon: Award, label: "Minor Degree" },
  { icon: FileText, label: "Certificate Course" },
  { icon: Monitor, label: "E-Shikshana" },
];

export default function FaqPage() {
  return (
    <div data-testid="page-faq">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="heading-faq">
            FAQ
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-faq">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </section>

      {/* FAQ Intro Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-faq-intro">
            Frequently Ask Questions.
          </h2>
          <p className="text-muted-foreground uppercase tracking-wider text-sm md:text-base">
            CHOOSE FROM 50 ONLINE VIDEO COURSES WITH NEW ADDITIONS
          </p>
        </div>
      </section>

      {/* Program Category Icons Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
            {programCategories.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-4"
                data-testid={`category-${index}`}
              >
                <div className="size-16 sm:size-20 md:size-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="size-8 sm:size-10 md:size-12 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground text-center">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="q1" className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border border-border/60 rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                data-testid={`faq-item-${faq.id}`}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
