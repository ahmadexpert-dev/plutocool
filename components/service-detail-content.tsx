"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, CircleCheck, CircleX, Star, type LucideIcon } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

// Fixed: Removed the '+' sign as required by the wa.me API format
const whatsAppPhoneNumber = "971565204977";
const encodedMessage = encodeURIComponent("Hello! I'd like to get more information.");
const whatsappUrl = `https://wa.me/${whatsAppPhoneNumber}?text=${encodedMessage}`;

/* -------------------------------------------------------------------------- */
/*  Types — fill one `ServiceDetail` object per card                          */
/* -------------------------------------------------------------------------- */

export type ServiceDetail = {
  /** e.g. "4.9" — omit to hide the rating */
  rating?: string;
  /** Short benefit strip. `icon` is an image path (/public) or a lucide icon. */
  highlights?: { label: string; icon: string | LucideIcon }[];
  /** "How the service works" — numbered automatically */
  steps?: { title: string; description: string }[];
  included?: string[];
  notIncluded?: string[];
  goodToKnow?: string[];
  faqs?: { question: string; answer: string }[];
  /** Sticky footer */
  priceLabel?: string; // default "Starting from"
  price: string; // e.g. "AED 600"
  ctaLabel?: string; // default "Book now"
  ctaHref?: string; // link target; omit to use onCtaClick instead
};

type Props = {
  title: string;
  image: string;
  alt: string;
  detail: ServiceDetail;
  onCtaClick?: () => void;
};

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className='text-xl font-semibold tracking-tight'>{children}</h3>;
}

function IconList({ items, variant }: { items: string[]; variant: "yes" | "no" }) {
  const Icon = variant === "yes" ? CircleCheck : CircleX;
  const color = variant === "yes" ? "text-teal-600" : "text-red-500";

  return (
    <ul className='space-y-4'>
      {items.map((text) => (
        <li key={text} className='flex items-start gap-3'>
          <Icon className={`mt-0.5 size-5 shrink-0 ${color}`} aria-hidden />
          <span className='text-[15px] leading-relaxed text-muted-foreground'>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightIcon({ icon }: { icon: string | LucideIcon }) {
  if (typeof icon === "string") {
    return <Image src={icon} alt='' width={40} height={40} unoptimized className='size-10 object-contain' />;
  }
  const Icon = icon;
  return <Icon className='size-8 text-teal-600' aria-hidden />;
}

/* -------------------------------------------------------------------------- */
/*  Sheet content template — render inside <SheetContent>                      */
/* -------------------------------------------------------------------------- */

export default function ServiceDetailContent({ title, image, alt, detail, onCtaClick }: Props) {
  const {
    rating,
    highlights,
    steps,
    included,
    notIncluded,
    goodToKnow,
    faqs,
    priceLabel = "Starting from",
    price,
    ctaLabel = "Book now",
    ctaHref,
  } = detail;

  return (
    <>
      {/* Scrollable body */}
      <div className='flex-1 overflow-y-auto bg-sky-700/10'>
        {/* Header: thumbnail + title + rating */}
        <div className='flex items-center gap-4 px-5 pt-6 pr-14'>
          <div className='relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted'>
            <Image src={image} alt={alt} fill unoptimized sizes='96px' className='object-cover' />
          </div>
          <div className='min-w-0'>
            <SheetTitle className='text-xl leading-tight font-semibold uppercase'>{title}</SheetTitle>
            <SheetDescription className='sr-only'>Service details for {title}</SheetDescription>
            {rating && (
              <p className='mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground'>
                <Star className='size-4 fill-amber-400 text-amber-400' aria-hidden />
                {rating} Ratings
              </p>
            )}
          </div>
        </div>

        <div className='space-y-10 px-5 py-8'>
          {/* Highlights strip */}
          {highlights && highlights.length > 0 && (
            <div
              className='grid gap-2 rounded-2xl border bg-card px-2 py-4 shadow-xs'
              style={{
                gridTemplateColumns: `repeat(${highlights.length}, minmax(0, 1fr))`,
              }}
            >
              {highlights.map((h) => (
                <div key={h.label} className='flex flex-col items-center gap-2 px-1 text-center'>
                  <HighlightIcon icon={h.icon} />
                  <span className='text-sm leading-snug text-muted-foreground'>{h.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* How the service works — an actual sequence, so numbering is meaningful */}
          {steps && steps.length > 0 && (
            <section className='space-y-6'>
              <SectionHeading>How the service works</SectionHeading>
              <ol className='space-y-6'>
                {steps.map((step, i) => (
                  <li key={step.title}>
                    <h4 className='text-base font-semibold'>
                      {String(i + 1).padStart(2, "0")} {step.title}
                    </h4>
                    <p className='mt-1.5 text-[15px] leading-relaxed text-muted-foreground'>{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {included && included.length > 0 && (
            <section className='space-y-5'>
              <SectionHeading>What&apos;s included</SectionHeading>
              <IconList items={included} variant='yes' />
            </section>
          )}

          {notIncluded && notIncluded.length > 0 && (
            <section className='space-y-5'>
              <SectionHeading>What&apos;s not included</SectionHeading>
              <IconList items={notIncluded} variant='no' />
            </section>
          )}

          {goodToKnow && goodToKnow.length > 0 && (
            <section className='space-y-5'>
              <SectionHeading>Good to know</SectionHeading>
              <IconList items={goodToKnow} variant='yes' />
            </section>
          )}

          {faqs && faqs.length > 0 && (
            <section className='space-y-2'>
              <SectionHeading>Frequently asked questions</SectionHeading>
              <Accordion className='w-full'>
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className='text-left text-base font-normal hover:no-underline'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-[15px] leading-relaxed text-muted-foreground'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}
        </div>
      </div>

      {/* Sticky footer: price + CTA */}
      <div className='flex items-center justify-end gap-4 border-t bg-background px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]'>
        {/* <p className='text-sm text-muted-foreground'>
          {priceLabel} <span className='block text-xl font-semibold text-foreground sm:inline'>{price}</span>
        </p> */}

        <Link
          href={whatsappUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#25D366] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 text-white font-medium shadow-md transition-all duration-200 group
                       flex items-center justify-center
                        h-10 p-2
                       w-auto sm:h-11 sm:px-6 rounded-xl
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]'
          aria-label='Book us on WhatsApp'
        >
          <div className='flex items-center justify-between sm:gap-3'>
            <div className='flex items-center justify-center sm:gap-2'>
              {/* WhatsApp Icon */}
              <div className='relative w-10 h-10 sm:w-10 sm:h-10 shrink-0'>
                <Image
                  src='/whatsapp_icon.png'
                  alt=''
                  aria-hidden='true'
                  fill
                  sizes='24px'
                  className='object-contain'
                />
              </div>

              {/* Text */}
              <span className='text-left leading-none text-sm font-semibold'>Book Now</span>
            </div>

            {/* External Link Arrow */}
            <ArrowUpRight className='w-4 h-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1' />
          </div>
        </Link>
      </div>
    </>
  );
}
