import { Link } from "wouter";

export default function TermsAndConditionsPage() {
  return (
    <div data-testid="page-terms-and-conditions">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="heading-terms">
            Terms & Conditions
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-terms">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl prose-headings:scroll-mt-20">
          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-acceptance">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using VTU Online, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-user-accounts">
              2. User Accounts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-enrollment">
              3. Course Enrollment and Conduct
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Enrollment in courses is subject to availability and any specified prerequisites. Users are expected to maintain academic integrity and respect fellow learners and instructors.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-intellectual-property">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on VTU Online, including course materials, videos, and text, is the property of the university or its content providers and is protected by copyright laws.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-liability">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              VTU Online is provided "as is" without any warranties. The university shall not be liable for any direct or indirect damages arising from the use of our services.
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground" data-testid="text-last-updated">
              Last Updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
