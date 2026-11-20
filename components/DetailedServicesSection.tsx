"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Wrench, PlugZap, CheckCircle2, Building2, Paintbrush, Wind } from "lucide-react";

// ---------------------------------------------------------------------------
// Technical SVG Schematics for Image Placeholders
// ---------------------------------------------------------------------------

const DeepCleaningSchematic = memo(function DeepCleaningSchematic() {
  return (
    <svg viewBox='0 0 400 240' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full opacity-85'>
      {/* AC Indoor Unit Outer Chassis */}
      <rect
        x='50'
        y='40'
        width='300'
        height='110'
        rx='16'
        fill='#0F172A'
        stroke='#38BDF8'
        strokeWidth='2'
        strokeDasharray='6 6'
      />
      {/* Front Louver Vent */}
      <rect x='70' y='115' width='260' height='18' rx='6' fill='#1E293B' stroke='#0EA5E9' strokeWidth='1.5' />
      {/* Evaporator Coil Fins */}
      <path d='M80 60 H320 M80 75 H320 M80 90 H320' stroke='#0284C7' strokeWidth='2' strokeLinecap='round' />
      {/* Pressure Spray Nozzle Illustration */}
      <circle cx='200' cy='175' r='22' fill='#0284C7' fillOpacity='0.2' stroke='#38BDF8' strokeWidth='2' />
      <path
        d='M200 153 V125 M190 135 L200 125 L210 135'
        stroke='#7DD3FC'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Spray droplets */}
      <circle cx='185' cy='100' r='3' fill='#7DD3FC' />
      <circle cx='200' cy='92' r='4' fill='#38BDF8' />
      <circle cx='215' cy='100' r='3' fill='#7DD3FC' />
    </svg>
  );
});

const RepairSchematic = memo(function RepairSchematic() {
  return (
    <svg viewBox='0 0 400 240' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full opacity-85'>
      {/* Circuit Board Base */}
      <rect
        x='60'
        y='40'
        width='280'
        height='150'
        rx='14'
        fill='#0F172A'
        stroke='#F59E0B'
        strokeWidth='2'
        strokeDasharray='6 6'
      />
      {/* Microchip / Capacitor */}
      <rect x='100' y='70' width='60' height='60' rx='10' fill='#1E293B' stroke='#FBBF24' strokeWidth='1.5' />
      <circle cx='130' cy='100' r='14' fill='#F59E0B' fillOpacity='0.2' stroke='#F59E0B' strokeWidth='2' />
      {/* Multimeter Probe Connection Trace Lines */}
      <path d='M160 100 H240 M240 100 V140 H290' stroke='#FBBF24' strokeWidth='2' strokeLinecap='round' />
      <circle cx='240' cy='100' r='4' fill='#F59E0B' />
      <circle cx='290' cy='140' r='4' fill='#FBBF24' />
      {/* Wrench Diagnostics Indicator */}
      <path d='M250 65 L275 90 M270 65 L245 90' stroke='#F59E0B' strokeWidth='2.5' strokeLinecap='round' />
    </svg>
  );
});

const InstallationSchematic = memo(function InstallationSchematic() {
  return (
    <svg viewBox='0 0 400 240' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full opacity-85'>
      {/* Wall Bracket & AC Unit Mounting Line */}
      <rect
        x='60'
        y='50'
        width='280'
        height='100'
        rx='14'
        fill='#0F172A'
        stroke='#6366F1'
        strokeWidth='2'
        strokeDasharray='6 6'
      />
      <path d='M80 150 V185 H120 M320 150 V185 H280' stroke='#818CF8' strokeWidth='2' strokeLinecap='round' />
      {/* Insulated Copper Trunking Duct */}
      <path d='M300 80 H360 V200' stroke='#A5B4FC' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
      {/* Smart Inverter Pulse Wave */}
      <path d='M100 100 Q 130 70, 160 100 T 220 100 T 280 100' stroke='#6366F1' strokeWidth='2' fill='none' />
    </svg>
  );
});

// ---------------------------------------------------------------------------
// Services Data Definition
// ---------------------------------------------------------------------------

interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  schematic?: React.ElementType;
  placeholderFilename: string;
  accentText: string;
  glowBorder: string;
  problems: {
    title: string;
    detail: string;
  }[];
}

const SERVICES_DATA: DetailedService[] = [
  {
    id: "AC Repair & Maintenance",
    title: "AC Repair & Maintenance",
    subtitle: "Troubleshooting, repairs, and routine servicing for all types of AC units.",
    description:
      "When your AC stops cooling, leaks water, or makes unusual noises, our technicians use diagnostic equipment to find and fix electrical, capacitor, thermostat, or compressor issues. Routine maintenance covers filter cleaning, drain flushing, refrigerant checks, and electrical inspections.",
    icon: Wrench,
    schematic: RepairSchematic,
    placeholderFilename: "/repair.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Fault Diagnosis",
        detail: "Checks on relays, capacitors, sensors, and PCB control boards.",
      },
      {
        title: "Water Leak Repair",
        detail: "Clearing blocked drains and fixing indoor unit dripping.",
      },
      {
        title: "Refrigerant Checks & Top-Up",
        detail: "R410A / R22 gas pressure checks, leak detection, and refilling.",
      },
      {
        title: "Routine Servicing",
        detail: "Filter washing, drain flushing, and electrical inspections.",
      },
    ],
  },
  {
    id: "AC Duct & Coil Cleaning",
    title: "AC Duct & Coil Cleaning",
    subtitle: "Coil washing, duct cleaning, and sanitization of the complete AC system.",
    description:
      "In Dubai's dusty and humid environment, AC coils and ducts collect dust, mold spores, and grime. Our cleaning service covers evaporator and condenser coils, blower fans, condensate drain trays, ductwork, grilles, and diffusers.",
    icon: Droplets,
    schematic: DeepCleaningSchematic,
    placeholderFilename: "/deep_clean.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Coil Washing",
        detail: "Cleaning of indoor evaporator and outdoor condenser coils.",
      },
      {
        title: "Duct Brushing & Vacuuming",
        detail: "Removal of dust and debris from supply and return ducts.",
      },
      {
        title: "Sanitization",
        detail: "Anti-bacterial treatment of coils, drain trays, and blower fans.",
      },
      {
        title: "Grilles & Diffusers",
        detail: "Cleaning of all air outlets and return vents.",
      },
    ],
  },
  {
    id: "MEP Services / AMC",
    title: "MEP Services / AMC",
    subtitle: "Mechanical, electrical, and plumbing works, with annual maintenance contracts.",
    description:
      "Our MEP team works on the systems that keep a property running: air conditioning, electrical panels, lighting, water pumps, and plumbing. An Annual Maintenance Contract covers scheduled preventive maintenance of these systems through the year, for villas, apartments, offices, and commercial buildings.",
    icon: Building2,
    placeholderFilename: "/grid/annual-maintenance.jpeg",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Mechanical Works",
        detail: "Maintenance and repair of AC and ventilation equipment.",
      },
      {
        title: "Electrical Works",
        detail: "DB checks, sockets, switches, and lighting.",
      },
      {
        title: "Plumbing Works",
        detail: "Leak repairs, water heaters, pumps, and fixtures.",
      },
      {
        title: "Annual Maintenance Contracts",
        detail: "Scheduled preventive maintenance visits through the year.",
      },
    ],
  },
  {
    id: "AC Installation & Repair",
    title: "AC Installation & Repair",
    subtitle: "Mounting, insulated copper piping, and vacuum testing for split, inverter, and ducted units.",
    description:
      "Whether you are moving to a new villa or replacing an old unit, our installation team handles bracket mounting, flare joint sealing, insulated line trunking, and vacuum pressure testing. We also repair faulty existing installations and relocate units.",
    icon: PlugZap,
    schematic: InstallationSchematic,
    placeholderFilename: "/installation.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Bracket Mounting",
        detail: "Wall and roof fixings for indoor and outdoor units.",
      },
      {
        title: "Insulated Copper Piping",
        detail: "Thermal insulation on refrigerant lines and drain piping.",
      },
      {
        title: "Inverter AC Installation",
        detail: "Installation and replacement of inverter split units.",
      },
      {
        title: "Relocation & Pump-Down",
        detail: "Refrigerant recovery, removal, and reinstallation of units.",
      },
    ],
  },
  {
    id: "Painting Services",
    title: "Painting Services",
    subtitle: "Interior and exterior painting with surface preparation and priming.",
    description:
      "From a single room to a full villa or office, our painters cover floors and furniture, fill cracks and holes, sand and prime surfaces, and paint walls, ceilings, doors, and trims. We also paint villa exteriors and boundary walls.",
    icon: Paintbrush,
    placeholderFilename: "/services/painting-exterior.jpg",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Surface Preparation",
        detail: "Crack filling, sanding, and priming.",
      },
      {
        title: "Interior Painting",
        detail: "Walls, ceilings, doors, and skirting.",
      },
      {
        title: "Exterior Painting",
        detail: "Villa exteriors and boundary walls.",
      },
      {
        title: "Protection & Clean-Up",
        detail: "Floors and furniture covered, and the area cleaned afterwards.",
      },
    ],
  },
  {
    id: "Ducting / HVAC & VAV",
    title: "Ducting / HVAC & VAV",
    subtitle: "Ductwork installation, VAV servicing, and airflow balancing.",
    description:
      "Warm rooms and noisy vents are often caused by leaking, undersized, or unbalanced ductwork. Our HVAC team fabricates and installs insulated ducts, installs and services VAV boxes and dampers, and balances airflow zone by zone for villas, offices, and commercial buildings.",
    icon: Wind,
    placeholderFilename: "/services/hvac-indoor.jpg",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Duct Fabrication & Installation",
        detail: "Insulated and sealed ductwork for new and existing systems.",
      },
      {
        title: "VAV Box Servicing",
        detail: "Installation, repair, and calibration of VAV boxes, dampers, and controls.",
      },
      {
        title: "Airflow Balancing",
        detail: "Airflow adjusted across each room and zone.",
      },
      {
        title: "Leak Sealing & Insulation",
        detail: "Sealing of duct joints and repair of insulation.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function DetailedServicesSection() {
  return (
    <section className='relative w-full overflow-hidden bg-sky-700/10 dark:bg-zinc-950 py-20 text-zinc-900 dark:text-zinc-50 font-sans'>
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header Matching Hero Typography */}
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-sky-800 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-sky-200'>
            Our Specialized Services
          </h2>
          <p className='mt-4 text-sm sm:text-base text-zinc-600 dark:text-white/70'>
            In-depth technical solutions engineered specifically for Dubai’s extreme heat, sand, and humidity.
          </p>
        </div>

        {/* Alternating Service Breakdown Cards */}
        <div className='space-y-20 lg:space-y-28'>
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0; // Alternates layout: false = Img Left, true = Img Right

            return (
              <div
                key={service.id}
                className='transform-gpu will-change-transform grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12'
              >
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: isReversed ? 300 : -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className={`group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl  dark:bg-[#0B1626]/90 ${service.glowBorder}`}
                  >
                    {/* Top Header inside Frame */}

                    <Image
                      src={service.placeholderFilename}
                      alt={`Illustration of ${service.title} service`}
                      fill
                      className='object-cover   w-full h-full'
                    />
                  </motion.div>
                </div>

                {/* --- SERVICE DETAILS & ACTION BLOCK --- */}
                <div
                  className={`flex flex-col justify-center lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Service Title */}
                  <h3 className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl'>
                    {service.title}
                  </h3>

                  {/* Subtitle Tagline */}
                  <p className={`mt-2 text-sm font-semibold sm:text-base ${service.accentText}`}>{service.subtitle}</p>

                  {/* Detailed Description */}
                  <p className='mt-3 text-sm leading-relaxed text-zinc-700 dark:text-white/70'>{service.description}</p>

                  {/* Checklist Items styled matching Hero Service Cards */}
                  <div className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2'>
                    {service.problems.map((item, idx) => (
                      <div
                        key={idx}
                        className='flex items-start gap-2.5 rounded-2xl border border-white/20 bg-white/10 p-3 text-left shadow-sm backdrop-blur-md dark:bg-white/5 dark:border-white/10'
                      >
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${service.accentText}`} />
                        <div>
                          <h4 className='text-xs font-semibold text-zinc-900 dark:text-white'>{item.title}</h4>
                          <p className='mt-0.5 text-[11px] leading-snug text-zinc-600 dark:text-white/60'>
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
