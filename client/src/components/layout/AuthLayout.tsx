import { Link } from "wouter";
import generatedImage from '@assets/generated_images/abstract_blue_and_white_geometric_education_background.png';
import Logo from "@/components/brand/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel - Form */}
<div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:flex-none lg:w-1/2 xl:w-[480px]">
  
  {/* Logo + Org Info (NOW PART OF FORM FLOW) */}
  <div className="mx-auto w-full max-w-md lg:w-96 mb-10">
    <Link href="/">
      <a className="flex items-center gap-3">
        <Logo size={56} />

        {/* Text Block */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm md:text-base font-semibold text-foreground">
            Center for Online Education
          </span>
          <span className="text-[11px] text-muted-foreground">
            Govt. of Karnataka
          </span>
        </div>
      </a>
    </Link>
  </div>

  {/* Form Content */}
  <div className="mx-auto w-full max-w-md lg:w-96">
    {children}
  </div>
</div>

        

      {/* Right Panel - Image */}
      <div className="relative hidden flex-1 lg:block bg-muted">
        <img
          src="/public/sign and signup.jpg"
          alt="Learning Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-16">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-heading font-bold mb-4">Master new skills with ease.</h2>
            <p className="text-lg text-white/90">Join thousands of students learning on the most advanced LMS platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
