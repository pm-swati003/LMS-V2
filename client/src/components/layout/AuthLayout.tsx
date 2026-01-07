import { Link } from "wouter";
import generatedImage from '@assets/generated_images/abstract_blue_and_white_geometric_education_background.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel - Form */}
      <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:flex-none lg:w-1/2 xl:w-[480px]">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2 font-heading font-bold text-2xl text-primary">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">V</div>
            VTU online
          </div>
          {children}
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="relative hidden flex-1 lg:block bg-muted">
        <img
          src={generatedImage}
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
