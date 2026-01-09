import { Link } from "wouter";

export default function PrivacyPolicyPage() {
  return (
    <div data-testid="page-privacy-policy">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="heading-privacy-policy">
            Privacy Policy
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-privacy-policy">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl prose-headings:scroll-mt-20">
          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-information-collect">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect the following types of information to provide and improve our services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Name and contact information</li>
              <li>Academic records and progress</li>
              <li>Payment information (processed securely)</li>
              <li>Communications and feedback</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-how-we-use">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your information helps us deliver a better learning experience:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Managing accounts and enrollments</li>
              <li>Processing certifications and results</li>
              <li>Sending academic updates and announcements</li>
              <li>Improving platform user experience</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-data-security">
              3. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-third-party">
              4. Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related tasks, or assist us in analyzing how our platform is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
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
