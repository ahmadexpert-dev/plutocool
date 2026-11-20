import type { Metadata } from "next";

import NavBar from "@/app/NavBar";
import Footer from "@/app/Footer";
import AboutSection from "@/components/about-section";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "https://www.plutocool.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <NavBar />

      <div className='relative flex min-h-screen flex-col bg-sky-700/10 font-sans text-zinc-900'>
        <main className='relative z-10 flex w-full flex-1 flex-col'>
          <PageBanner title='About Us' />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
