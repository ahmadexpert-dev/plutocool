"use client";

import * as React from "react";
import Image from "next/image";
import {
  Droplets,
  Wind,
  ShieldCheck,
  BadgeCheck,
  CalendarCheck,
  Clock,
  Fan,
  Leaf,
  Percent,
  PhoneCall,
  Snowflake,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ServiceDetailContent, { type ServiceDetail } from "./service-detail-content";

type Item = {
  id: string;
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
  /* ------------------------------ 1. Repairing ----------------------------- */
  {
    id: "1",
    title: "AC Repairing",
    description:
      "Fast diagnosis and repair of weak cooling, water leaks, strange noises, and electrical faults in all AC types.",
    image: "/grid/ac-repair.png",
    alt: "Technician repairing an AC unit",
    detail: {
      rating: "4.8",
      highlights: [
        { label: "Same-day visits", icon: Clock },
        { label: "Genuine spare parts", icon: BadgeCheck },
        { label: "Repair warranty", icon: ShieldCheck },
      ],
      steps: [
        {
          title: "Inspection & diagnosis",
          description:
            "The technician checks airflow, cooling, gas pressure, drainage, and the electrical components to find the root cause of the fault.",
        },
        {
          title: "Quote & approval",
          description:
            "You get a clear price for parts and labour before any work begins. Nothing is repaired without your approval.",
        },
        {
          title: "Repair",
          description:
            "Faulty parts such as capacitors, fan motors, sensors, or control boards are repaired or replaced, and any leaks or blocked drains are fixed.",
        },
        {
          title: "Testing & handover",
          description:
            "The unit is run to confirm proper cooling and airflow, the work area is cleaned, and you receive a job summary with warranty details.",
        },
      ],
      included: [
        "Full diagnostic inspection of the indoor and outdoor units",
        "Minor fixes such as drain unblocking, thermostat or sensor adjustment, and tightening loose wiring",
        "Technician labour for the repair you approve",
        "Cooling performance test after the repair",
      ],
      notIncluded: [
        "Cost of spare parts and refrigerant gas, which are quoted separately before work starts",
        "Installation, relocation, or replacement of the entire unit",
      ],
      goodToKnow: [
        "The starting price covers the visit and diagnosis. The final repair cost depends on the fault and the parts needed",
        "Repairs carry a 30-day workmanship warranty. Spare parts follow the manufacturer's warranty",
        "If a required part is not in stock, we will schedule a follow-up visit to complete the repair",
      ],
      faqs: [
        {
          question: "How soon can a technician visit?",
          answer:
            "In most areas we can schedule a visit the same day or the next day, depending on availability. You can choose a time slot when booking.",
        },
        {
          question: "My AC is running but not cooling. What could be wrong?",
          answer:
            "Common causes include dirty filters or coils, low refrigerant, a failing capacitor, or a blocked drain. A technician needs to inspect the unit to confirm the exact cause.",
        },
        {
          question: "Will I know the price before the repair starts?",
          answer:
            "Yes. After diagnosis, the technician explains the problem and gives you a quote for parts and labour. You decide whether to go ahead.",
        },
        {
          question: "Do you repair all AC brands and types?",
          answer: "Yes. We service split, window, ducted, and cassette units from all major brands.",
        },
      ],
      price: "AED 120",
      ctaHref: "/book?service=ac-repairing",
    },
  },

  /* --------------------------- 2. AC Installation & Replacement ---------------------------- */
  {
    id: "2",
    title: "AC Installation & Replacement",
    description:
      "Professional installation of new split and inverter units, or replacement of your old AC, with insulated piping and full testing.",
    image: "/grid/ac-installation.jpg",
    alt: "Technician installing a split AC unit",
    detail: {
      rating: "4.8",
      highlights: [
        { label: "Neat, clean finish", icon: Sparkles },
        { label: "Vacuum & leak tested", icon: ShieldCheck },
        { label: "Workmanship warranty", icon: BadgeCheck },
      ],
      steps: [
        {
          title: "Site check & planning",
          description:
            "The technician confirms the best position for the indoor and outdoor units, the pipe route, drain slope, and the power supply before work begins.",
        },
        {
          title: "Old unit removal",
          description:
            "For replacements, the refrigerant is safely recovered, then the old indoor and outdoor units are disconnected and taken away.",
        },
        {
          title: "Installation",
          description:
            "The mounting bracket and units are fixed securely, insulated copper piping, drain pipe, and wiring are run, and all joints are sealed.",
        },
        {
          title: "Testing & handover",
          description:
            "The system is pressure tested and vacuumed, then commissioned and checked for cooling. The area is cleaned and you get a walkthrough of the remote and warranty details.",
        },
      ],
      included: [
        "Installation of the indoor and outdoor unit of a split or inverter AC",
        "Standard copper piping with insulation, drain pipe, and electrical connection to an existing power point",
        "Nitrogen pressure test and vacuum before the system is charged",
        "Removal and disposal of your old unit when replacing",
        "Test run, cooling check, and a short demonstration",
      ],
      notIncluded: [
        "The AC unit itself, unless purchased separately",
        "Extra piping beyond the standard length, additional wiring, or new power points",
        "Civil work such as core drilling, wall cutting, or ceiling work",
        "Scaffolding or lifting equipment for high-rise or hard-to-reach outdoor units",
      ],
      goodToKnow: [
        "The starting price is per unit for a standard split AC with standard piping. Final price is confirmed after the site check",
        "Installation usually takes 2 to 4 hours per unit",
        "Some buildings require approval from the landlord or building management for outdoor unit placement or work at height. Please check before booking",
        "Installation work carries a 90-day workmanship warranty. The AC unit itself follows the manufacturer's warranty",
      ],
      faqs: [
        {
          question: "Do you supply the AC unit?",
          answer:
            "We install units you have already bought. If you are unsure which capacity suits your room, the technician can advise on the right size.",
        },
        {
          question: "How long does installation take?",
          answer:
            "A standard split unit usually takes 2 to 4 hours. Longer pipe runs, difficult access, or several units can take longer.",
        },
        {
          question: "Can I replace my old AC with a different size or type?",
          answer:
            "Usually yes, as long as the piping and power supply suit the new unit. If they do not, we explain what needs to change and quote it before starting.",
        },
        {
          question: "Can you also move my AC to another room or property?",
          answer:
            "Yes. Relocation includes safe refrigerant recovery, removing the unit, and reinstalling it at the new location. Mention it when booking so the right time is reserved.",
        },
      ],
      price: "AED 350",
      ctaHref: "/book?service=ac-installation-replacement",
    },
  },

  /* ---------------------------- 3. Maintenance ----------------------------- */
  {
    id: "3",
    title: "AC Maintenance",
    description: "Regular maintenance service to ensure your AC system runs efficiently and lasts longer.",
    image: "/grid/ac-maintenance.png",
    alt: "Technician performing AC maintenance",
    detail: {
      rating: "4.9",
      highlights: [
        { label: "Lower energy bills", icon: Zap },
        { label: "Fewer breakdowns", icon: ShieldCheck },
        { label: "Longer AC lifespan", icon: Clock },
      ],
      steps: [
        {
          title: "Check-up",
          description:
            "The technician inspects the filters, thermostat, airflow, unusual noises, and electrical connections.",
        },
        {
          title: "Cleaning",
          description:
            "Filters are washed, the indoor unit is wiped down, the drain line is flushed, and the outdoor unit is rinsed.",
        },
        {
          title: "Performance test",
          description:
            "Refrigerant pressure, temperature drop, and electrical readings are checked against the unit's normal range.",
        },
        {
          title: "Service summary",
          description:
            "You get a short summary of what was done and any issues spotted, with advice on what to do next.",
        },
      ],
      included: [
        "Washing and cleaning of air filters",
        "Drain line check and flushing to prevent leaks",
        "Rinsing of the outdoor unit",
        "Refrigerant pressure and temperature check",
        "Inspection of capacitor, wiring, and electrical connections",
      ],
      notIncluded: [
        "Deep cleaning of the coils (available as AC Coil Cleaning)",
        "Refrigerant gas refilling and replacement of parts",
        "Repair of faults found during the visit, which are quoted separately",
      ],
      goodToKnow: [
        "The price is per AC unit and a visit takes about 45 to 60 minutes",
        "For units that run daily, a service every 3 to 6 months is a good routine",
        "If a fault is found, the technician explains it and gives you a quote before doing any extra work",
      ],
      faqs: [
        {
          question: "How often should I get my AC serviced?",
          answer:
            "For units that run most of the day, every 3 to 6 months is a good rule. Units used less often can be serviced once or twice a year.",
        },
        {
          question: "What is the difference between maintenance and coil cleaning?",
          answer:
            "Maintenance is a routine check and clean of filters, drain, and basic components. Coil cleaning is a deeper service that cleans and sanitizes the coils, blower, and drain tray.",
        },
        {
          question: "Is the price per unit or per property?",
          answer: "The price is per AC unit. If you have several units, you can add them in one booking.",
        },
        {
          question: "Do I need to do anything before the visit?",
          answer:
            "Just make sure the technician can reach the indoor unit and the outdoor unit. Moving furniture away from the unit helps.",
        },
      ],
      price: "AED 150",
      ctaHref: "/book?service=ac-maintenance",
    },
  },

  /* --------------------------- 4. Coil cleaning ---------------------------- */
  {
    id: "4",
    title: "AC Coil & Duct Cleaning",
    description: "Deep cleaning and sanitization of evaporator and condenser coils for better cooling and air quality.",
    image: "/grid/duct-cleaning.jpeg",
    alt: "Technician cleaning AC coils",
    detail: {
      rating: "4.9",
      highlights: [
        { label: "Better breathing", icon: Wind },
        { label: "Improved AC lifespan", icon: ShieldCheck },
        { label: "Improved air quality", icon: Leaf },
      ],
      steps: [
        {
          title: "Arrival & protection",
          description:
            "The team arrives wearing full PPE, including masks, gloves, and shoe covers. The working area is isolated using plastic covering.",
        },
        {
          title: "Cleaning and sanitization",
          description:
            "Eco-friendly products are used to clean and sanitize the plastic cover of the AC, filters, and the main cooling unit, including the coils, blower fan, drain tray, and pipe.",
        },
        {
          title: "Clean-up",
          description: "All waste and residue are collected and disposed of properly, ensuring a mess-free service.",
        },
        {
          title: "Service report",
          description: "You receive a short report of the work done and anything found during the service.",
        },
      ],
      included: [
        "Cleaning and sanitization of both evaporator and condenser coils",
        "Cleaning and sanitization of the fan motor",
        "Inspection for coil damage or corrosion to help prevent future issues",
      ],
      notIncluded: [
        "Repair or replacement of damaged parts not related to cleaning",
        "Installation, relocation, or any services outside of coil cleaning",
      ],
      goodToKnow: [
        "Price and duration are estimates and may be revised after on-site inspection",
        "If mold or maintenance issues are found inside the AC, the service will pause and a specialized team will provide a separate solution and quote",
        "If access panels are needed to reach hidden areas, an extra charge of AED 250 per panel applies (plus VAT and service fees), including ceiling cuts and white paint touch-up around grills and panels",
      ],
      faqs: [
        {
          question: "How long does the AC coil cleaning service take?",
          answer:
            "A standard split unit usually takes around 1.5 to 2 hours. Larger or hard-to-reach units can take longer.",
        },
        {
          question: "Do you use chemicals on the coils, and will they cause any damage?",
          answer:
            "We use eco-friendly, safe cleaning solutions specially for AC coil cleaning service. These gentle yet effective agents clean thoroughly without causing any damage, ensuring your coils stay protected and your system runs efficiently.",
        },
        {
          question: "Can you clean the coils if the unit is mounted high on the wall?",
          answer:
            "Yes. Our technicians bring ladders and the right equipment to work safely on units mounted high on the wall or above the ceiling.",
        },
      ],
      price: "AED 600",
      ctaHref: "/book?service=ac-coil-cleaning",
    },
  },

  /* ------------------------ 5. Full system cleaning ------------------------ */
  {
    id: "5",
    title: "Full System Cleaning",
    description: "Comprehensive cleaning of your entire AC system for optimal performance and air quality.",
    image: "/grid/full-system-clean.jpeg",
    alt: "Technician cleaning full AC system",
    detail: {
      rating: "4.9",
      highlights: [
        { label: "Complete cleaning", icon: Sparkles },
        { label: "Peak cooling", icon: Snowflake },
        { label: "Healthier air", icon: Wind },
      ],
      steps: [
        {
          title: "Arrival & protection",
          description:
            "The team arrives wearing full PPE and covers the floor and furniture. The working area is isolated using plastic covering.",
        },
        {
          title: "Indoor unit deep clean",
          description:
            "Filters, evaporator coil, blower fan, drain tray, and drain pipe are cleaned and sanitized with eco-friendly products.",
        },
        {
          title: "Ducts & vents",
          description: "The ducts are brushed and vacuumed, and the grilles and diffusers are cleaned and sanitized.",
        },
        {
          title: "Outdoor unit & final test",
          description:
            "The condenser coil and fan are cleaned, the whole system is tested for cooling and airflow, and you receive a service report.",
        },
      ],
      included: [
        "Indoor unit cleaning: filters, evaporator coil, blower fan, drain tray, and drain pipe",
        "Outdoor condenser coil and fan cleaning",
        "Duct, grille, and diffuser cleaning with sanitization",
        "Performance test and service report",
      ],
      notIncluded: [
        "Repair or replacement of damaged parts and refrigerant gas",
        "Mold removal or treatment",
        "Installation, relocation, or any services outside of cleaning",
      ],
      goodToKnow: [
        "The starting price is for a standard apartment system. Final price depends on the number of units and ducts, and is confirmed after inspection",
        "The service usually takes 4 to 6 hours depending on the size of the system",
        "If access panels are needed to reach hidden areas, an extra charge of AED 250 per panel applies (plus VAT and service fees)",
      ],
      faqs: [
        {
          question: "What is the difference between full system and coil cleaning?",
          answer:
            "Coil cleaning covers the indoor unit and coils. Full system cleaning also includes the ducts, grilles, and the outdoor unit, so the whole system is cleaned in one visit.",
        },
        {
          question: "When should I choose full system cleaning?",
          answer:
            "It suits homes that have not had a deep clean in over a year, have reduced cooling, smell musty air from the vents, or have recently been renovated.",
        },
        {
          question: "Do I need to leave the property during the service?",
          answer:
            "No, but the AC will be off while the team works. Some rooms may be restricted for a few hours while ducts and units are being cleaned.",
        },
        {
          question: "Will the service make a mess?",
          answer: "No. The work area is covered and sealed, and waste is collected and removed from your property.",
        },
      ],
      price: "AED 950",
      ctaHref: "/book?service=full-system-cleaning",
    },
  },

  /* ------------------------------ 6. AMC plan ------------------------------ */
  {
    id: "6",
    title: "Annual Maintenance (AMC)",
    description: "Regular maintenance and servicing of your AC system to ensure optimal performance and longevity.",
    image: "/grid/annual-maintenance.jpeg",
    alt: "Technician performing annual maintenance on an AC unit",
    detail: {
      rating: "4.8",
      highlights: [
        { label: "4 scheduled visits", icon: CalendarCheck },
        { label: "Priority support", icon: PhoneCall },
        { label: "Discounted parts", icon: Percent },
      ],
      steps: [
        {
          title: "Site survey & plan",
          description: "We record your units, their make and model, and agree a visit schedule that suits you.",
        },
        {
          title: "Scheduled visits",
          description:
            "A technician visits every quarter to clean filters, flush drains, check gas pressure, and inspect electrical parts.",
        },
        {
          title: "Priority breakdown support",
          description:
            "If your AC stops working between visits, call us and your request is given priority scheduling.",
        },
        {
          title: "Reports & renewal",
          description: "You receive a report after every visit, and a reminder before your plan ends so you can renew.",
        },
      ],
      included: [
        "4 scheduled maintenance visits per year for each unit",
        "Filter cleaning, drain flushing, gas pressure, and electrical checks on every visit",
        "Priority booking for breakdown calls",
        "Discounted rates on spare parts and repair labour",
        "A service report after every visit",
      ],
      notIncluded: [
        "Cost of spare parts and refrigerant gas, which are discounted but not free",
        "Coil cleaning and duct cleaning, which are available at member rates",
        "Damage caused by misuse, power surges, or work by third parties",
      ],
      goodToKnow: [
        "The plan runs for 12 months and the price is per AC unit",
        "Visits are scheduled in advance and can be rescheduled with 24 hours' notice",
        "Plans can be customized for villas, offices, and properties with multiple units",
      ],
      faqs: [
        {
          question: "What does an AMC plan cover?",
          answer:
            "It covers scheduled routine maintenance visits through the year, priority support, and discounted rates on repairs and parts.",
        },
        {
          question: "How many visits are included?",
          answer:
            "The standard plan includes 4 visits a year, one every quarter. Plans with more visits can be arranged for heavy-use properties.",
        },
        {
          question: "Can I add more AC units later?",
          answer: "Yes. Additional units can be added to your plan at any time and will run until your plan end date.",
        },
        {
          question: "What happens if my AC breaks down between visits?",
          answer:
            "Call us and your request is given priority. Labour for the repair and parts are charged at your member discount.",
        },
      ],
      priceLabel: "Starting from",
      price: "AED 650 / year",
      ctaHref: "/book?service=annual-maintenance",
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
    <section className='mx-auto w-full  px-4 py-16 sm:px-6 md:py-24 lg:px-8  bg-sky-700/10 dark:bg-zinc-950  text-zinc-900 dark:text-zinc-50'>
      {/*  section heading */}
      <div className='mx-auto mb-16 max-w-3xl text-center'>
        <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-sky-800 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-sky-200'>
          Comprehensive AC Solutions for Ultimate Comfort
        </h2>
        <p className='mt-4 text-sm sm:text-base text-zinc-600 dark:text-white/70'>
          We provide high-quality cooling services designed to withstand the intense Dubai heat.
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

            <CardFooter className='bg-[#abd0eb]'>
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
