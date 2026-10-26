import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import Footer from "./Footer";
import CardGridSection from "@/components/card-grid-section";
import AboutSection from "@/components/about-section";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Pluto Cool Technical Services",
    image: "https://www.plutocool.com/images/logo.jpg", // Replace with your actual logo/shop image url
    "@id": "https://www.plutocool.com/#business",
    url: "https://www.plutocool.com",
    telephone: "+971500000000", // Replace with your actual Dubai phone number
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Office Street Address", // e.g., "Al Quoz Industrial Area 3"
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048", // Replace with your precise coordinates if known
      longitude: "55.2708",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/plutocool", // Add your social links if you have them
      "https://www.instagram.com/plutocool",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Dubai",
    },
  };

  return (
    <>
      {/* Injecting JSON-LD Schema to the head */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Sticky/Fixed Navigation Bar */}
      <NavBar />
      {/*homepage UI starts here */}
      <div className='relative flex min-h-screen flex-col bg-sky-700/10 font-sans text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-50'>
        {/* Main Content Area */}
        <main className='relative flex flex-1 flex-col w-full items-center justify-start z-10'>
          <HeroSection />
          <CardGridSection />
          <DetailedServicesSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
