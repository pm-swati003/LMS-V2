import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Link } from "wouter";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Banner */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        {/* Abstract Background Pattern (Simulating the design lines) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L50 0 L100 100" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <path d="M-20 120 L30 0 L80 120" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <path d="M20 120 L70 0 L120 120" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>|</span>
            <span className="text-white font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Get in Touch Card */}
            <Card className="bg-white shadow-sm border-border/50 h-full flex flex-col">
              <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-heading font-bold">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
                      <MapPin className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Center For Online Education, VTU Regional Center, Ring Road, Hanchya Sathagally Layout, Mysuru, Karnataka 570019
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <a href="mailto:onlineprograms@vtu.ac.in" className="text-sm font-medium hover:text-primary transition-colors">
                        onlineprograms@vtu.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0 text-green-600 dark:text-green-400">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <a href="tel:9480223900" className="text-sm font-medium hover:text-primary transition-colors">
                        9480223900
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Working hours - 10.00 A.M. to 1.30 P.M. - 2.30 P.M. to 5.30 P.M.<br/>
                      1.30 P.M. to 2.30 P.M. ( Lunch Break ).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Send Message Form */}
            <Card className="bg-white shadow-sm border-border/50 h-full flex flex-col">
              <CardContent className="p-6 sm:p-8 md:p-10 flex-1">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name*</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email*</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue">Select an Issue</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="academic">Academic Query</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      className="min-h-[120px] resize-none" 
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button type="submit" className="px-8 bg-primary hover:bg-primary/90">
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-muted relative">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.113636540706!2d76.6896173759364!3d12.308298987948332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71c503525555%3A0xc3c9c9c9c9c9c9c9!2sVisvesvaraya%20Technological%20University%2C%20Regional%20Centre%20Mysuru!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           title="VTU Regional Center Map"
           className="grayscale hover:grayscale-0 transition-all duration-500"
         />
      </section>
    </div>
  );
}
