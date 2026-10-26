"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Wrench, ShieldCheck, PlugZap, CheckCircle2 } from "lucide-react";

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

const GasRefillSchematic = memo(function GasRefillSchematic() {
  return (
    <svg viewBox='0 0 400 240' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full opacity-85'>
      {/* Refrigerant Canister */}
      <rect
        x='80'
        y='60'
        width='80'
        height='120'
        rx='16'
        fill='#0F172A'
        stroke='#10B981'
        strokeWidth='2'
        strokeDasharray='6 6'
      />
      <rect x='105' y='40' width='30' height='20' rx='4' fill='#1E293B' stroke='#34D399' strokeWidth='1.5' />
      {/* Manifold Gauge Dial */}
      <circle cx='270' cy='110' r='45' fill='#0F172A' stroke='#10B981' strokeWidth='2' />
      <circle cx='270' cy='110' r='35' stroke='#059669' strokeWidth='1' strokeDasharray='4 4' />
      {/* Gauge Needle */}
      <path d='M270 110 L290 85' stroke='#34D399' strokeWidth='3' strokeLinecap='round' />
      <circle cx='270' cy='110' r='6' fill='#34D399' />
      {/* Connecting Hose Line */}
      <path d='M120 40 V25 C120 15, 270 15, 270 65' stroke='#34D399' strokeWidth='2' strokeLinecap='round' />
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
  schematic: React.ElementType;
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
    id: "AC Deep Cleaning",
    title: "AC Deep Cleaning",
    subtitle:
      "High-pressure coil washing and anti-bacterial flushing to restore fresh air and peak cooling efficiency.",
    description:
      "In Dubai's dusty and humid environment, AC coils quickly become clogged with dust, mold spores, and grime. Our deep sanitization service flushes out internal evaporator coils, cleans condensate drain trays, and sanitizes blower fans to stop foul odors and reduce monthly DEWA power bills.",
    icon: Droplets,
    schematic: DeepCleaningSchematic,
    placeholderFilename: "/deep_clean.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "High-Pressure Jet Washing",
        detail: "Deeply flushes caked dust & allergens from indoor evaporator coil fins.",
      },
      {
        title: "Anti-Bacterial Foam Treatment",
        detail: "Eliminates mold spores, bacteria, and persistent musty AC odors.",
      },
      {
        title: "Condensate Drain Line Unclogging",
        detail: "Clears line blockages to prevent indoor water dripping and ceiling damage.",
      },
      {
        title: "Airflow Velocity Boost",
        detail: "Restores maximum airflow output for faster, ice-cold room cooling.",
      },
    ],
  },
  {
    id: "AC Repair & Diagnostics",
    title: "AC Repair & Diagnostics",
    subtitle: "24/7 rapid troubleshooting across Dubai to fix breakdowns, gas leaks, and compressor faults.",
    description:
      "When your AC suddenly stops cooling or starts spitting water, our certified mobile technicians arrive with digital diagnostic equipment and genuine OEM replacement parts to resolve electrical, capacitor, thermostat, or compressor issues on the spot.",
    icon: Wrench,
    schematic: RepairSchematic,
    placeholderFilename: "/repair.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "24/7 Mobile Emergency Dispatch",
        detail: "On-site technicians dispatched quickly across all major Dubai communities.",
      },
      {
        title: "Precision Electrical Diagnostics",
        detail: "Digital checks pinpoint relay, start capacitor, and PCB control board faults.",
      },
      {
        title: "Water Leak Repair & Sealing",
        detail: "Stops indoor unit water dripping, rattling noises, and coil freezing.",
      },
      {
        title: "90-Day Service Guarantee",
        detail: "Comprehensive warranty covering all replaced components and labor.",
      },
    ],
  },
  {
    id: "Maintenance & Gas Refill",
    title: "Maintenance & Gas Refill",
    subtitle: "Seasonal tune-ups and factory R410A/R22 gas charging to keep cooling sub-zero quiet.",
    description:
      "Low refrigerant pressure forces your compressor to work extra hard under Dubai's harsh summer heat, leading to lukewarm airflow and motor burnouts. Our tune-ups include nitrogen leak detection, R410A/R22 gas top-ups, and compressor electrical calibration.",
    icon: ShieldCheck,
    schematic: GasRefillSchematic,
    placeholderFilename: "/gas_fill.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Precision Refrigerant Top-Up",
        detail: "Pure R410A / R22 gas refill restored to exact manufacturer pressure specs.",
      },
      {
        title: "Nitrogen Gas Leak Testing",
        detail: "Identifies micro-cracks in copper pipes before expensive refrigerant loss.",
      },
      {
        title: "Compressor Amp & Volt Calibration",
        detail: "Extends compressor motor lifespan and prevents electrical trips.",
      },
      {
        title: "Annual Maintenance Contracts",
        detail: "Quarterly scheduled checkups for total seasonal peace of mind.",
      },
    ],
  },
  {
    id: "Installation & Moving",
    title: "Installation & Relocation",
    subtitle: "Seamless mounting, insulated copper trunking, and vacuum testing for split & inverter units.",
    description:
      "Moving to a new villa or upgrading to an energy-saving Inverter AC system? Our installation engineers ensure solid mounting bracket isolation, flare joint seal tightness, insulated line trunking, and vacuum pressure testing for clean visual integration.",
    icon: PlugZap,
    schematic: InstallationSchematic,
    placeholderFilename: "/installation.png",
    accentText: "text-sky-400",
    glowBorder: "hover:border-sky-400/40",
    problems: [
      {
        title: "Heavy-Duty Bracket Mounting",
        detail: "Vibration-dampened wall and roof fixings for quiet indoor operation.",
      },
      {
        title: "Insulated Copper Line Trunking",
        detail: "High-grade thermal insulation eliminates sweating and wall moisture.",
      },
      {
        title: "Smart Inverter Upgrades",
        detail: "Modern inverter unit setups that cut summer DEWA power consumption by 40%.",
      },
      {
        title: "Clean Relocation & Pump-Down",
        detail: "Safe refrigerant recovery and damage-free transit during house moves.",
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
            Our Specialized AC Services
          </h2>
          <p className='mt-4 text-sm sm:text-base text-zinc-600 dark:text-white/70'>
            In-depth technical cooling solutions engineered specifically for Dubai’s extreme heat, sand, and humidity.
          </p>
        </div>

        {/* 4 Alternating Service Breakdown Cards */}
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
