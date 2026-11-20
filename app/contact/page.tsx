import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import NavBar from "@/app/NavBar";
import Footer from "@/app/Footer";
import PageBanner from "@/components/PageBanner";
import { phoneLink, phoneNumberDisplay, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "https://www.plutocool.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <div className='relative flex min-h-screen flex-col bg-sky-700/10 font-sans text-zinc-900'>
        <main className='relative z-10 flex w-full flex-1 flex-col'>
          <PageBanner title='Contact Us' />

          <section className='w-full py-20 sm:py-24'>
            <ul className='mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8'>
              {/* WhatsApp */}
              <li>
                <Link
                  href={whatsappUrl()}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex h-full flex-col items-center rounded-3xl bg-[#063353] p-10 text-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]'
                >
                  <span className='flex size-20 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/30'>
                    <Image src='/whatsapp_icon.png' alt='' width={56} height={56} className='size-14' />
                  </span>
                  <span className='mt-6 text-2xl font-bold'>WhatsApp</span>
                  <span className='mt-2 text-lg text-slate-300'>{phoneNumberDisplay}</span>
                  <span className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-semibold transition-colors group-hover:bg-[#20ba5a]'>
                    Chat on WhatsApp
                    <ArrowUpRight className='size-4' />
                  </span>
                </Link>
              </li>

              {/* Call */}
              <li>
                <Link
                  href={phoneLink}
                  className='group flex h-full flex-col items-center rounded-3xl bg-[#063353] p-10 text-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(14,165,233,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'
                >
                  <span className='flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0b7fd1] to-[#12a4e0] shadow-lg shadow-cyan-500/30'>
                    <Phone className='size-9' />
                  </span>
                  <span className='mt-6 text-2xl font-bold'>Call</span>
                  <span className='mt-2 text-lg text-slate-300'>{phoneNumberDisplay}</span>
                  <span className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 font-semibold transition-colors group-hover:bg-sky-500'>
                    <Phone className='size-4' />
                    Call Now
                  </span>
                </Link>
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
