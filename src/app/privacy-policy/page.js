import LegalPage from "@/components/ui/LegalPage";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/data/contact";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How NEXTMBS collects, uses, and protects information for medical billing and revenue cycle services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      updated="September 19, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-[#142957]">1. Who we are</h2>
        <p className="mt-3 text-sm leading-7">
          NEXTMBS (“we”, “us”) provides medical billing, coding, credentialing,
          and revenue cycle management services. This policy explains how we
          handle information when you visit nextmbs.com or contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#168be8]">
            {CONTACT_EMAIL}
          </a>{" "}
          or {CONTACT_PHONE}.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">2. Information we collect</h2>
        <p className="mt-3 text-sm leading-7">
          Through our website contact form and email, we may collect your name,
          work email, phone number, practice name, requested service, and the
          message you send. We do not ask for patient medical records through
          the public website form.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">3. How we use it</h2>
        <p className="mt-3 text-sm leading-7">
          We use this information to respond to inquiries, prepare a billing
          discussion, follow up on demos, and improve our site. We do not sell
          your contact details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">4. PHI and HIPAA</h2>
        <p className="mt-3 text-sm leading-7">
          When we work with a healthcare practice as a billing partner, protected
          health information is handled under a Business Associate Agreement and
          HIPAA-aligned safeguards. Do not submit patient identifiers, claim
          files, or clinical notes through the public website form.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">5. Sharing</h2>
        <p className="mt-3 text-sm leading-7">
          We may use trusted processors (such as form delivery or hosting) only
          to operate this site. We may disclose information if required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">6. Cookies</h2>
        <p className="mt-3 text-sm leading-7">
          The site may use essential cookies needed for pages to load. We do not
          use the website to run advertising profiles on visitors.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">7. Your requests</h2>
        <p className="mt-3 text-sm leading-7">
          To access, correct, or delete inquiry data we hold from the website,
          email {CONTACT_EMAIL}. We will respond within a reasonable time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#142957]">8. Contact</h2>
        <p className="mt-3 text-sm leading-7">
          Privacy questions: {CONTACT_EMAIL} · {CONTACT_PHONE}
        </p>
      </section>
    </LegalPage>
  );
}
