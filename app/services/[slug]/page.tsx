import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, ChevronRight, CircleCheck, CircleX, Phone } from "lucide-react";

import NavBar from "@/app/NavBar";
import Footer from "@/app/Footer";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import ServiceLinkCard from "@/components/ServiceLinkCard";
import { phoneLink, whatsappUrl } from "@/lib/contact";
import { SERVICES, getService } from "@/lib/services";

// Only the slugs in SERVICES exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} in Dubai`,
    description: `${service.tagline} ${service.summary}`,
    alternates: { canonical: `https://www.plutocool.com/services/${slug}` },
    openGraph: {
      title: `${service.title} in Dubai | Pluto Cool Technical Services`,
      description: service.tagline,
      images: service.hero.src.endsWith(".svg") ? undefined : [service.hero.src],
    },
  };
}

/* ------------------------------ Shared bits ------------------------------ */

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#12a4e0]" : "text-sky-700"}`}>
      {children}
    </p>
  );
}

const gradientHeading =
  "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-sky-800 to-cyan-500 bg-clip-text text-transparent";

/* --------------------------------- Page ---------------------------------- */

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { title, tagline, intro, hero, gallery, features, signs, steps, included, notIncluded, propertyTypes, faqs } =
    service;
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== slug);
  const message = `Hello! I'd like to ask about ${title}.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: tagline,
    serviceType: title,
    areaServed: { "@type": "City", name: "Dubai" },
    provider: { "@id": "https://www.plutocool.com/#business", name: "Pluto Cool Technical Services" },
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar />

      <div className='relative flex min-h-screen flex-col bg-sky-700/10 font-sans text-zinc-900'>
        <main className='relative z-10 flex w-full flex-1 flex-col'>
          {/* ─── Hero ─────────────────────────────────────────────────── */}
          <section className='relative w-full overflow-hidden'>
            <Image src={hero.src} alt={hero.alt} fill priority sizes='100vw' className='object-cover' />
            <div className='absolute inset-0 bg-sky-900/30' />
            <div className='absolute inset-0 bg-gradient-to-r from-[#0B1626]/95 via-[#0B1626]/75 to-[#0B1626]/20' />

            <div className='relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[560px] sm:px-6 lg:px-8'>
              {/* Breadcrumb */}
              <nav aria-label='Breadcrumb' className='mb-8 flex flex-wrap items-center gap-1.5 text-sm text-white/65'>
                <Link href='/' className='hover:text-white'>
                  Home
                </Link>
                <ChevronRight className='size-4' />
                <Link href='/services' className='hover:text-white'>
                  Services
                </Link>
                <ChevronRight className='size-4' />
                <span className='text-white' aria-current='page'>
                  {title}
                </span>
              </nav>

              <Reveal className='max-w-2xl'>
                <span className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 backdrop-blur-md'>
                  <Icon className='size-4' strokeWidth={1.75} />
                  Pluto Cool Services
                </span>
                <h1 className='mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl'>
                  {title}
                </h1>
                <p className='mt-4 text-base text-white/80 sm:text-lg'>{tagline}</p>

                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href={whatsappUrl(message)}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#20ba5a] active:scale-95'
                  >
                    <Image src='/whatsapp_icon.png' alt='' width={28} height={28} className='size-7' />
                    Ask on WhatsApp
                  </Link>
                  <Link
                    href={phoneLink}
                    className='flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 font-semibold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/20 active:scale-95'
                  >
                    <Phone className='size-5 text-sky-300' />
                    Call Us
                  </Link>
                </div>
              </Reveal>

              {/* Property types */}
              <div className='mt-12 flex flex-wrap gap-2'>
                {propertyTypes.map((type) => (
                  <span
                    key={type}
                    className='rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md'
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Overview ─────────────────────────────────────────────── */}
          <section className='w-full py-20 sm:py-24'>
            <div className='mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8'>
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <h2 className={`mt-3 ${gradientHeading}`}>About this service</h2>
                {intro.map((p) => (
                  <p key={p} className='mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg'>
                    {p}
                  </p>
                ))}
              </Reveal>

              <Reveal>
                {gallery.length > 1 ? (
                  <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                    {gallery.slice(0, 2).map((img, i) => (
                      <div
                        key={img.src}
                        className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/40 bg-[#16263a] shadow-xl shadow-sky-900/20 ${
                          i === 1 ? "mt-12" : ""
                        }`}
                      >
                        <Image src={img.src} alt={img.alt} fill sizes='(min-width: 1024px) 25vw, 50vw' className='object-cover' />
                        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16263a]/40 to-transparent' />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/40 bg-[#16263a] shadow-xl shadow-sky-900/20'>
                    <Image src={gallery[0].src} alt={gallery[0].alt} fill sizes='(min-width: 1024px) 50vw, 100vw' className='object-cover' />
                  </div>
                )}
              </Reveal>
            </div>
          </section>

          {/* ─── What we cover ───────────────────────────────────────── */}
          <section className='relative w-full overflow-hidden bg-[#16263a] py-20 text-white sm:py-24'>
            <div aria-hidden className='pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#12a4e0]/10 blur-3xl' />
            <div aria-hidden className='pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#0b7fd1]/10 blur-3xl' />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <Reveal className='mx-auto max-w-3xl text-center'>
                <Eyebrow dark>{title}</Eyebrow>
                <h2 className='mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>
                  What this service <span className='text-[#12a4e0]'>covers</span>
                </h2>
              </Reveal>

              <ul className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {features.map(({ title: featureTitle, detail, icon: FeatureIcon }) => (
                  <li key={featureTitle}>
                    <Reveal className='h-full'>
                      <div className='group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10'>
                        <span className='flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] text-white shadow-lg shadow-cyan-500/20'>
                          <FeatureIcon className='size-6' strokeWidth={1.75} />
                        </span>
                        <h3 className='mt-5 text-lg font-semibold'>{featureTitle}</h3>
                        <p className='mt-2 text-sm leading-relaxed text-slate-300'>{detail}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ─── How it works ────────────────────────────────────────── */}
          <section className='w-full py-20 sm:py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <Reveal className='mx-auto max-w-3xl text-center'>
                <Eyebrow>Our process</Eyebrow>
                <h2 className={`mt-3 ${gradientHeading}`}>How it works</h2>
              </Reveal>

              <ol className='relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {/* connector line on desktop */}
                <div aria-hidden className='absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent lg:block' />
                {steps.map((step, i) => (
                  <li key={step.title} className='relative'>
                    <Reveal className='h-full'>
                      <div className='h-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-sky-900/10 backdrop-blur-md'>
                        <span className='flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] text-2xl font-extrabold text-white shadow-lg shadow-cyan-500/30'>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className='mt-5 text-lg font-semibold text-zinc-900'>{step.title}</h3>
                        <p className='mt-2 text-sm leading-relaxed text-zinc-600'>{step.description}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ─── When to call / included / not included ──────────────── */}
          <section className='w-full pb-20 sm:pb-24'>
            <div className='mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8'>
              <Reveal className='h-full'>
                <div className='h-full rounded-3xl bg-[#063353] p-7 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xl font-semibold'>When to call us</h3>
                  <ul className='mt-5 space-y-3'>
                    {signs.map((sign) => (
                      <li key={sign} className='flex items-start gap-3 text-sm text-slate-200'>
                        <span className='mt-1.5 size-2 shrink-0 rounded-full bg-[#12a4e0] shadow-[0_0_10px_#12a4e0]' />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className='h-full'>
                <div className='h-full rounded-3xl border border-white/60 bg-white/80 p-7 shadow-lg shadow-sky-900/10 backdrop-blur-md'>
                  <h3 className='text-xl font-semibold text-zinc-900'>What&apos;s included</h3>
                  <ul className='mt-5 space-y-3'>
                    {included.map((item) => (
                      <li key={item} className='flex items-start gap-3 text-sm text-zinc-700'>
                        <CircleCheck className='mt-0.5 size-5 shrink-0 text-teal-600' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className='h-full'>
                <div className='h-full rounded-3xl border border-white/60 bg-white/80 p-7 shadow-lg shadow-sky-900/10 backdrop-blur-md'>
                  <h3 className='text-xl font-semibold text-zinc-900'>Not included</h3>
                  <ul className='mt-5 space-y-3'>
                    {notIncluded.map((item) => (
                      <li key={item} className='flex items-start gap-3 text-sm text-zinc-700'>
                        <CircleX className='mt-0.5 size-5 shrink-0 text-red-500' />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className='mt-6 rounded-2xl bg-sky-700/10 p-4 text-sm text-sky-900'>
                    Not sure what you need? Message us and we&apos;ll talk it through with you.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ─── FAQs ────────────────────────────────────────────────── */}
          <section className='relative w-full overflow-hidden bg-[#0B1626] py-20 text-white sm:py-24'>
            <div aria-hidden className='pointer-events-none absolute -right-40 top-10 h-[24rem] w-[24rem] rounded-full bg-[#12a4e0]/10 blur-3xl' />
            <div className='relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8'>
              <Reveal className='lg:col-span-2'>
                <Eyebrow dark>FAQs</Eyebrow>
                <h2 className='mt-3 text-3xl font-bold tracking-tight sm:text-4xl'>Common questions</h2>
                <p className='mt-4 text-slate-300'>
                  Can&apos;t find your answer here? Send us a message on WhatsApp and our team will help.
                </p>
              </Reveal>

              <div className='space-y-3 lg:col-span-3'>
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className='group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors open:border-cyan-400/30 open:bg-white/10'
                  >
                    <summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden'>
                      {faq.question}
                      <ChevronDown className='size-5 shrink-0 text-sky-300 transition-transform duration-200 group-open:rotate-180' />
                    </summary>
                    <p className='px-5 pb-5 text-sm leading-relaxed text-slate-300'>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Other services ──────────────────────────────────────── */}
          <section className='w-full py-20 sm:py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <Reveal className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'>
                <div>
                  <Eyebrow>Explore more</Eyebrow>
                  <h2 className={`mt-3 ${gradientHeading}`}>Our other services</h2>
                </div>
                <Link href='/services' className='font-semibold text-sky-700 hover:text-sky-900'>
                  View all services →
                </Link>
              </Reveal>

              <ul className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5'>
                {others.map((s) => (
                  <li key={s.slug}>
                    <ServiceLinkCard service={s} compact />
                  </li>
                ))}
              </ul>

              <div className='mt-20'>
                <ContactCta
                  title={`Need help with ${title}?`}
                  description='Send us a message or give us a call to discuss your requirements.'
                  message={message}
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
