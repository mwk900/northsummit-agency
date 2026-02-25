import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/site";

export default function Terms() {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of service for NorthSummit web design." path="/terms" />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Terms of service</h1>
          <p className="text-sm text-text-secondary mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">The short version</h2>
              <p>We build websites for you. You pay the agreed price. You own everything we build. We don&apos;t disappear after launch.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">What we provide</h2>
              <p>NorthSummit provides website design and development services as described in our pricing packages. The exact scope of work is agreed before any project begins.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Payment</h2>
              <p>All prices are in GBP (£).</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Ownership</h2>
              <p>Once a project is complete and paid for, all code, design, and content created by NorthSummit belongs to you. Domain names and hosting accounts are registered in your name from the start.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Revisions</h2>
              <p>Each package includes a set number of revision rounds (specified in the package description). Additional revisions beyond this are available at an agreed rate.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Contact</h2>
              <p>If you have questions about these terms, email us at <a href={`mailto:${siteConfig.agency.email}`} className="text-accent hover:underline">{siteConfig.agency.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
