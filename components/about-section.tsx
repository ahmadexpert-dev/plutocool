"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, CircleCheck, House, UserCog, BadgeDollarSign } from "lucide-react";
import { section } from "motion/react-client";

/* ------------------------------------------------------------------ */
/* Types & default content – edit freely or pass your own via props    */
/* ------------------------------------------------------------------ */

type SectionImage = { src: string; alt: string };

type AboutSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  checklist?: string[];
  years?: string;
  growthText?: string;
  /** Avatars shown in the stats card (any number, 3 looks best) */
  avatars?: SectionImage[];
  /** Top image in the middle column */
  imageTop?: SectionImage;
  /** Tall image in the right column */
  imageTall?: SectionImage;
  imageDown?: SectionImage;
  className?: string;
};

const defaultChecklist = [
  "Licensed AC Contractors",
  "Municipality Approved Standards",
  "Transparent Upfront Pricing",
  "24/7 Emergency Support",
];

const highlights = [
  { label: "Fully Licensed", Icon: BadgeCheck },
  { label: "Certified Expert", Icon: UserCog },
  { label: "Transparent Pricing", Icon: BadgeDollarSign },
  { label: "100% Satisfaction", Icon: House },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function AboutSection({
  eyebrow = "About Pluto Cool",
  title = "Your Trusted Local AC Specialists",
  description = "With years of experience serving the Dubai community, Pluto Cool Technical Services has built a reputation for excellence, reliability, and technical expertise. We understand the critical importance of a functioning AC in the UAE. Our team of certified technicians is committed to delivering high-quality cooling solutions for villas, apartments, and commercial spaces. Every project is backed by our comprehensive satisfaction guarantee.",
  checklist = defaultChecklist,
  years = "15+ Years",
  growthText = "We are growing with happy clients",
  avatars = [
    { src: "/images/avatar-1.jpg", alt: "Happy client" },
    { src: "/images/avatar-2.jpg", alt: "Happy client" },
    { src: "/images/avatar-3.jpg", alt: "Happy client" },
  ],
  imageTop = { src: "/about/1.jpg", alt: "Smiling AC technician holding a tablet" },
  imageTall = { src: "/about/3.webp", alt: "Technician servicing an outdoor AC unit" },
  imageDown = { src: "/about/2.jpeg", alt: "Technician servicing an outdoor AC unit" },
  className = "",
}: AboutSectionProps) {
  return (
    <section className={`relative overflow-hidden bg-[#16263a] py-16 text-white w-full sm:py-24 ${className}`}>
      {/* soft cyan glow, echoing the hero's cool-air effect */}
      <div
        aria-hidden
        className='pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#12a4e0]/10 blur-3xl'
      />

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* ---------------- Left: copy ---------------- */}
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#12a4e0]'>{eyebrow}</p>

            <h2 className='mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>{title}</h2>

            <p className='mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg'>{description}</p>

            <ul className='mt-8 space-y-3'>
              {checklist.map((item) => (
                <li key={item} className='flex items-center gap-3 text-slate-200'>
                  <CircleCheck className='size-6 shrink-0 fill-[#12a4e0] text-[#16263a]' aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Right: image collage ---------------- */}
          <div className='grid grid-cols-2 gap-4 sm:gap-6'>
            {/* middle column */}
            <div className='flex flex-col gap-4 sm:gap-6'>
              <div className='relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#1e3248]'>
                <Image
                  src={imageTop.src}
                  alt={imageTop.alt}
                  fill
                  sizes='(min-width: 1024px) 22vw, 45vw'
                  className='object-cover'
                />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16263a]/50 to-transparent' />
              </div>

              <div className='relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#1e3248]'>
                <Image
                  src={imageDown.src}
                  alt={imageDown.alt}
                  fill
                  sizes='(min-width: 1024px) 22vw, 45vw'
                  className='object-cover'
                />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16263a]/50 to-transparent' />
              </div>
            </div>

            {/* tall column */}
            <div className='relative min-h-[28rem] overflow-hidden rounded-2xl border border-white/15 bg-[#1e3248]'>
              <Image
                src={imageTall.src}
                alt={imageTall.alt}
                fill
                sizes='(min-width: 1024px) 22vw, 45vw'
                className='object-cover'
              />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16263a]/50 to-transparent' />
            </div>
          </div>
        </div>

        {/* ---------------- Bottom: highlights ---------------- */}
        <div className='mt-16 border-t border-white/10 pt-10 sm:mt-20'>
          <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {highlights.map(({ label, Icon }) => (
              <li key={label} className='flex items-center gap-4'>
                <span className='flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] text-white shadow-lg shadow-cyan-500/20'>
                  <Icon className='size-6' aria-hidden />
                </span>
                <span className='text-lg font-semibold'>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
