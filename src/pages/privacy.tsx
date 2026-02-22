import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/site";

export default function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="How NorthSummit uses your information." path="/privacy" />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Privacy policy</h1>
          <p className="text-sm text-text-secondary mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Who we are</h2>
              <p>NorthSummit is a web design service operated by Mateusz Wozniak. You can contact us at <a href={`mailto:${siteConfig.agency.email}`} className="text-accent hover:underline">{siteConfig.agency.email}</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">What we collect</h2>
              <p>When you submit a form on this website, we collect the information you provide — typically your name, email address, and message. If you choose to include a phone number, website URL, trade, or service area, we collect those too.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Why we collect it</h2>
              <p>We use your information only to respond to your enquiry and provide the service you request. We do not use it for marketing, and we do not share it with anyone else.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">How we store it</h2>
              <p>Form submissions are sent to us via email (using Resend). We do not store your data in a database. Emails are kept in our inbox for the purpose of responding to and managing your enquiry.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Cookies</h2>
              <p>This website uses a single cookie to remember your light/dark theme preference. We do not use analytics cookies or tracking scripts. No third-party cookies are set.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">Your rights</h2>
              <p>Under UK data protection law, you have the right to access, correct, or delete any personal data we hold about you. To make a request, email us at <a href={`mailto:${siteConfig.agency.email}`} className="text-accent hover:underline">{siteConfig.agency.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
