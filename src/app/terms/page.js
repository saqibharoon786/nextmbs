import LegalPage from "@/components/ui/LegalPage";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/data/contact";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the NEXTMBS website and medical billing services inquiries.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms &"
      accent="Conditions"
      updated="September 19, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-[#142957]">1. Using this website</h2>
        <p className="mt-3 text-sm leading-7">
          By using nextmbs.com you agree to these terms. The site is provided to
          describe NEXTMBS medical billing services and to collect business
          inquiries.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">2. No medical or legal advice</h2>
        <p className="mt-3 text-sm leading-7">
          Content on this website is general information about billing and
          revenue cycle services. It is not medical advice, legal advice, or a
          guarantee of reimbursement for any claim.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">3. Inquiries and services</h2>
        <p className="mt-3 text-sm leading-7">
          Submitting the contact form is a request to be contacted. A paid
          billing engagement starts only after a written agreement. Until then,
          NEXTMBS is not your billing vendor of record.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">4. Acceptable use</h2>
        <p className="mt-3 text-sm leading-7">
          Do not misuse the site, attempt to disrupt it, or send patient
          protected health information through the public form.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">5. Intellectual property</h2>
        <p className="mt-3 text-sm leading-7">
          NEXTMBS name, logo, and site content belong to NEXTMBS. You may not
          copy them for commercial use without permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">6. Limitation of liability</h2>
        <p className="mt-3 text-sm leading-7">
          The website is provided “as is.” To the fullest extent allowed by law,
          NEXTMBS is not liable for damages arising only from use of the public
          website or reliance on general marketing content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">7. Contact</h2>
        <p className="mt-3 text-sm leading-7">
          Questions about these terms: {CONTACT_EMAIL} · {CONTACT_PHONE}
        </p>
      </section>
    </LegalPage>
  );
}
