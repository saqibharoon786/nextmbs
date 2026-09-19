import Link from "next/link";
import {
  Activity,
  FileText,
  ClipboardCheck,
  ShieldCheck,
  UserCheck,
  BadgeCheck,
  Clock,
  FileCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { services } from "@/data/services";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/data/contact";

const iconMap = {
  Activity,
  FileText,
  ClipboardCheck,
  ShieldCheck,
  UserCheck,
  BadgeCheck,
  Clock,
  FileCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  BarChart3,
};

export default function ServicePage({ service }) {
  const Icon = iconMap[service.icon] || Activity;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const titleParts = service.title.split(" ");
  const lastWord = titleParts.pop();
  const titleStart = titleParts.join(" ");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f4faff] pt-4">
      <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>

      <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-160px] top-[-40px] h-[380px] w-[380px] rounded-full bg-[#dff2ff] blur-[100px]" />
          <div className="absolute right-[-140px] top-[80px] h-[320px] w-[320px] rounded-full bg-[#ffe8ef] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1100px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2">
            <Icon size={17} className="text-[#8b4ed8]" />
            <span className="text-sm font-semibold text-[#3675c8]">{service.eyebrow}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-[#092957] sm:text-5xl">
            {titleStart ? `${titleStart} ` : ""}
            <span className="text-[#ed174c]">{lastWord}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-[#71839e]">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#ed174c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d91243]"
            >
              Request this service
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <ArrowRight size={15} className="text-[#ed174c]" />
              </span>
            </Link>
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-[#c8e2f5] bg-white px-5 py-2.5 text-sm font-semibold text-[#168be8]"
            >
              <Phone size={16} />
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-8">
        <div className="mx-auto grid max-w-[1100px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-7 sm:p-8">
            <h2 className="text-2xl font-bold text-[#142957]">{service.headline}</h2>
            <p className="mt-4 text-base leading-8 text-[#71839e]">{service.body}</p>
            <p className="mt-4 text-base leading-8 text-[#71839e]">{service.audience}</p>
          </div>

          <div className="rounded-[24px] border border-[#e5eef7] bg-gradient-to-br from-[#fff7fa] to-[#f5fbff] p-7">
            <h3 className="text-lg font-bold text-[#142957]">What you get</h3>
            <ul className="mt-4 space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#52708c]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#ed174c]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-5 text-center text-2xl font-bold text-[#142957] sm:text-3xl">
            How this <span className="text-[#168be8]">works</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {service.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-6"
              >
                <span className="text-3xl font-extrabold text-[#ed174c]/25">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#142957]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#71839e]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-8">
        <div className="mx-auto max-w-[1100px] rounded-[24px] border border-[#dcebf7] bg-white/70 px-6 py-8 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#142957]">Ready to talk through this?</h2>
              <p className="mt-2 max-w-[520px] text-sm leading-7 text-[#71839e]">
                Send a note to {CONTACT_EMAIL} or use the homepage form. We’ll look at your
                current volume and tell you what NEXTMBS would take on first.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ed174c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d91243]"
              >
                Open contact form
                <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#168be8]"
              >
                <Mail size={15} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-5 text-xl font-bold text-[#142957]">Related services</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = iconMap[item.icon] || Activity;
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff3ff]">
                    <RelatedIcon size={18} className="text-[#168be8]" />
                  </div>
                  <h3 className="font-bold text-[#142957]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#71839e]">{item.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
