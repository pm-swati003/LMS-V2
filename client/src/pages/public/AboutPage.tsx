import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen pb-20">
      
      {/* 1. Hero / Banner Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
         {/* Abstract Background */}
         <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 opacity-90"></div>
          <svg className="absolute w-full h-full text-white/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M-10 80 Q 50 20 110 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
             <path d="M-10 90 Q 50 30 110 90" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. University Overview Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Visvesvaraya Technological University</h2>
          <p className="text-muted-foreground text-lg">Public university in Belagavi, Karnataka</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              VTU is one of the largest Technological Universities in India with 24 years of Tradition of excellence in Engineering & Technical Education, Research and Innovations. It came into existence in the year 1998 to cater the needs of Indian industries for trained technical manpower with practical experience and sound theoretical knowledge.
            </p>
            <p>
              University has very successfully achieved the tremendous task of bringing various colleges affiliated earlier to different Universities, with different syllabi, different procedures and different traditions under one umbrella.
            </p>
            <p>
              The university is currently having 182 affiliated colleges, 1 constituent college and 25 Autonomous colleges with undergraduate programs in 37 disciplines, PG programs in 96 disciplines and Ph.D & M.Sc(Engg.) research programs with 7 faculty, over 3 lakhs Engineering Students study in the various institutes affiliated to the University.
            </p>
            <p>
              The University has revised the syllabus for UG and PG from the academic year 2014-15, it has four regional centers across the State of Karnataka. University is comprised of a multi-disciplinary and multi-level institution offering wide ranging programmes in engineering, technology and Management. The University is making steady progress in developing and providing best technical environment for education and will continue to serve the nation in coming years.
            </p>
            <p>
              Equipped with the extremely rich resources of an outstanding student body and faculty strong partnerships with business, industry, and government and support from alumni and friends, VTU is designing a future of global preeminence, leadership, and service.
            </p>
          </div>
          
          <div className="bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
             {/* Placeholder Image */}
             <svg className="w-32 h-32 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
               <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
               <circle cx="9" cy="9" r="2"/>
               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
             </svg>
          </div>
        </div>
      </section>

      {/* 3. Regional Centers Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-2">Regional Centers</h2>
            <p className="text-muted-foreground">It has four regional centers across the State of Karnataka in:</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-px bg-slate-300 transform translate-y-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Belagavi", desc: "University is comprised of a multi-disciplinary and multi-level institution offering wide ranging pr..." },
                { name: "Bengaluru", desc: "University is comprised of a multi-disciplinary and multi-level institution offering wide ranging pr..." },
                { name: "Kalaburagi", desc: "University is comprised of a multi-disciplinary and multi-level institution offering wide ranging pr..." },
                { name: "Mysuru", desc: "University is comprised of a multi-disciplinary and multi-level institution offering wide ranging pr..." },
              ].map((center, i) => (
                <div key={i} className="relative pt-8 text-center group">
                  <div className="hidden md:block absolute top-0 left-1/2 w-2 h-8 bg-slate-300 -translate-x-1/2 transform"></div>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{center.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{center.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Centre for Online Education */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">About Centre for Online Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-100 rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">
             {/* Placeholder Image */}
             <svg className="w-32 h-32 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
               <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
               <circle cx="9" cy="9" r="2"/>
               <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
             </svg>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The expansion of higher education is a significant area of attention for creating a knowledge based economy. The Gross Enrollment Ratio (GER) must be doubled from current levels to have a major influence on the same. This need has been extensively researched and raised by numerous policy planners, commissions, and considerate educators. The National Knowledge Commission (NKC) has released a number of educational research institute and reform-related policies that are necessary for India to compete in the knowledge economy and knowledge intensive service industries. The Role of Online Learning System (OL) becomes significant and unique.
            </p>
            <p>
              The Online Learning System (OL) assumes a crucial role in achieving the objectives under this framework. OL has established itself as a powerful tool for educational empowerment of many learners who are denied access to conventional 'face-to-face' education for a variety of reasons. By utilizing cutting-edge technology, OL has the ability to provide education to everyone and everywhere. People who live in areas where it is challenging for teachers to reach them would benefit from this.
            </p>
            <p>
              The VTU-COE established in the year of 2022 with the goal of providing multiple of programmes in management, computer applications. Currently VTU-COE offers 3 UG programmes, 5 PG programmes in Computer Applications, and 5 PG Programmes in Management and also PG Diploma programmes in management and computer science field.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Mission of COE Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Mission of COE</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-border/40 p-8 md:p-10">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">To Enhance Access and Equity in Higher Education</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The CoE focuses on providing online education that is accessible to learners from different geographical locations, socioeconomic backgrounds, and abilities. This can help increase the GER in higher education and promote equity in educational opportunities.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">To Foster Innovation in Online Learning</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The CoE encourages innovation in online pedagogies, technologies, and assessment practices. This can enable the development of high-quality online courses that are engaging, interactive, and relevant to the needs of learners.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">To Offer Flexible and Personalized Learning Experiences</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The CoE focuses on designing online courses that provide flexibility and personalization to learners. This can allow learners to pace their learning, choose courses that align with their interests and career goals, and receive feedback and support from instructors.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">To Promote Employability and Entrepreneurship</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The CoE promotes collaboration with industry partners to develop online courses that promote employability and entrepreneurship. This can help learners acquire relevant skills and knowledge that are in demand in the job market and foster a culture of innovation and entrepreneurship.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Hon'ble Vice Chancellor Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold uppercase tracking-wide">Hon'ble Vice Chancellor Message</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl aspect-[3/4] flex items-center justify-center border border-border shadow-sm p-4">
                 {/* Placeholder Image */}
                 <svg className="w-full h-full text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                   <circle cx="9" cy="9" r="2"/>
                   <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                 </svg>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  The new millennium is witnessing unprecedented challenges and opportunities in higher education. Engineering Education plays a pivotal role in Human Resource Development of any country. In the recent times, the educational sector has gone through a major transformation influenced by the global technological changes viz shifting to Outcome Based Education, enhancement of industry-institute interactions, digital transformation, providing affordable quality education etc.
                </p>
                <p>
                  This is paving a way for students to pursue their higher studies and enhanced employment opportunities. Premier institutions across the globe are receiving an impetus towards imbibing research culture into their curriculum. In tune with the changes, NEP-2020 envisions an India-Centered Education System that contributes directly to transforming our nation sustainably into an equitable and vibrant knowledge society by providing high-quality education to all.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Dr. S Vidyashankar</h3>
                <p className="text-sm text-muted-foreground">Hon'ble Vice Chancellor - Visvesvaraya Technological University, Belagavi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Officers of the University */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold">The Officers of the University</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Hon'ble Shri Thaawarchand Gehlot", role: "The Governor of Karnataka & Chancellor", sub: "VTU" },
            { name: "Dr. M C Sudhakar", role: "Minister for Higher Education, Government of Karnataka and Pro-Chancellor of", sub: "VTU" },
            { name: "Dr. S Vidyashankar", role: "Hon'ble Vice Chancellor", sub: "VTU" },
            { name: "Dr. B E Rangaswamy", role: "Registrar", sub: "VTU" },
            { name: "Dr. T N Sreenivasa", role: "Registrar (Evaluation)", sub: "VTU" },
            { name: "M A Sapna", role: "Finance Officer", sub: "VTU" },
          ].map((officer, i) => (
            <div key={i} className="flex gap-4 p-4 border border-border/50 rounded-xl hover:shadow-md transition-all bg-white">
              <div className="size-20 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                 <svg className="w-8 h-8 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                   <circle cx="9" cy="9" r="2"/>
                   <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                 </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-base">{officer.name}</h3>
                <p className="text-sm text-muted-foreground">{officer.role}</p>
                <p className="text-xs text-muted-foreground uppercase">{officer.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
