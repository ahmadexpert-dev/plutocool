"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { SERVICES, serviceHref } from "@/lib/services";
import { phoneLink, phoneNumberDisplay, whatsappUrl } from "@/lib/contact";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Drop focus after a click so the hover/focus dropdown closes on navigation
const blurActive = () => (document.activeElement as HTMLElement | null)?.blur();

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const onServices = pathname.startsWith("/services");

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-sky-400 ${
      active
        ? "bg-gradient-to-r from-[#0b7fd1] to-[#12a4e0] text-white shadow-md shadow-cyan-500/20"
        : "text-white/80 hover:bg-white/10 hover:text-white"
    }`;

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

        {/* Desktop links — glass pill so they stay readable over light and dark sections */}
        <ul className='hidden xl:flex items-center gap-1 rounded-full border border-white/15 bg-[#0B1626]/75 p-1 shadow-lg shadow-black/20 backdrop-blur-xl'>
          <li>
            <Link href='/' className={linkClass(pathname === "/")}>
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li className='group relative'>
            <Link
              href='/services'
              onClick={blurActive}
              className={`${linkClass(onServices)} flex items-center gap-1.5`}
              aria-haspopup='true'
            >
              Services
              <ChevronDown className='size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180' />
            </Link>

            <div className='invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'>
              <div className='overflow-hidden rounded-2xl border border-white/15 bg-[#0B1626]/95 shadow-2xl shadow-black/40 backdrop-blur-xl'>
                <ul className='grid grid-cols-2 gap-1 p-3'>
                  {SERVICES.map(({ slug, title, summary, icon: Icon }) => {
                    const active = pathname === serviceHref(slug);
                    return (
                      <li key={slug}>
                        <Link
                          href={serviceHref(slug)}
                          onClick={blurActive}
                          className={`flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none ${
                            active ? "bg-white/10" : ""
                          }`}
                        >
                          <span className='flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] text-white shadow-md shadow-cyan-500/20'>
                            <Icon className='size-5' strokeWidth={1.75} />
                          </span>
                          <span>
                            <span className='block text-sm font-semibold text-white'>{title}</span>
                            <span className='mt-0.5 block text-xs leading-snug text-white/55 line-clamp-2'>{summary}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href='/services'
                  onClick={blurActive}
                  className='flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-sky-300 transition-colors hover:text-white'
                >
                  View all services
                  <ArrowRight className='size-4' />
                </Link>
              </div>
            </div>
          </li>

          {NAV_LINKS.slice(1).map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={linkClass(pathname === href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

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
            href={whatsappUrl()}
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

          {/* Menu button — below xl, where the link bar is hidden */}
          <button
            type='button'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            className='xl:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full sm:rounded-xl border border-white/15 bg-[#0B1626]/80 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-[#0B1626] hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'
          >
            <Menu className='size-5' />
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side='right'
          className='w-[88%] gap-0 border-white/10 bg-[#0B1626] p-0 text-white sm:max-w-sm [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/10'
        >
          <div className='flex items-center gap-3 border-b border-white/10 px-5 py-5'>
            <Image src='/company_logo.png' alt='' width={40} height={40} className='size-10 object-contain' />
            <SheetTitle className='bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-base font-extrabold leading-tight tracking-tight text-transparent'>
              PLUTO COOL
              <span className='block text-xs font-semibold tracking-widest'>TECHNICAL SERVICES</span>
            </SheetTitle>
          </div>

          <div className='flex-1 overflow-y-auto px-3 py-4'>
            <ul className='space-y-1'>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      pathname === href ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className='mt-6 px-4 text-xs font-semibold uppercase tracking-widest text-sky-400'>Our Services</p>
            <ul className='mt-2 space-y-1'>
              {SERVICES.map(({ slug, title, icon: Icon }) => {
                const active = pathname === serviceHref(slug);
                return (
                  <li key={slug}>
                    <Link
                      href={serviceHref(slug)}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        active ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] text-white'>
                        <Icon className='size-4' strokeWidth={1.75} />
                      </span>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href='/services'
              onClick={() => setMenuOpen(false)}
              className='mt-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-sky-300 hover:text-white'
            >
              View all services
              <ArrowRight className='size-4' />
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-3 border-t border-white/10 p-4'>
            <Link
              href={phoneLink}
              className='flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-500'
            >
              <Phone className='size-4' />
              Call
            </Link>
            <Link
              href={whatsappUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white hover:bg-[#20ba5a]'
            >
              <Image src='/whatsapp_icon.png' alt='' width={24} height={24} className='size-6' />
              WhatsApp
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
