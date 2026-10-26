"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

// Fixed: Removed the '+' sign as required by the wa.me API format
const whatsAppPhoneNumber = "971565204977";
const encodedMessage = encodeURIComponent("Hello! I'd like to get more information.");
const whatsappUrl = `https://wa.me/${whatsAppPhoneNumber}?text=${encodedMessage}`;

const phoneNumberDisplay = "+971 56 520 4977";
const phoneLink = "tel:+971565204977";

export default function NavBar() {
  return (
    // Added semantic header element
    <header className='sticky top-0 z-50 w-full border-b border-white/15 bg-[#0B1626]/10 backdrop-blur-md shadow-md'>
      {/* Added <nav> landmark for accessibility */}
      <nav className='flex items-center justify-between w-full px-4 py-4 lg:px-8' aria-label='Main Navigation'>
        {/* Logo & Brand Section */}
        <Link
          href='/'
          className='flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-sky-800 rounded-md'
        >
          <div className='flex gap-3 items-center justify-center'>
            {/* Fixed: Logo scales proportionally with the text instead of being stuck at a massive 100px */}
            <Image
              src='/company_logo.png'
              alt='Pluto Cool Technical Services Logo'
              width={48}
              height={48}
              className='w-14 h-12 sm:w-16 sm:h-18 object-contain'
              priority
            />
            {/* Smoothed out the text scaling steps */}
            <span className='bg-linear-to-r from-sky-800 to-cyan-400 bg-clip-text text-transparent text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight leading-none drop-shadow-sm'>
              PLUTO COOL TECHNICAL SERVICES
            </span>
          </div>
        </Link>

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
      </nav>
    </header>
  );
}
