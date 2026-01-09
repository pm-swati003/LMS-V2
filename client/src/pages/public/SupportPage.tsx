import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const supportFaqData = [
  {
    id: "s1",
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address and you will receive a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email within a few minutes, please check your spam folder."
  },
  {
    id: "s2",
    question: "How can I access my course materials?",
    answer: "Once enrolled in a course, you can access all course materials through your student dashboard. Navigate to 'My Courses' section, select your course, and you'll find all lectures, assignments, and resources organized by modules. Materials can be viewed online or downloaded for offline access through our mobile app."
  },
  {
    id: "s3",
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, RuPay), net banking, UPI, and popular digital wallets. For certain programs, we also offer EMI options through select banks. All transactions are secured with industry-standard encryption."
  },
  {
    id: "s4",
    question: "How do I get my course completion certificate?",
    answer: "Upon successful completion of all course requirements including assignments, quizzes, and final examination, your certificate will be automatically generated. You can download it from the 'Certificates' section in your student dashboard. Physical copies can be requested for an additional fee."
  },
  {
    id: "s5",
    question: "Can I change my enrolled course?",
    answer: "Course changes are permitted within the first 7 days of enrollment, subject to seat availability in the desired course. Please contact our support team with your request. Note that course fees may vary, and any difference will be adjusted accordingly."
  }
];

export default function SupportPage() {
  return (
    <div data-testid="page-support">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="heading-support">
            Support Ticket
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-support">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Support Ticket</span>
          </nav>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-support-section">
              Support
            </h2>
            <p className="text-muted-foreground uppercase tracking-wider text-sm md:text-base">
              CHOOSE FROM 50 ONLINE VIDEO COURSES WITH NEW ADDITIONS
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="s1" className="space-y-4">
              {supportFaqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border-0 rounded-xl overflow-hidden shadow-sm"
                  data-testid={`support-faq-${faq.id}`}
                >
                  <AccordionTrigger 
                    className="text-left text-base md:text-lg font-medium px-6 py-5 hover:no-underline w-full
                      bg-card border border-border/60 rounded-xl
                      data-[state=open]:bg-primary data-[state=open]:text-primary-foreground 
                      data-[state=open]:border-primary data-[state=open]:rounded-b-none
                      transition-all duration-200 ease-in-out
                      [&[data-state=open]>svg]:text-primary-foreground"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-5 pt-4 border-x border-b border-border/60 rounded-b-xl bg-transparent">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="cta-heading">
            Is That Helpful?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-8" data-testid="cta-subheading">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-6 sm:px-8 whitespace-nowrap" data-testid="button-create-ticket">
              Create New Ticket
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 sm:px-8 whitespace-nowrap" data-testid="button-view-ticket">
              View Ticket
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
