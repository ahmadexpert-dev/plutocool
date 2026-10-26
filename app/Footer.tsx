"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowUpRight, Mail } from "lucide-react";

// ── Contact config ──────────────────────────────────────────────────────────

// Fixed: Removed the '+' sign as required by the wa.me API format
const whatsAppPhoneNumber = "971565204977";
const encodedMessage = encodeURIComponent("Hello! I'd like to get more information.");
const whatsappUrl = `https://wa.me/${whatsAppPhoneNumber}?text=${encodedMessage}`;

const phoneNumberDisplay = "+971 56 520 4977";
const phoneLink = "tel:+971565204977";

const SERVICES = [
  "AC Repair & Maintenance",
  "AC Coil & Duct Cleaning",
  "MEP & AMC Services",
  "AC Installation & Repair",
  "Painting Services",
  "Ducting, VAV & HAVC Services",
];

const YEAR = new Date().getFullYear();

// ── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className='w-full bg-[#070e1a] border-t border-white/10 text-white/80'>
      {/* ── Top strip: WhatsApp CTA ─────────────────────────────────────── */}
      <div className='bg-[#0B1626] border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-white/70 text-center sm:text-left'>
            Need a technician? <span className='text-white font-medium'>We are available 24 / 7 across Dubai.</span>
          </p>
          {/* Right side CTA / Actions */}
          <div className='flex items-center gap-3'>
            {/* Phone CTA — mobile: sky-blue circular icon button, desktop: glass pill with number */}
            <Link
              href={phoneLink}
              aria-label={`Call us at ${phoneNumberDisplay}`}
              className='flex items-center justify-center gap-2 text-white font-medium shadow-md transition-all duration-200
                       w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-500 hover:scale-105 active:scale-95
                       sm:w-auto sm:h-11 sm:px-5 sm:rounded-xl sm:bg-sky-600 sm:hover:bg-sky-500 sm:border sm:border-sky-500/40
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'
            >
              <Phone className='w-5 h-5 flex-shrink-0 text-white sm:text-sky-300' aria-hidden='true' />
              <span className='hidden sm:block text-sky-200 text-sm font-semibold tracking-wide'>
                {phoneNumberDisplay}
              </span>
            </Link>

            {/* WhatsApp CTA */}
            <Link
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#25D366] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 text-white font-medium shadow-md transition-all duration-200 group
                       flex items-center justify-center
                       w-10 h-10 p-0 rounded-full
                       sm:w-auto sm:h-11 sm:px-6 sm:rounded-xl
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]'
              aria-label='Contact us on WhatsApp'
            >
              <div className='flex items-center justify-between sm:gap-3'>
                <div className='flex items-center justify-center sm:gap-2'>
                  {/* WhatsApp Icon */}
                  <div className='relative w-10 h-10 sm:w-10 sm:h-10 flex-shrink-0'>
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
                  <span className='hidden sm:block text-left leading-none text-sm font-semibold'>WhatsApp</span>
                </div>

                {/* External Link Arrow */}
                <ArrowUpRight className='hidden sm:block w-4 h-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main grid ───────────────────────────────────────────────────── */}
      <div className='mx-auto max-w-6xl px-5 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Brand column */}
        <div className='flex flex-col gap-4'>
          <Link href='/' className='flex items-center gap-3 w-fit'>
            <Image
              src='/company_logo.png'
              alt='Pluto Cool Technical Services Logo'
              width={40}
              height={40}
              className='w-10 h-10 object-contain'
            />
            <span className='bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent text-base font-extrabold tracking-tight leading-tight'>
              PLUTO COOL
              <br />
              <span className='text-xs font-semibold tracking-widest'>TECHNICAL SERVICES</span>
            </span>
          </Link>
          <p className='text-sm text-white/55 leading-relaxed max-w-xs'>
            Dubai trusted AC specialists — cleaning, repair, gas refill, and installation done right the first time.
          </p>
          {/* Social proof badge */}
          <div className='flex items-center gap-2 mt-1'>
            <span className='flex'>
              {["★", "★", "★", "★", "★"].map((s, i) => (
                <span key={i} className='text-[#D8A657] text-sm'>
                  {s}
                </span>
              ))}
            </span>
            <span className='text-xs text-white/50'>5-star rated in Dubai</span>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3 className='text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4'>Our Services</h3>
          <ul className='space-y-2.5'>
            {SERVICES.map((service) => (
              <li key={service}>
                <span className='text-sm text-white/60 hover:text-white transition-colors duration-150 cursor-default'>
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3 className='text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4'>Contact</h3>
          <ul className='space-y-3.5'>
            <li>
              <Link
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group'
              >
                <Phone className='w-4 h-4 mt-0.5 text-sky-400 shrink-0' strokeWidth={1.75} />
                <span>{phoneNumberDisplay}</span>
              </Link>
            </li>
            {/* <li>
              <Link
                href='mailto:hello@plutocool.com'
                className='flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors'
              >
                <Mail className='w-4 h-4 mt-0.5 text-sky-400 shrink-0' strokeWidth={1.75} />
                <span>hello@plutocool.com</span>
              </Link>
            </li> */}
            <li className='flex items-start gap-3 text-sm text-white/60'>
              <MapPin className='w-4 h-4 mt-0.5 text-sky-400 shrink-0' strokeWidth={1.75} />
              <span>Dubai, United Arab Emirates</span>
            </li>
            <li className='flex items-start gap-3 text-sm text-white/60'>
              <Clock className='w-4 h-4 mt-0.5 text-sky-400 shrink-0' strokeWidth={1.75} />
              <span>Available 24 / 7 · Every day</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-6xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35'>
          <span>© 2026 Pluto Cool Technical Services. All rights reserved.</span>
          <span>Dubai, UAE · Licensed HVAC Contractor</span>
        </div>
      </div>
    </footer>
  );
}
