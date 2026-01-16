import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Share2, Award, Calendar } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const CERTIFICATES = [
  {
    id: 1,
    title: "Advanced React Patterns",
    date: "Oct 15, 2025",
    instructor: "Sarah Drasner",
    grade: "98%",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" // Abstract certificate bg
  },
  {
    id: 2,
    title: "UI Design Fundamentals",
    date: "Sep 20, 2025",
    instructor: "Gary Simon",
    grade: "95%",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default function Certificates() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
  {/* LEFT SIDE */}
  <div className="flex items-start gap-3">
    <SidebarTrigger />
      <div>
        <h1 className="text-3xl font-heading font-bold">My Certificates</h1>
        <p className="text-muted-foreground mt-1">View and download your earned credentials</p>
      </div>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <Dialog key={cert.id}>
            <Card className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all cursor-pointer">
              <DialogTrigger asChild>
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                   <img src={cert.image} alt="Certificate Background" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[2px] group-hover:blur-0 transition-all duration-500" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                     <div className="size-16 rounded-full bg-background/80 backdrop-blur flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                       <Award className="size-8 text-primary" />
                     </div>
                     <h3 className="font-heading font-bold text-lg bg-background/80 backdrop-blur px-3 py-1 rounded-md">{cert.title}</h3>
                     <span className="text-sm font-medium mt-2 bg-background/80 backdrop-blur px-2 py-0.5 rounded-md">Issued: {cert.date}</span>
                   </div>
                </div>
              </DialogTrigger>
              <CardFooter className="p-4 bg-card border-t border-border/50 flex justify-between">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Share2 className="mr-2 size-4" /> Share
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 size-4" /> PDF
                </Button>
              </CardFooter>
            </Card>

            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background">
              <div className="relative aspect-[1.414/1] bg-white text-black p-12 flex flex-col items-center justify-center text-center border-8 border-double border-slate-200 m-4">
                 <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary m-8"></div>
                 <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary m-8"></div>
                 
                 <Award className="size-20 text-primary mb-8" />
                 
                 <h2 className="text-5xl font-serif font-bold text-slate-900 mb-4 tracking-wide">Certificate of Completion</h2>
                 <p className="text-slate-500 text-lg mb-8 uppercase tracking-widest">This is to certify that</p>
                 
                 <div className="text-4xl font-handwriting font-bold text-primary mb-8 border-b-2 border-slate-200 pb-2 px-12">
                   Student Name
                 </div>
                 
                 <p className="text-slate-600 text-lg max-w-lg mb-12 leading-relaxed">
                   Has successfully completed the course <strong>{cert.title}</strong> demonstrating proficiency in the subject matter with a grade of <strong>{cert.grade}</strong>.
                 </p>
                 
                 <div className="flex justify-between w-full max-w-2xl mt-auto pt-8 border-t border-slate-200">
                   <div className="text-left">
                     <p className="font-bold text-slate-900">{cert.date}</p>
                     <p className="text-slate-500 text-sm">Date Issued</p>
                   </div>
                   <div className="text-right">
                     <p className="font-bold text-slate-900">{cert.instructor}</p>
                     <p className="text-slate-500 text-sm">Instructor</p>
                   </div>
                 </div>
              </div>
              <div className="p-4 bg-muted flex justify-end gap-2">
                 <Button variant="outline"><Share2 className="mr-2 size-4" /> Share</Button>
                 <Button><Download className="mr-2 size-4" /> Download PDF</Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
