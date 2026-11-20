import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceHref, type Service } from "@/lib/services";

/** Image card linking to a service page, styled like the homepage service grid. */
export default function ServiceLinkCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const { slug, title, summary, hero, icon: Icon } = service;

  return (
    <Link
      href={serviceHref(slug)}
      className='group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#063353] text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(14,165,233,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0'
    >
      <div className={`relative w-full overflow-hidden bg-[#16263a] ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
          className='object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none'
        />
        {/* dark blue overlay like the homepage cards */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#063353] via-[#063353]/20 to-transparent' />
        <span className='absolute left-4 top-4 flex size-11 items-center justify-center rounded-full border border-white/25 bg-[#0B1626]/60 text-white shadow-lg backdrop-blur-md'>
          <Icon className='size-5' strokeWidth={1.75} />
        </span>
      </div>

      <div className='flex flex-1 flex-col p-5'>
        <h3 className={`font-semibold leading-snug tracking-tight ${compact ? "text-lg" : "text-xl"}`}>{title}</h3>
        {!compact && <p className='mt-2 flex-1 text-sm leading-relaxed text-slate-300'>{summary}</p>}
        <span className='mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors group-hover:text-white'>
          Explore service
          <ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
        </span>
      </div>
    </Link>
  );
}
