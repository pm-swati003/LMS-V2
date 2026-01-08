import { Link } from "wouter";

export default function RefundPolicyPage() {
  return (
    <div data-testid="page-refund-policy">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="heading-refund-policy">
            Refund Policy
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-refund-policy">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Refund Policy</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-eligibility">
              1. Eligibility for Refund
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may be eligible for a refund under the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Course cancellation by the university.</li>
              <li>Duplicate payment for the same course.</li>
              <li>Technical issues preventing access to course content (if reported within 7 days of enrollment).</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-timeline">
              2. Refund Timeline
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Refund requests must be submitted within 7 days of the initial purchase or enrollment date.</li>
              <li>Requests made after this period are not eligible for a refund.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-non-refundable">
              3. Non-Refundable Items
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The following items are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Registration fees and administrative charges.</li>
              <li>Courses where more than 20% of the content has been accessed.</li>
              <li>Certificates that have already been issued.</li>
              <li>Promotional or discounted course bundles.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-processing">
              4. Processing Refunds
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Approved refunds are processed within 15–30 working days.</li>
              <li>Refunds are credited back to the original payment method.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-contact">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Refund requests should be sent to{" "}
              <a
                href="mailto:billing@vtuonline.com"
                className="text-primary hover:underline"
                data-testid="link-email"
              >
                billing@vtuonline.com
              </a>{" "}
              with transaction details and reason for the refund request.
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
