import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "../../data/contact";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f4faff] text-[#0b3b66]">
      <img
        src="/images/lefticon.png"
        alt=""
        className="pointer-events-none absolute bottom-40 right-[-50px] hidden w-[230px] opacity-80 lg:block"
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
        <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="max-w-[330px]">
            <img
              src="/images/nextmbs-logo.png"
              alt="NEXTMBS Medical Billing Solutions"
              className="h-auto w-[220px] max-w-full object-contain object-left"
            />

            <h4 className="mt-4 text-sm font-semibold uppercase tracking-[3px] text-[#168be8]">
              Smarter Healthcare. Better Outcomes.
            </h4>

            <p className="mt-5 text-sm leading-7 text-[#52708c]">
              Empowering healthcare providers with reliable medical billing,
              revenue cycle management, and technology-driven solutions that
              simplify operations and improve financial performance.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#ed174c] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#168be8] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#ed174c] hover:text-white"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#168be8] hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
                <ArrowUpRight size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#0b3b66]">Quick Links</h3>
            </div>

            <ul className="space-y-4 text-sm text-[#52708c]">
              <li>
                <Link href="/" className="transition hover:text-[#168be8]">Home</Link>
              </li>
              <li>
                <Link href="/#about" className="transition hover:text-[#168be8]">About Us</Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-[#168be8]">Our Services</Link>
              </li>
              <li>
                <Link href="/#contact" className="transition hover:text-[#168be8]">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-[#168be8]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-[#168be8]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
                <HeartPulse size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#0b3b66]">Our Services</h3>
            </div>

            <ul className="space-y-4 text-sm text-[#52708c]">
              <li>
                <Link href="/services/medical-billing" className="transition hover:text-[#168be8]">
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link href="/services/medical-coding" className="transition hover:text-[#168be8]">
                  Medical Coding
                </Link>
              </li>
              <li>
                <Link href="/services/credentialing" className="transition hover:text-[#168be8]">
                  Credentialing
                </Link>
              </li>
              <li>
                <Link href="/services/denial-management" className="transition hover:text-[#168be8]">
                  Denial Management
                </Link>
              </li>
              <li>
                <Link href="/services/revenue-cycle-management" className="transition hover:text-[#168be8]">
                  Revenue Cycle Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
                <Mail size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#0b3b66]">Get In Touch</h3>
            </div>

            <p className="text-sm leading-7 text-[#52708c]">
              Your partner in{" "}
              <span className="font-semibold text-[#ed174c]">healthcare success.</span>
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#52708c]">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[#168be8]" />
                <span>Serving healthcare providers worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-[#168be8]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-[#168be8]">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-[#168be8]" />
                <a href={CONTACT_PHONE_HREF} className="transition hover:text-[#168be8]">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#cfe5f5] pt-6">
          <div className="flex flex-col justify-between gap-4 text-xs text-[#6c879f] sm:flex-row">
            <p>© 2026 NEXTMBS. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition hover:text-[#168be8]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-[#168be8]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
