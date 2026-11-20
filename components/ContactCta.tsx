import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { phoneLink, phoneNumberDisplay, whatsappUrl } from "@/lib/contact";

/** Gradient call-to-action band used at the bottom of service pages. */
export default function ContactCta({
  title,
  description,
  message,
}: {
  title: string;
  description: string;
  /** Pre-filled WhatsApp message */
  message?: string;
}) {
  return (
    <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b7fd1] to-[#12a4e0] px-6 py-12 text-white shadow-[0_20px_60px_rgba(14,165,233,0.35)] sm:px-12 sm:py-16'>
      {/* soft light blooms */}
      <div aria-hidden className='pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl' />
      <div aria-hidden className='pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-[#0B1626]/30 blur-3xl' />

      <div className='relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>{title}</h2>
          <p className='mt-3 text-base text-white/85 sm:text-lg'>{description}</p>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <Link
            href={whatsappUrl(message)}
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#20ba5a] active:scale-95'
          >
            <Image src='/whatsapp_icon.png' alt='' width={28} height={28} className='size-7' />
            WhatsApp Us
          </Link>
          <Link
            href={phoneLink}
            className='flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-6 font-semibold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95'
          >
            <Phone className='size-5' />
            {phoneNumberDisplay}
          </Link>
        </div>
      </div>
    </div>
  );
}
