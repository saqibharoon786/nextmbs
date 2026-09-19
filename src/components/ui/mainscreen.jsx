"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/data/contact";
import {
  UserRound,
  Code2,
  FileText,
  ShieldCheck,
  CreditCard,
  BarChart3,
  ArrowRight,
  ArrowDown,
  Activity,
  HeartCrack,
  Mail,
  Phone,
  Quote,
  Star,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Users,
  Shield,
  FileCheck,
  ClipboardCheck,
  Stethoscope,
  Send,
  User,
  Building2,
} from "lucide-react";

const hipaaIcon = "/images/hipaa-icon.png";
const reimbursementsIcon = "/images/reimbursements-icon.png";
const revenueCycleIcon = "/images/revenue-cycle-icon.png";
const medheaveMain = "/images/medheave_main.png";
const heroBg = "/images/hero-bg.png";
const ourImpact = "/images/secondimage.png";
const leftImage = "/images/lefticon.png";
const rightImage = "/images/righticon.png";
const card1S3 = "/images/card_1S3.png";
const card2S3 = "/images/card_2S3.png";
const card3S3 = "/images/card_3S3.png";
const card4S3 = "/images/card_4S3.png";
const card5S3 = "/images/card_5S3.png";
const card6S3 = "/images/card_6S3.png";
const card7S3 = "/images/card_7S3.png";
const card8S3 = "/images/card_8S3.png";
const card9S3 = "/images/card_9S3.png";
const card1 = "/images/card_1.png";
const card2 = "/images/card_2.png";
const card3 = "/images/card_3.png";
const card4 = "/images/card_4.png";
const card5 = "/images/card_5.png";
const card6 = "/images/card_6.png";
const computer_illustration = "/images/computer_illustration2.png";

const MainScreen = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    service: "Medical Billing",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    setFormError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          practice: formData.practice,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `NEXTMBS website inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (!response.ok || data.success === "false" || data.success === false) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        practice: "",
        service: "Medical Billing",
        message: "",
      });
    } catch (error) {
      setFormStatus("error");
      setFormError(
        error.message || `Something went wrong. Please email ${CONTACT_EMAIL}.`
      );
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative  pt-4">
       {/* Navbar */}
      <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  
      

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-fill z-0"
      />
      

     

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">

          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
            Smarter Medical
            <br />
            <span className="text-red-500">Billing</span>.
            <br />
            Better Healthcare.
          </h1>

          <p className="text-base sm:text-lg text-blue-400 max-w-xl">
            Streamline your revenue cycle with our HIPAA-compliant medical
            billing services. Faster claims, higher reimbursements, and
            improved cash flow for your practice.
          </p>

          {/* Three Features */}
          <div className="mt-3 flex flex-wrap gap-5 sm:gap-8">

            <div className="flex items-center gap-2">
              <img
                src={hipaaIcon}
                alt="HIPAA"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  HIPAA
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Compliant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={reimbursementsIcon}
                alt="Reimbursements"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Reimbursements
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Higher payments
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={revenueCycleIcon}
                alt="Revenue Cycle"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Revenue Cycle
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Streamlined management
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="self-start bg-red-500 rounded-full text-white px-3 py-2 flex items-center gap-2 hover:bg-red-600">

            Get Started

            <span className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="text-black"
              />
            </span>

          </button>

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">

          <img
            src={medheaveMain}
            alt="Medical billing dashboard"
            className="w-full max-w-[550px] h-auto object-contain"
          />

        </div>

      </div>


      


      {/* =====================================================
          OUR IMPACT SECTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={ourImpact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />


        {/* =================================================
            LEFT TRANSPARENT ILLUSTRATION
        ================================================== */}

       <img
  src={leftImage}
  alt=""
  className="hidden 
  xl:block 
  absolute
   left-[-15px] 
   bottom-[50px] 
   w-[350px] 
   h-auto 
   object-contain
    z-[1]"
        />


        {/* =================================================
            RIGHT TRANSPARENT ILLUSTRATION
        ================================================== */}

        <img
          src={rightImage}
          alt=""
          className="
          hidden
          xl:block
            absolute
            right-[-35px]
              bottom-[45px]
            
            w-[380px]
          
            h-auto
            object-contain
            z-[1]
          "
        />


        {/* =================================================
            OUR IMPACT CONTENT
        ================================================== */}

        <div className="relative z-10 flex flex-col items-center pt-10 lg:pt-12 pb-8">


          {/* Small Label */}
          <div className="flex items-center gap-2 bg-[#e8eaff] rounded-full px-5 py-2 mb-4">

            <span className="text-indigo-600 text-lg">
              ▥
            </span>

            <span className="text-indigo-600 font-semibold text-sm">
              Our Impact
            </span>

          </div>


          {/* Heading */}
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[39px] font-bold text-[#142957] leading-tight">

            These aren’t{" "}

            <span className="text-[#ed3f62]">
              aspirational
            </span>{" "}

            targets.

          </h2>


          {/* Description */}
          <p className="text-center text-[#71809d] text-sm sm:text-base mt-2 leading-relaxed">

            These metrics are what we deliver, consistently, across all
            practices and specialties we work with.

            <br />

            Real results. Measurable impact.

          </p>


          {/* =================================================
              SIX MIDDLE CARDS
          ================================================== */}

          <div
            className="
              relative z-10 mt-6 grid
              w-full max-w-[620px]
              grid-cols-2 justify-items-center gap-2
              sm:grid-cols-3 sm:max-w-[700px] sm:gap-3
              lg:grid-cols-6 lg:max-w-[660px] lg:gap-3
              xl:max-w-[700px]
            "
          >
            {[card1, card2, card3, card4, card5, card6].map((card, index) => (
              <img
                key={index}
                src={card}
                alt={`Impact card ${index + 1}`}
                className="
                  h-auto
                  w-full
                  max-w-[150px]
                  object-contain
                "
              />
            ))}
          </div>

        </div>

      </section>
      {/* =====================================================


{/* =====================================================
    ABOUT US SECTION
====================================================== */}

<section id="about" className="relative w-full overflow-hidden bg-[#f4faff] py-20">

  {/* Background glows */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:px-12">

    {/* Left Content */}
    <div className="w-full lg:w-1/2">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9eafa] bg-white px-4 py-2">
        <div className="flex h-5 w-5 items-center justify-center text-red-500 bfg">
  <HeartCrack
    size={20}
    strokeWidth={2}
    className="text-red-500"  
  /> 
</div>
        <span className="text-sm font-semibold text-[#168be8]">
          About Us
        </span>
      </div>

      <h2 className="max-w-[560px] text-4xl font-bold leading-tight text-[#092957] sm:text-5xl">
        Simplifying Healthcare.
        <br />
        <span className="text-[#ed174c]">Strengthening</span>{" "}
        <span className="text-[#168be8]">Practices.</span>
      </h2>

      <p className="mt-6 max-w-[540px] text-base leading-8 text-[#71839e]">
        We help healthcare providers simplify their administrative
        processes, improve revenue performance, and spend more time
        focusing on patient care.
      </p>

      <p className="mt-4 max-w-[540px] text-base leading-8 text-[#71839e]">
        Our technology-driven solutions bring billing, coding, claims,
        and revenue cycle management together in one seamless workflow.
      </p>

      <button className="mt-8 flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]">
        Learn More

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c]">
          <ArrowRight size={17} strokeWidth={2} />
        </span>
      </button>

    </div>

    
    {/* Right Image */}
<div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:mr-[-48px]">
  <img
    src={computer_illustration}
    alt="Healthcare management illustration"
    className="h-auto w-full max-w-[580px] object-contain"
  />
</div>

  </div>

</section>


{/* =====================================================
    MEDICAL BILLING SERVICES SECTION
===================================================== */}

<section id="services" className="relative w-full overflow-hidden bg-[#f4faff] px-4 pt-5 pb-14">

  {/* =================================================
      BACKGROUND GLOW
  ================================================== */}

  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-blue-100/30 blur-3xl" />

    <div className="absolute bottom-0 left-[-200px] w-[500px] h-[300px] rounded-full bg-blue-100/20 blur-3xl" />

  </div>


  {/* =================================================
      TOP HEADING AREA
  ================================================== */}

  <div className="relative z-10 flex flex-col items-center text-center">

    {/* Badge */}

    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2 mb-4">

      <Activity
        size={17}
        strokeWidth={2}
        className="text-[#8b4ed8]"
      />

      <span className="text-sm font-semibold text-[#3675c8]">
        Medical billing services
      </span>

    </div>


    {/* Main Heading */}

    <h1 className="text-[#092957] text-4xl sm:text-5xl lg:text-[32px] font-extrabold tracking-tight leading-[1.12]">

      More Than Billing.
      <br />

      We Keep Your{" "}

      <span className="text-[#ed174c]">
        Revenue
      </span>{" "}

      <span className="text-[#168be8]">
        Moving.
      </span>

    </h1>


    {/* Subtitle */}

    <p className="mt-3 max-w-[680px] text-sm sm:text-base leading-relaxed text-[#71839e] font-medium">

      From patient registration to final payment, we handle the complexities
      of the revenue cycle

      <br className="hidden sm:block" />

      so you can focus on what matters most — your patients.

    </p>

  </div>



  {/* =================================================
      COMPLETE SCREEN CONTENT
  ================================================== */}

  <div className="relative z-10 w-full max-w-[1320px] mx-auto mt-6">


    {/* =================================================
        TOP ROW
        LEFT = 70%
        RIGHT = 30%
    ================================================== */}

    <div className="flex flex-col lg:flex-row gap-3 w-full items-stretch">


      {/* =================================================
          LEFT BIG CARD — 70%

          card9S3 contains:
          - Revenue Cycle Management heading
          - Description
          - Main illustration
          - Learn More button
      ================================================== */}

    <div className="w-full lg:flex-[0_0_70%]">

  <div className="w-full min-h-[250px] rounded-[24px] bg-gradient-to-r from-[#fff7fa] to-[#f5fbff] border border-white shadow-sm p-6 flex items-center justify-between gap-6">

    {/* LEFT CONTENT */}
    <div className="flex flex-col items-start max-w-[45%]">

      {/* Icon + Heading */}
      <div className="flex items-start gap-3 mb-3">

        <div className="w-12 h-12 rounded-xl bg-[#f52b5b] flex items-center justify-center shrink-0">

          <BarChart3
            size={25}
            strokeWidth={2}
            className="text-white"
          />

        </div>

        <h2 className="text-xl lg:text-2xl font-bold leading-tight text-[#142957]">
          Revenue Cycle
          <br />
          Management
        </h2>

      </div>


      {/* Three-line Description */}
      <p className="text-sm leading-relaxed text-[#71839e]">

        We streamline your entire revenue cycle — from
        <br />
        patient registration to payment — ensuring
        <br />
        maximum reimbursement, fewer denials, and
        <br />
        sustainable growth.

      </p>


      {/* Learn More Button */}
      <button className="mt-4 bg-[#ed174c] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-[#d91243]">

        Learn More

        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">

          <ArrowRight
            size={15}
            strokeWidth={2}
            className="text-[#ed174c]"
          />

        </span>

      </button>

    </div>


    {/* RIGHT IMAGE */}
    <div className="w-[55%] flex justify-center items-center">

      <img
        src={card9S3}
        alt="Revenue Cycle Management"
        className="w-full h-auto object-contain"
      />

    </div>

  </div>

</div>



      {/* =================================================
          RIGHT PROCESS CARD — 30%
      ================================================== */}

      <div className="w-full lg:flex-1 rounded-[24px] border border-[#dcebf7] bg-white/50 px-4 py-5 flex flex-col justify-center">


        {/* =================================================
            TOP PROCESS ROW
        ================================================== */}

        <div className="flex items-start justify-between w-full">


          {/* PATIENT */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dff3ff] flex items-center justify-center">

              <UserRound
                size={25}
                strokeWidth={2}
                className="text-[#1598df]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Patient
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#78bce9]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* CODING */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0e4ff] flex items-center justify-center">

              <Code2
                size={25}
                strokeWidth={2}
                className="text-[#8b4bd8]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Coding
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#e6a1c2]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* CLAIM */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ffe4ec] flex items-center justify-center">

              <FileText
                size={25}
                strokeWidth={2}
                className="text-[#e52c5b]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Claim
            </span>

          </div>

        </div>



        {/* =================================================
            CENTER DOWN ARROW
        ================================================== */}

        <div className="flex justify-center my-1 text-[#75b9e8]">

          <ArrowDown
            size={20}
            strokeWidth={1.5}
          />

        </div>



        {/* =================================================
            BOTTOM PROCESS ROW
        ================================================== */}

        <div className="flex items-start justify-between w-full">


          {/* PAYER */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dcf7f4] flex items-center justify-center">

              <ShieldCheck
                size={25}
                strokeWidth={2}
                className="text-[#14a7bd]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Payer
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#78bce9]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* PAYMENT */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dceeff] flex items-center justify-center">

              <CreditCard
                size={25}
                strokeWidth={2}
                className="text-[#168be8]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Payment
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#b18be5]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* REVENUE */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0e4ff] flex items-center justify-center">

              <BarChart3
                size={25}
                strokeWidth={2}
                className="text-[#8b45d6]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Revenue
            </span>

          </div>

        </div>

      </div>

    </div>



  {/* =================================================
    BOTTOM SERVICE CARDS
    4 COLUMNS × 2 ROWS
================================================= */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

  {/* CARD 1 — MEDICAL BILLING */}
  <Link href="/services/medical-billing" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card1S3} alt="Medical Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Billing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We manage your claim submissions,<br />
        tracking, and payment posting with<br />
        accuracy and speed.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 2 — MEDICAL CODING */}
  <Link href="/services/medical-coding" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card2S3} alt="Medical Coding" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Coding</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We ensure accurate, compliant<br />
        coding with the latest ICD-10,<br />
        CPT, and HCPCS guidelines.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 3 — MEDICAL CREDENTIALING */}
  <Link href="/services/credentialing" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card3S3} alt="Medical Credentialing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Credentialing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We handle provider enrollment<br />
        and credentialing with payers,<br />
        so you can focus on care.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 4 — PRIOR AUTHORIZATION */}
  <Link href="/services/prior-authorization" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card4S3} alt="Prior Authorization" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Prior Authorization</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We get the necessary approvals<br />
        from insurance companies quickly<br />
        and accurately.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 5 — WORKER'S COMP */}
  <Link href="/services/claims-management" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card5S3} alt="Workers Compensation and No Fault Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">
        Worker's Comp & No-Fault Billing
      </h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We manage complex claims and<br />
        ensure timely billing for workers'<br />
        comp and no-fault cases.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 6 — DENIAL MANAGEMENT */}
  <Link href="/services/denial-management" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card6S3} alt="Denial Management" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Denial Management</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We identify, appeal, and resolve denials<br />
        with a data-driven approach to<br />
        maximize your revenue.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 7 — PATIENT BILLING */}
  <Link href="/services/medical-billing" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card7S3} alt="Patient Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Patient Billing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We handle patient statements,<br />
        follow-ups, and payment plans to<br />
        improve collections and satisfaction.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>


  {/* CARD 8 — BETTER PROCESSES */}
  <Link href="/services/revenue-cycle-management" className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3 hover:shadow-md transition">
    <div className="w-[38%] shrink-0">
      <img src={card8S3} alt="Better Processes Healthier Revenue" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">
        Better Processes.<br />
        Healthier Revenue.
      </h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        Smarter workflows and better results for your
        healthcare practice.We handle patient statements,
        follow-ups.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </Link>
</div>
</div>

</section>



{/* =====================================================
    WHY CHOOSE US SECTION
====================================================== */}

<section className="relative w-full overflow-hidden bg-[#f4faff] px-4 py-16 sm:py-20">

  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[40px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-160px] bottom-[-80px] h-[380px] w-[380px] rounded-full bg-[#ffe8ef] blur-[110px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1320px]">

    <div className="flex flex-col items-center text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2">
        <Shield size={17} strokeWidth={2} className="text-[#8b4ed8]" />
        <span className="text-sm font-semibold text-[#3675c8]">
          Why Choose Us
        </span>
      </div>

      <h2 className="max-w-[720px] text-3xl font-extrabold leading-tight text-[#092957] sm:text-4xl lg:text-[40px]">
        Billing That Works As Hard As
        <br />
        Your{" "}
        <span className="text-[#ed174c]">Practice</span>.
      </h2>

      <p className="mt-4 max-w-[680px] text-sm font-medium leading-relaxed text-[#71839e] sm:text-base">
        Outsource the complexity of medical billing without losing control.
        We protect your revenue, reduce denials, and keep cash flowing
        so your team can stay focused on care.
      </p>

    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: TrendingUp,
          iconBg: "bg-[#ffe4ec]",
          iconColor: "text-[#e52c5b]",
          title: "Higher Collections",
          text: "Clean claims, faster posting, and tighter follow-up that improve reimbursements across every specialty.",
        },
        {
          icon: FileCheck,
          iconBg: "bg-[#dff3ff]",
          iconColor: "text-[#1598df]",
          title: "Fewer Denials",
          text: "Coding audits and payer-specific scrubbing catch errors before submission — so fewer claims bounce back.",
        },
        {
          icon: Shield,
          iconBg: "bg-[#f0e4ff]",
          iconColor: "text-[#8b45d6]",
          title: "HIPAA-Secure RCM",
          text: "Every workflow is built around compliance, encrypted data handling, and protected patient information.",
        },
        {
          icon: Users,
          iconBg: "bg-[#dcf7f4]",
          iconColor: "text-[#14a7bd]",
          title: "Dedicated Billing Team",
          text: "A specialty-matched team owns your account — not a rotating call center — with clear reporting every month.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}>
            <item.icon size={24} strokeWidth={2} className={item.iconColor} />
          </div>
          <h3 className="text-lg font-bold text-[#142957]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#71839e]">{item.text}</p>
        </div>
      ))}

    </div>

    <div className="mt-8 grid grid-cols-2 gap-3 rounded-[24px] border border-white bg-gradient-to-r from-[#fff7fa] to-[#f5fbff] px-4 py-6 sm:grid-cols-4 sm:px-8">
      {[
        { value: "98%", label: "Clean claim rate" },
        { value: "30%", label: "Fewer denials" },
        { value: "15+", label: "Days faster AR" },
        { value: "24/7", label: "Claim monitoring" },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl font-extrabold text-[#ed174c] sm:text-3xl">{stat.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#71839e] sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>

</section>



{/* =====================================================
    CLAIM TO CASH PROCESS SECTION
====================================================== */}

<section className="relative w-full overflow-hidden bg-[#f4faff] px-4 pb-16 sm:pb-20">

  <div className="pointer-events-none absolute inset-0">
    <div className="absolute bottom-0 left-[-200px] h-[300px] w-[500px] rounded-full bg-blue-100/20 blur-3xl" />
    <div className="absolute top-[-80px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1320px]">

    <div className="flex flex-col items-center text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2">
        <ClipboardCheck size={17} strokeWidth={2} className="text-[#8b4ed8]" />
        <span className="text-sm font-semibold text-[#3675c8]">
          Medical Billing Process
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight text-[#092957] sm:text-4xl lg:text-[40px]">
        From Claim to{" "}
        <span className="text-[#ed174c]">Cash</span>,{" "}
        <span className="text-[#168be8]">Handled.</span>
      </h2>

      <p className="mt-4 max-w-[680px] text-sm font-medium leading-relaxed text-[#71839e] sm:text-base">
        A complete revenue cycle workflow — eligibility, coding, claims,
        denials, and patient billing — managed end to end for your practice.
      </p>

    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          step: "01",
          icon: Stethoscope,
          iconBg: "bg-[#dff3ff]",
          iconColor: "text-[#1598df]",
          title: "Eligibility & Coding",
          text: "We verify benefits before the visit and code encounters with ICD-10, CPT, and HCPCS accuracy.",
        },
        {
          step: "02",
          icon: FileCheck,
          iconBg: "bg-[#f0e4ff]",
          iconColor: "text-[#8b45d6]",
          title: "Clean Claim Submission",
          text: "Claims are scrubbed against payer rules, submitted electronically, and tracked until acknowledgment.",
        },
        {
          step: "03",
          icon: Clock3,
          iconBg: "bg-[#ffe4ec]",
          iconColor: "text-[#e52c5b]",
          title: "Follow-up & Appeals",
          text: "Denied or delayed claims are worked immediately with root-cause fixes so the same errors don’t repeat.",
        },
        {
          step: "04",
          icon: CreditCard,
          iconBg: "bg-[#dcf7f4]",
          iconColor: "text-[#14a7bd]",
          title: "Payment Posting",
          text: "ERA/EOB posting, patient statements, and AR recovery keep your books clean and cash flow predictable.",
        },
      ].map((item, index) => (
        <div
          key={item.step}
          className="relative rounded-[24px] border border-[#e5eef7] bg-white/80 p-6 shadow-sm"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}>
              <item.icon size={22} strokeWidth={2} className={item.iconColor} />
            </div>
            <span className="text-3xl font-extrabold text-[#ed174c]/20">{item.step}</span>
          </div>

          <h3 className="text-lg font-bold text-[#142957]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#71839e]">{item.text}</p>

          {index < 3 && (
            <div className="absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 text-[#78bce9] xl:block">
              <ArrowRight size={20} strokeWidth={1.8} />
            </div>
          )}
        </div>
      ))}

    </div>

    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#dcebf7] bg-white/60 px-6 py-6 sm:flex-row sm:px-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed174c]">
          <CheckCircle2 size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#142957]">
            Ready to recover lost revenue?
          </h3>
          <p className="mt-1 text-sm text-[#71839e]">
            We’ll review your current claims, denials, and AR — then show you
            exactly where money is leaking.
          </p>
        </div>
      </div>

      <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#ed174c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d91243]">
        Get a Billing Audit
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <ArrowRight size={15} strokeWidth={2} className="text-[#ed174c]" />
        </span>
      </button>
    </div>

  </div>

</section>



{/* =====================================================
    TESTIMONIALS SECTION
====================================================== */}

<section className="relative w-full overflow-hidden bg-[#f4faff] px-4 pb-20 pt-4">

  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-180px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1320px]">

    <div className="flex flex-col items-center text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2">
        <Quote size={17} strokeWidth={2} className="text-[#8b4ed8]" />
        <span className="text-sm font-semibold text-[#3675c8]">
          Testimonials
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight text-[#092957] sm:text-4xl lg:text-[40px]">
        Trusted by Practices
        <br />
        That Care About{" "}
        <span className="text-[#ed174c]">Revenue</span>.
      </h2>

      <p className="mt-4 max-w-[640px] text-sm font-medium leading-relaxed text-[#71839e] sm:text-base">
        Clinic owners and administrators tell us the same thing: fewer
        denials, faster payments, and a billing partner they can actually reach.
      </p>

    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">

      {[
        {
          quote:
            "Our denial rate dropped within the first 60 days. Med Heave cleaned up coding issues we didn’t even know we had, and collections are finally predictable.",
          name: "Dr. Sarah Mitchell",
          role: "Family Medicine, Austin TX",
          initials: "SM",
          accent: "bg-[#ffe4ec] text-[#ed174c]",
        },
        {
          quote:
            "Days in A/R used to sit above 45. Their team posts payments same-day and works follow-ups relentlessly. I spend my time with patients, not payers.",
          name: "James Chen",
          role: "Practice Administrator, Cardiology",
          initials: "JC",
          accent: "bg-[#dff3ff] text-[#168be8]",
        },
        {
          quote:
            "Credentialing and prior auths used to stall our schedule. Now both move quickly, claims go out clean, and parents aren’t waiting on surprise bills.",
          name: "Dr. Priya Patel",
          role: "Pediatrics, Orlando FL",
          initials: "PP",
          accent: "bg-[#f0e4ff] text-[#8b45d6]",
        },
      ].map((item) => (
        <article
          key={item.name}
          className="flex h-full flex-col rounded-[24px] border border-[#e5eef7] bg-white/80 p-7 shadow-sm"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#fff7fa] to-[#e4f3ff]">
              <Quote size={18} className="text-[#168be8]" />
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  className="fill-[#ed174c] text-[#ed174c]"
                />
              ))}
            </div>
          </div>

          <p className="flex-1 text-sm leading-7 text-[#52708c]">
            “{item.quote}”
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-[#e5eef7] pt-5">
            <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${item.accent}`}>
              {item.initials}
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#142957]">{item.name}</h4>
              <p className="text-xs text-[#71839e]">{item.role}</p>
            </div>
          </div>
        </article>
      ))}

    </div>

  </div>

</section>



{/* =====================================================
    CONTACT / SUBMISSION FORM
====================================================== */}

<section id="contact" className="relative w-full overflow-hidden bg-[#f4faff] px-4 pb-20 pt-4">

  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[40px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-160px] bottom-[-80px] h-[380px] w-[380px] rounded-full bg-[#ffe8ef] blur-[110px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1320px]">

    <div className="flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2">
        <Mail size={17} strokeWidth={2} className="text-[#8b4ed8]" />
        <span className="text-sm font-semibold text-[#3675c8]">
          Get In Touch
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight text-[#092957] sm:text-4xl lg:text-[40px]">
        Tell Us About Your{" "}
        <span className="text-[#ed174c]">Practice</span>.
      </h2>

      <p className="mt-4 max-w-[640px] text-sm font-medium leading-relaxed text-[#71839e] sm:text-base">
        Share your billing needs and we’ll follow up at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#168be8]">
          {CONTACT_EMAIL}
        </a>
        . No call centers — a real billing team replies.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.4fr]">

      <div className="flex flex-col gap-4">

        <a
          href={CONTACT_PHONE_HREF}
          className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dff3ff]">
            <Phone size={22} className="text-[#1598df]" />
          </div>
          <h3 className="text-lg font-bold text-[#142957]">Call Us</h3>
          <p className="mt-1 text-sm text-[#71839e]">Mon–Fri, 9am–6pm EST</p>
          <p className="mt-3 text-base font-semibold text-[#168be8]">
            {CONTACT_PHONE}
          </p>
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-[24px] border border-[#e5eef7] bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffe4ec]">
            <Mail size={22} className="text-[#e52c5b]" />
          </div>
          <h3 className="text-lg font-bold text-[#142957]">Email Us</h3>
          <p className="mt-1 text-sm text-[#71839e]">We reply within one business day</p>
          <p className="mt-3 text-base font-semibold text-[#168be8]">
            {CONTACT_EMAIL}
          </p>
        </a>

        <div className="rounded-[24px] border border-[#e5eef7] bg-gradient-to-r from-[#fff7fa] to-[#f5fbff] p-6">
          <h3 className="text-lg font-bold text-[#142957]">What happens next</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#71839e]">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#ed174c]" />
              Your form goes straight to {CONTACT_EMAIL}
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#ed174c]" />
              We review claims, denials, and current AR
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#ed174c]" />
              You get a clear next-step plan for your practice
            </li>
          </ul>
        </div>

      </div>

      <form
        onSubmit={handleFormSubmit}
        className="rounded-[24px] border border-[#e5eef7] bg-white/85 p-6 shadow-sm sm:p-8"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <label className="block text-left">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
              <User size={15} className="text-[#168be8]" />
              Full name
            </span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Dr. Jane Smith"
              className="w-full rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm text-[#142957] outline-none transition placeholder:text-[#9bb0c4] focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
            />
          </label>

          <label className="block text-left">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
              <Mail size={15} className="text-[#168be8]" />
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleFormChange}
              placeholder="you@practice.com"
              className="w-full rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm text-[#142957] outline-none transition placeholder:text-[#9bb0c4] focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
            />
          </label>

          <label className="block text-left">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
              <Phone size={15} className="text-[#168be8]" />
              Phone
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="+1 850-470-1312"
              className="w-full rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm text-[#142957] outline-none transition placeholder:text-[#9bb0c4] focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
            />
          </label>

          <label className="block text-left">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
              <Building2 size={15} className="text-[#168be8]" />
              Practice name
            </span>
            <input
              type="text"
              name="practice"
              required
              value={formData.practice}
              onChange={handleFormChange}
              placeholder="Your clinic or group"
              className="w-full rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm text-[#142957] outline-none transition placeholder:text-[#9bb0c4] focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
            />
          </label>

        </div>

        <label className="mt-4 block text-left">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
            <ClipboardCheck size={15} className="text-[#168be8]" />
            Service needed
          </span>
          <select
            name="service"
            value={formData.service}
            onChange={handleFormChange}
            className="w-full rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm text-[#142957] outline-none transition focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
          >
            <option>Medical Billing</option>
            <option>Medical Coding</option>
            <option>Revenue Cycle Management</option>
            <option>Denial Management</option>
            <option>Credentialing</option>
            <option>Prior Authorization</option>
            <option>Other</option>
          </select>
        </label>

        <label className="mt-4 block text-left">
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#142957]">
            <FileText size={15} className="text-[#168be8]" />
            Message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleFormChange}
            placeholder="Tell us about your specialty, claim volume, and what you need help with."
            className="w-full resize-none rounded-2xl border border-[#dcebf7] bg-white px-4 py-3 text-sm leading-6 text-[#142957] outline-none transition placeholder:text-[#9bb0c4] focus:border-[#168be8] focus:ring-2 focus:ring-[#168be8]/20"
          />
        </label>

        {formStatus === "success" && (
          <p className="mt-4 rounded-2xl bg-[#e7f8f2] px-4 py-3 text-sm font-medium text-[#0f8a6a]">
            Message sent. We’ll reply to you from {CONTACT_EMAIL}.
          </p>
        )}

        {formStatus === "error" && (
          <p className="mt-4 rounded-2xl bg-[#ffe8ee] px-4 py-3 text-sm font-medium text-[#ed174c]">
            {formError} You can also email us directly at {CONTACT_EMAIL}.
          </p>
        )}

        <button
          type="submit"
          disabled={formStatus === "sending"}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ed174c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d91243] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-7"
        >
          {formStatus === "sending" ? "Sending..." : "Send Message"}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <Send size={14} strokeWidth={2} className="text-[#ed174c]" />
          </span>
        </button>
      </form>

    </div>

  </div>

</section>



<Footer />




    </div>
  );
};

export default MainScreen;