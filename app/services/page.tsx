import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import NavBar from "@/app/NavBar";
import Footer from "@/app/Footer";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "AC repair & maintenance, duct & coil cleaning, MEP services & AMC, AC installation, painting, and HVAC ducting & VAV in Dubai.",
  alternates: { canonical: "https://www.plutocool.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <div className='relative flex min-h-screen flex-col bg-sky-700/10 font-sans text-zinc-900'>
        <main className='relative z-10 flex w-full flex-1 flex-col'>
          {/* ─── Hero ─────────────────────────────────────────────────── */}
          <section className='relative w-full overflow-hidden'>
            <Image
              src='/final_hero_background.png'
              alt='Air-conditioned living room with a view of the Dubai skyline'
              fill
              priority
              sizes='100vw'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-sky-900/30' />
            <div className='absolute inset-0 bg-gradient-to-r from-[#0B1626]/95 via-[#0B1626]/70 to-[#0B1626]/10' />

            <div className='relative mx-auto flex min-h-[50svh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8'>
              <nav aria-label='Breadcrumb' className='mb-8 flex items-center gap-1.5 text-sm text-white/65'>
                <Link href='/' className='hover:text-white'>
                  Home
                </Link>
                <ChevronRight className='size-4' />
                <span className='text-white' aria-current='page'>
                  Services
                </span>
              </nav>

              <Reveal className='max-w-2xl'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#12a4e0]'>What we do</p>
                <h1 className='mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl'>
                  Our Services
                </h1>
                <p className='mt-4 text-base text-white/80 sm:text-lg'>
                  Air conditioning, MEP, painting, and HVAC ducting for homes and businesses across Dubai.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ─── Service grid ─────────────────────────────────────────── */}
          <section className='w-full py-20 sm:py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <Reveal className='mx-auto mb-14 max-w-3xl text-center'>
                <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-sky-800 to-cyan-500 bg-clip-text text-transparent'>
                  Choose a service
                </h2>
                <p className='mt-4 text-sm text-zinc-600 sm:text-base'>
                  Select a service to see what it covers, how it works, and answers to common questions.
                </p>
              </Reveal>

              <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Reveal className='h-full'>
                      <ServiceLinkCard service={service} />
                    </Reveal>
                  </li>
                ))}
              </ul>

              <div className='mt-20'>
                <ContactCta
                  title='Not sure which service you need?'
                  description='Tell us about the problem and our team will point you in the right direction.'
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
