import { Link } from "wouter";
import Logo from "@/components/brand/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">

      {/* LEFT PANEL */}
      <div className="flex flex-col justify-center px-8 py-12 sm:px-12
                      w-full lg:w-[520px] xl:w-[600px]">

        {/* Logo Block */}
        <div className="text-center mb-4 mt-2">
          <Link href="/">
            <a className="flex flex-col items-center gap-4">
              <Logo size={96} />

              <div className="flex flex-col items-center leading-tight">
                <span className="text-sm md:text-base font-semibold text-foreground">
                  Center for Online Education
                </span>
                <span className="text-xs md:text-sm font-medium text-muted-foreground">
                  VTU – Belagavi
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Govt. of Karnataka
                </span>
              </div>
            </a>
          </Link>
        </div>

        {/* Form Content */}
        <div className="mx-auto w-full max-w-md text-left mt-2">
          {children}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative hidden flex-1 lg:block bg-muted">
        <img
          src="/public/sign and signup.jpg"
          alt="Learning Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-16">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Master new skills with ease.
            </h2>
            <p className="text-lg text-white/90">
              Join thousands of students learning on the most advanced LMS platform.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
