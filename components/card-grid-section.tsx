"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplets,
  Fan,
  Paintbrush,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Thermometer,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ServiceDetailContent, { type ServiceDetail } from "./service-detail-content";
import { serviceHref } from "@/lib/services";

type Item = {
  id: string;
  /** Matches a slug in lib/services for the full service page */
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  detail: ServiceDetail;
};

/* -------------------------------------------------------------------------- */
/*  DATA — edit this. One entry per card; `detail` fills the sheet.           */
/*  Any optional section you leave out (or set to []) is simply not rendered. */
/* -------------------------------------------------------------------------- */

const ITEMS: Item[] = [
  /* ----------------------- 1. AC Repair & Maintenance ---------------------- */
  {
    id: "1",
    slug: "ac-repair-maintenance",
    title: "AC Repair & Maintenance",
    description:
      "Diagnosis and repair of cooling problems, water leaks, and electrical faults, plus routine servicing of indoor and outdoor units.",
    image: "/grid/ac-repair.png",
    alt: "Technician repairing and servicing an AC unit",
    detail: {
      highlights: [
        { label: "Split & window units", icon: Snowflake },
        { label: "Ducted & cassette units", icon: Fan },
        { label: "Homes & businesses", icon: Building2 },
      ],
      steps: [
        {
          title: "Inspection & diagnosis",
          description:
            "The technician checks airflow, cooling, gas pressure, drainage, and the electrical components to find the cause of the fault.",
        },
        {
          title: "Quote",
          description: "The technician explains the problem and the work needed before starting.",
        },
        {
          title: "Repair & servicing",
          description:
            "Faulty parts such as capacitors, fan motors, sensors, or control boards are repaired or replaced. Filters are washed, the drain line is flushed, and the outdoor unit is rinsed.",
        },
        {
          title: "Testing",
          description: "The unit is run to check cooling and airflow, and the work area is cleaned.",
        },
      ],
      included: [
        "Diagnostic inspection of the indoor and outdoor units",
        "Washing and cleaning of air filters",
        "Drain line check and flushing",
        "Refrigerant pressure, temperature, and electrical checks",
        "Repair or replacement of faulty components",
        "Cooling test after the work",
      ],
      notIncluded: [
        "Deep coil and duct cleaning (available as AC Duct & Coil Cleaning)",
        "Installation, relocation, or replacement of the entire unit",
      ],
      faqs: [
        {
          question: "My AC is running but not cooling. What could be wrong?",
          answer:
            "Common causes include dirty filters or coils, low refrigerant, a failing capacitor, or a blocked drain. A technician needs to inspect the unit to confirm the exact cause.",
        },
        {
          question: "Why is water leaking from my indoor unit?",
          answer:
            "It is usually a blocked or disconnected drain line, a dirty filter causing the coil to freeze, or a damaged drain tray.",
        },
        {
          question: "Do you repair all AC brands and types?",
          answer: "We service split, window, ducted, and cassette units from all major brands.",
        },
      ],
      ctaHref: "/book?service=ac-repair-maintenance",
    },
  },

  /* ----------------------- 2. AC Duct & Coil Cleaning ---------------------- */
  {
    id: "2",
    slug: "ac-duct-coil-cleaning",
    title: "AC Duct & Coil Cleaning",
    description: "Cleaning and sanitization of AC coils, blower fans, drain trays, ducts, grilles, and diffusers.",
    image: "/grid/duct-cleaning.jpeg",
    alt: "Technician cleaning AC ducts and coils",
    detail: {
      highlights: [
        { label: "Coils & blower fans", icon: Fan },
        { label: "Supply & return ducts", icon: Wind },
        { label: "Grilles & diffusers", icon: Sparkles },
      ],
      steps: [
        {
          title: "Protection",
          description:
            "The team wears PPE, covers the floor and furniture, and isolates the working area with plastic covering.",
        },
        {
          title: "Coil & indoor unit cleaning",
          description: "Filters, evaporator coil, blower fan, drain tray, and drain pipe are cleaned and sanitized.",
        },
        {
          title: "Duct & vent cleaning",
          description:
            "Ducts are brushed and vacuumed with specialist equipment, and the grilles and diffusers are cleaned and sanitized.",
        },
        {
          title: "Clean-up & testing",
          description: "Waste is collected and removed, and the system is checked for cooling and airflow.",
        },
      ],
      included: [
        "Cleaning and sanitization of evaporator and condenser coils",
        "Blower fan, drain tray, and drain pipe cleaning",
        "Duct brushing and vacuuming",
        "Grille and diffuser cleaning with sanitization",
        "Airflow and cooling check",
      ],
      notIncluded: [
        "Repair or replacement of damaged parts and refrigerant gas",
        "Mold removal or treatment",
        "Installation, relocation, or any services outside of cleaning",
      ],
      faqs: [
        {
          question: "What is the difference between coil cleaning and duct cleaning?",
          answer:
            "Coil cleaning covers the indoor and outdoor units: the coils, blower fan, and drain tray. Duct cleaning covers the ducts that carry air to each room, along with the grilles and diffusers.",
        },
        {
          question: "What are the signs that my ducts need cleaning?",
          answer:
            "Dust coming out of the vents, weak airflow in some rooms, musty smells when the AC runs, or recent renovation work in the property.",
        },
        {
          question: "Do I need to leave the property during the service?",
          answer: "No, but the AC will be switched off while the team works.",
        },
      ],
      ctaHref: "/book?service=ac-duct-coil-cleaning",
    },
  },

  /* -------------------------- 3. MEP Services / AMC ------------------------ */
  {
    id: "3",
    slug: "mep-services-amc",
    title: "MEP Services / AMC",
    description:
      "Mechanical, electrical, and plumbing works, with annual maintenance contracts for villas, apartments, offices, and buildings.",
    image: "/grid/annual-maintenance.jpeg",
    alt: "Technician carrying out MEP maintenance",
    detail: {
      highlights: [
        { label: "Mechanical", icon: Fan },
        { label: "Electrical", icon: Zap },
        { label: "Plumbing", icon: Droplets },
      ],
      steps: [
        {
          title: "Site survey",
          description: "We record your AC, electrical, and plumbing systems and agree the scope of work.",
        },
        {
          title: "Maintenance plan",
          description: "For AMC customers, a schedule of preventive maintenance visits is agreed for the year.",
        },
        {
          title: "Maintenance & repairs",
          description:
            "Technicians carry out maintenance and repairs on AC units, electrical panels, lighting, water pumps, and plumbing fixtures.",
        },
        {
          title: "Reporting",
          description: "The work carried out on each visit is recorded and shared with you.",
        },
      ],
      included: [
        "Preventive maintenance of AC, electrical, and plumbing systems",
        "Electrical works such as DB checks, sockets, switches, and lighting",
        "Plumbing works such as leak repairs, water heaters, pumps, and fixtures",
        "Breakdown call-outs",
      ],
      notIncluded: ["Major civil, fit-out, or renovation work"],
      faqs: [
        {
          question: "What does MEP stand for?",
          answer:
            "Mechanical, Electrical, and Plumbing. It covers the systems that keep a building running, such as air conditioning, power, lighting, and water.",
        },
        {
          question: "What is an AMC?",
          answer:
            "An Annual Maintenance Contract. It covers scheduled preventive maintenance of your building systems through the year.",
        },
        {
          question: "Can I get MEP work done without a contract?",
          answer: "Yes. We also take one-off electrical, plumbing, and AC jobs.",
        },
      ],
      ctaHref: "/book?service=mep-amc",
    },
  },

  /* ----------------------- 4. AC Installation & Repair --------------------- */
  {
    id: "4",
    slug: "ac-installation-repair",
    title: "AC Installation & Repair",
    description:
      "Installation and replacement of split, inverter, and ducted AC units, with insulated piping, testing, and repairs.",
    image: "/grid/ac-installation.jpg",
    alt: "Technician installing a split AC unit",
    detail: {
      highlights: [
        { label: "Split & inverter units", icon: Snowflake },
        { label: "Replacement & relocation", icon: Wrench },
        { label: "Pressure & vacuum tested", icon: ShieldCheck },
      ],
      steps: [
        {
          title: "Site check & planning",
          description:
            "The technician confirms the position for the indoor and outdoor units, the pipe route, drain slope, and the power supply.",
        },
        {
          title: "Old unit removal",
          description:
            "For replacements, the refrigerant is recovered, then the old indoor and outdoor units are disconnected and removed.",
        },
        {
          title: "Installation or repair",
          description:
            "The mounting bracket and units are fixed, insulated copper piping, drain pipe, and wiring are run, and all joints are sealed. Existing units are repaired where possible.",
        },
        {
          title: "Testing & handover",
          description:
            "The system is pressure tested and vacuumed, then commissioned and checked for cooling, and the area is cleaned.",
        },
      ],
      included: [
        "Installation of the indoor and outdoor unit of a split or inverter AC",
        "Copper piping with insulation, drain pipe, and electrical connection to an existing power point",
        "Nitrogen pressure test and vacuum before the system is charged",
        "Removal of your old unit when replacing",
        "Repair of installation faults such as leaks, poor drainage, or loose connections",
        "Test run and cooling check",
      ],
      notIncluded: [
        "The AC unit itself, unless purchased separately",
        "Civil work such as core drilling, wall cutting, or ceiling work",
        "Scaffolding or lifting equipment for high-rise or hard-to-reach outdoor units",
      ],
      faqs: [
        {
          question: "Do you supply the AC unit?",
          answer:
            "We install units you have already bought. If you are unsure which capacity suits your room, the technician can advise on the right size.",
        },
        {
          question: "Can I replace my old AC with a different size or type?",
          answer:
            "Usually yes, as long as the piping and power supply suit the new unit. If they do not, we explain what needs to change before starting.",
        },
        {
          question: "Can you move my AC to another room or property?",
          answer:
            "Yes. Relocation includes refrigerant recovery, removing the unit, and reinstalling it at the new location.",
        },
      ],
      ctaHref: "/book?service=ac-installation-repair",
    },
  },

  /* --------------------------- 5. Painting Services ------------------------ */
  {
    id: "5",
    slug: "painting-services",
    title: "Painting Services",
    description:
      "Interior and exterior painting for villas, apartments, and offices, including surface preparation and priming.",
    image: "/services/painting-interior.jpg",
    alt: "Pluto Cool painter rolling paint onto a living room wall",
    detail: {
      highlights: [
        { label: "Interior painting", icon: Paintbrush },
        { label: "Exterior painting", icon: Building2 },
        { label: "Surface preparation", icon: Wrench },
      ],
      steps: [
        {
          title: "Site visit",
          description: "We inspect the walls, measure the area, and discuss colors and finishes.",
        },
        {
          title: "Protection & preparation",
          description:
            "Floors and furniture are covered, then cracks and holes are filled, surfaces are sanded, and a primer is applied where needed.",
        },
        {
          title: "Painting",
          description: "Paint is applied with rollers and brushes to walls, ceilings, doors, and trims as agreed.",
        },
        {
          title: "Clean-up",
          description: "Coverings are removed and the area is cleaned.",
        },
      ],
      included: [
        "Covering of floors, furniture, and fittings",
        "Filling of minor cracks and holes, and light sanding",
        "Primer where required",
        "Painting of ceilings, walls, doors, and skirting as agreed",
        "Clean-up after the job",
      ],
      notIncluded: [
        "Major plaster repairs, waterproofing, or damp treatment",
        "Wallpaper, textures, or decorative finishes unless agreed",
        "Moving heavy furniture or appliances",
      ],
      faqs: [
        {
          question: "Do you supply the paint?",
          answer: "We can supply the paint, or use paint you have already bought.",
        },
        {
          question: "Do I need to move my furniture?",
          answer: "Light items are moved and everything else is covered. Heavy furniture and appliances should be moved beforehand.",
        },
        {
          question: "Do you paint exteriors?",
          answer: "Yes. We paint villa exteriors and boundary walls.",
        },
      ],
      ctaHref: "/book?service=painting",
    },
  },

  /* ------------------------- 6. Ducting / HVAC & VAV ----------------------- */
  {
    id: "6",
    slug: "ducting-hvac-vav",
    title: "Ducting / HVAC & VAV",
    description: "Fabrication and installation of ductwork, VAV system servicing, and airflow balancing for HVAC systems.",
    image: "/services/hvac-rooftop.jpg",
    alt: "Pluto Cool technician checking a rooftop HVAC unit",
    detail: {
      highlights: [
        { label: "Duct installation", icon: Wind },
        { label: "VAV systems", icon: Thermometer },
        { label: "Airflow balancing", icon: Fan },
      ],
      steps: [
        {
          title: "Survey & assessment",
          description:
            "The existing ducts and HVAC equipment are inspected, airflow is measured at each outlet, and leaks, blockages, or undersized ducts are identified.",
        },
        {
          title: "Design",
          description: "The duct layout, sizes, and VAV settings needed for each zone are planned.",
        },
        {
          title: "Installation & servicing",
          description:
            "Ducts are fabricated, installed, insulated, and sealed. VAV boxes, dampers, and controls are installed, repaired, or serviced.",
        },
        {
          title: "Balancing & commissioning",
          description: "Airflow is balanced across each room and zone, and temperatures are checked.",
        },
      ],
      included: [
        "Ductwork fabrication, installation, and replacement",
        "Duct insulation and sealing",
        "Installation and servicing of VAV boxes, dampers, and controls",
        "Grilles, diffusers, and return air vents",
        "Airflow testing and balancing",
      ],
      notIncluded: [
        "Supply of new AC or air handling units, unless agreed",
        "Civil work such as ceiling openings, false ceilings, or wall cutting",
        "Building management system (BMS) programming beyond basic VAV settings",
      ],
      faqs: [
        {
          question: "What is a VAV system?",
          answer:
            "VAV stands for Variable Air Volume. It adjusts the amount of cooled air sent to each zone based on that zone's temperature setting.",
        },
        {
          question: "Why are some rooms warmer than others?",
          answer:
            "Common causes are leaking or undersized ducts, closed or faulty dampers, a failing VAV box, or an unbalanced system. A survey finds the exact cause.",
        },
        {
          question: "Do you handle commercial projects?",
          answer: "Yes. We carry out ducting and VAV work for offices, shops, and commercial buildings, as well as homes.",
        },
      ],
      ctaHref: "/book?service=ducting-hvac-vav",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function CardGridSection() {
  const [selected, setSelected] = React.useState<Item | null>(null);
  const [open, setOpen] = React.useState(false);

  const openDetail = (item: Item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <section id='services' className='mx-auto w-full  px-4 py-16 sm:px-6 md:py-24 lg:px-8  bg-sky-700/10 dark:bg-zinc-950  text-zinc-900 dark:text-zinc-50'>
      {/*  section heading */}
      <div className='mx-auto mb-16 max-w-3xl text-center'>
        <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-sky-800 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-sky-200'>
          Complete AC, MEP & Painting Solutions
        </h2>
        <p className='mt-4 text-sm sm:text-base text-zinc-600 dark:text-white/70'>
          High-quality technical services for homes and businesses, built to withstand the intense Dubai heat.
        </p>
      </div>

      {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        {ITEMS.map((item) => (
          <Card
            key={item.id}
            className='group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#063353] pt-0 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(14,165,233,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0'
          >
            <div className='relative aspect-[4/3] w-full overflow-hidden bg-[#16263a]'>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                className='object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100'
              />
              {/* dark blue overlay like the hero */}
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4fa4e0]/60 via-[#4fa4e0]/20 to-transparent' />
            </div>

            <CardHeader className='pt-3'>
              <CardTitle className='text-xl font-semibold leading-snug tracking-tight text-white'>
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className='flex-1  '>
              <CardDescription className='line-clamp-3 text-sm leading-relaxed text-slate-300'>
                {item.description}
              </CardDescription>
            </CardContent>

            <CardFooter className='bg-[#abd0eb] flex flex-col-reverse gap-3 sm:flex-row sm:items-center'>
              <Link
                href={serviceHref(item.slug)}
                className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#063353] transition-colors hover:text-[#0b7fd1]'
              >
                Full service page
                <ArrowRight className='size-4' />
              </Link>
              <Button
                className='ml-auto w-full rounded-xl border-0 bg-gradient-to-r from-[#0b7fd1] to-[#12a4e0] font-medium text-white shadow-md transition-all hover:from-[#0a6fb8] hover:to-[#0f94ca] hover:shadow-cyan-500/30 sm:w-auto'
                onClick={() => openDetail(item)}
              >
                View Detail
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* One shared sheet, slides in from the right */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='right' className='flex w-full flex-col gap-0 p-0 sm:max-w-lg' initialFocus={false}>
          {selected && (
            <ServiceDetailContent
              title={selected.title}
              image={selected.image}
              alt={selected.alt}
              detail={selected.detail}
            />
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
