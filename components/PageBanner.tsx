import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Photo banner with breadcrumb and title, used at the top of inner pages. */
export default function PageBanner({ title, image = "/final_hero_background.png" }: { title: string; image?: string }) {
  return (
    <section className='relative w-full overflow-hidden'>
      <Image src={image} alt='' fill priority sizes='100vw' className='object-cover' />
      <div className='absolute inset-0 bg-sky-900/30' />
      <div className='absolute inset-0 bg-gradient-to-r from-[#0B1626]/95 via-[#0B1626]/70 to-[#0B1626]/10' />

      <div className='relative mx-auto flex min-h-[36svh] max-w-7xl flex-col justify-center px-4 py-14 sm:min-h-[320px] sm:px-6 lg:px-8'>
        <nav aria-label='Breadcrumb' className='mb-6 flex items-center gap-1.5 text-sm text-white/65'>
          <Link href='/' className='hover:text-white'>
            Home
          </Link>
          <ChevronRight className='size-4' />
          <span className='text-white' aria-current='page'>
            {title}
          </span>
        </nav>
        <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl'>
          {title}
        </h1>
      </div>
    </section>
  );
}
