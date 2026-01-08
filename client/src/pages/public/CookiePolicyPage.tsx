import { Link } from "wouter";

export default function CookiePolicyPage() {
  return (
    <div data-testid="page-cookie-policy">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="heading-cookie-policy">
            Cookie Policy
          </h1>
          <nav className="text-slate-300 text-sm md:text-base" data-testid="breadcrumb-cookie-policy">
            <Link href="/">
              <a className="hover:text-white transition-colors">Home</a>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Cookie Policy</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-what-are-cookies">
              1. What Are Cookies?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-how-we-use-cookies">
              2. How We Use Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VTU Online uses cookies to improve your browsing experience by:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-2">
              <li>Keeping you signed in to your account.</li>
              <li>Understanding how you use our website.</li>
              <li>Remembering your preferences and settings.</li>
              <li>Measuring the effectiveness of our marketing campaigns.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-types-of-cookies">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These are necessary for the website to function properly. They include cookies that enable you to log into secure areas of our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Analytical / Performance Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-managing-preferences">
              4. Managing Your Cookie Preferences
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-testid="link-aboutcookies"
              >
                https://www.aboutcookies.org
              </a>
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" data-testid="heading-updates-policy">
              5. Updates to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the bottom of this policy.
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
