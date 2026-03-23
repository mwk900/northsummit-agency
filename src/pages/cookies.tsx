import Link from "next/link";
import SEOHead from "@/components/SEOHead";

export default function Cookies() {
  return (
    <>
      <SEOHead title="Cookie Policy" description="How NorthSummit uses cookies." path="/cookies" />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Cookie policy</h1>
          <p className="text-sm text-text-secondary mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">What cookies we use</h2>
              <p>This website uses one cookie to remember your preferred theme (light or dark mode). That&apos;s it.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">What we don&apos;t use</h2>
              <p>We do not use analytics cookies, advertising cookies, or any third-party tracking scripts. No data about your browsing behaviour is collected or shared with anyone.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Managing cookies</h2>
              <p>You can clear cookies through your browser settings at any time. Clearing the theme cookie will reset your display to the default theme.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border-color text-center">
            <p className="text-text-secondary mb-4">Looking for our services?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#pricing" className="inline-block px-6 py-2.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                View pricing
              </Link>
              <Link href="/contact" className="inline-block px-6 py-2.5 rounded-lg border border-border-color text-sm font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors">
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
