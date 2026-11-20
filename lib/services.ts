import {
  Building2,
  ClipboardList,
  Cog,
  Droplets,
  Fan,
  Gauge,
  Hammer,
  Layers,
  Paintbrush,
  PaintRoller,
  PlugZap,
  Ruler,
  ShowerHead,
  SlidersHorizontal,
  Snowflake,
  SprayCan,
  Thermometer,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  One entry per service. Drives the navbar, footer, /services, and each     */
/*  /services/[slug] page. Keep wording factual: no prices, timings, or       */
/*  warranties.                                                               */
/* -------------------------------------------------------------------------- */

export type ServiceImage = { src: string; alt: string };

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** One line under the page title */
  tagline: string;
  /** Short text for cards and menus */
  summary: string;
  /** Overview paragraphs */
  intro: string[];
  hero: ServiceImage;
  /** One or two images shown beside the overview */
  gallery: ServiceImage[];
  features: { title: string; detail: string; icon: LucideIcon }[];
  signs: string[];
  steps: { title: string; description: string }[];
  included: string[];
  notIncluded: string[];
  propertyTypes: string[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  /* ----------------------------- AC Repair & Maintenance ----------------------------- */
  {
    slug: "ac-repair-maintenance",
    title: "AC Repair & Maintenance",
    icon: Wrench,
    tagline: "Troubleshooting, repairs, and routine servicing for every type of AC unit.",
    summary: "Diagnosis and repair of cooling problems, leaks, and electrical faults, plus routine servicing.",
    intro: [
      "An air conditioner in Dubai works harder than almost anywhere else. Heat, sand, and humidity put constant strain on compressors, fans, and electrical parts, and small issues can quickly turn into a unit that stops cooling.",
      "Our technicians inspect the complete system, from the indoor unit and drain line to the outdoor condenser and electrical components, to find the cause of the problem and fix it. Routine maintenance visits keep filters, drains, and refrigerant levels in check between repairs.",
    ],
    hero: { src: "/grid/ac-repair.png", alt: "Technician repairing a wall-mounted split AC unit" },
    gallery: [
      { src: "/about/1.jpg", alt: "Technician checking refrigerant pressure with gauges" },
      { src: "/grid/ac-maintenance.png", alt: "Engineer inspecting outdoor AC units" },
    ],
    features: [
      { title: "Fault diagnosis", detail: "Checks on relays, capacitors, sensors, thermostats, and PCB control boards.", icon: Gauge },
      { title: "Cooling problems", detail: "Units that run but blow warm air, cool unevenly, or keep switching off.", icon: Snowflake },
      { title: "Water leak repair", detail: "Clearing blocked drain lines and fixing dripping indoor units.", icon: Droplets },
      { title: "Refrigerant service", detail: "R410A and R22 pressure checks, leak detection, and refilling.", icon: Thermometer },
      { title: "Electrical repairs", detail: "Wiring, contactors, fan motors, and compressor start components.", icon: Zap },
      { title: "Routine servicing", detail: "Filter washing, drain flushing, coil rinsing, and electrical inspections.", icon: Cog },
    ],
    signs: [
      "The AC is running but the air is not cold",
      "Water is dripping from the indoor unit",
      "Rattling, buzzing, or grinding noises",
      "The unit trips the breaker or will not start",
      "A musty or burning smell when it runs",
      "Some rooms are much warmer than others",
    ],
    steps: [
      { title: "Inspection", description: "The technician checks airflow, cooling, gas pressure, drainage, and electrical components." },
      { title: "Diagnosis", description: "The cause of the fault is identified and the required work is explained to you." },
      { title: "Repair & servicing", description: "Faulty parts are repaired or replaced, and filters, drains, and coils are cleaned." },
      { title: "Testing", description: "The unit is run to check cooling and airflow, and the work area is cleaned." },
    ],
    included: [
      "Inspection of the indoor and outdoor units",
      "Washing and cleaning of air filters",
      "Drain line check and flushing",
      "Refrigerant pressure, temperature, and electrical checks",
      "Repair or replacement of faulty components",
      "Cooling test after the work",
    ],
    notIncluded: [
      "Deep duct and coil cleaning (see AC Duct & Coil Cleaning)",
      "Installation of a new unit or relocation of an existing one",
    ],
    propertyTypes: ["Apartments", "Villas", "Offices", "Retail units", "Restaurants", "Warehouses"],
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
        question: "What types of AC do you work on?",
        answer: "Split, window, ducted, cassette, and package units from all major brands.",
      },
      {
        question: "What is the difference between repair and maintenance?",
        answer:
          "Repair fixes a specific fault. Maintenance is a routine check and clean of filters, drains, refrigerant, and electrical parts that helps catch problems early.",
      },
    ],
  },

  /* ----------------------------- AC Duct & Coil Cleaning ----------------------------- */
  {
    slug: "ac-duct-coil-cleaning",
    title: "AC Duct & Coil Cleaning",
    icon: Droplets,
    tagline: "Cleaning and sanitization of coils, ducts, and vents across the complete AC system.",
    summary: "Cleaning and sanitization of AC coils, blower fans, drain trays, ducts, grilles, and diffusers.",
    intro: [
      "Dust and sand find their way into every AC system in the UAE. Over time they build up on the coils, inside the blower fan, and along the ductwork, together with mold spores and grime from humid air.",
      "Our cleaning service covers the whole air path: evaporator and condenser coils, blower fans, drain trays, supply and return ducts, and every grille and diffuser. The work area is covered and isolated before cleaning begins, and waste is removed afterwards.",
    ],
    hero: { src: "/grid/duct-cleaning.jpeg", alt: "Rotary brush cleaning the inside of an air duct" },
    gallery: [
      { src: "/grid/coil-cleaning.jpeg", alt: "Technician spraying an AC evaporator coil" },
      { src: "/deep_clean.png", alt: "Technician cleaning an indoor split AC unit" },
    ],
    features: [
      { title: "Coil washing", detail: "Cleaning of indoor evaporator and outdoor condenser coils.", icon: SprayCan },
      { title: "Blower fan cleaning", detail: "Removal of dust and grime from the fan wheel and housing.", icon: Fan },
      { title: "Duct cleaning", detail: "Brushing and vacuuming of supply and return ducts.", icon: Wind },
      { title: "Drain tray & pipe", detail: "Cleaning and flushing of condensate trays and drain lines.", icon: Droplets },
      { title: "Sanitization", detail: "Anti-bacterial treatment of coils, trays, and fans.", icon: ShowerHead },
      { title: "Grilles & diffusers", detail: "Cleaning of all air outlets and return vents.", icon: Layers },
    ],
    signs: [
      "Dust blowing out of the vents",
      "Weak airflow in one or more rooms",
      "A musty smell when the AC switches on",
      "Visible dirt on grilles and diffusers",
      "Recent renovation or construction work",
      "Moving into a property that has been empty",
    ],
    steps: [
      { title: "Protection", description: "The team wears PPE, covers floors and furniture, and isolates the working area." },
      { title: "Coil & unit cleaning", description: "Filters, coils, blower fan, drain tray, and drain pipe are cleaned and sanitized." },
      { title: "Duct & vent cleaning", description: "Ducts are brushed and vacuumed, and grilles and diffusers are cleaned." },
      { title: "Clean-up & check", description: "Waste is removed and the system is checked for cooling and airflow." },
    ],
    included: [
      "Cleaning and sanitization of evaporator and condenser coils",
      "Blower fan, drain tray, and drain pipe cleaning",
      "Duct brushing and vacuuming",
      "Grille and diffuser cleaning",
      "Airflow and cooling check",
    ],
    notIncluded: [
      "Repair or replacement of damaged parts",
      "Mold removal or remediation work",
      "Installation or relocation of units",
    ],
    propertyTypes: ["Apartments", "Villas", "Offices", "Clinics", "Schools", "Restaurants"],
    faqs: [
      {
        question: "What is the difference between coil cleaning and duct cleaning?",
        answer:
          "Coil cleaning covers the AC units themselves: the coils, blower fan, and drain tray. Duct cleaning covers the ducts that carry air to each room, along with the grilles and diffusers.",
      },
      {
        question: "Do I need to leave the property during cleaning?",
        answer: "No, but the AC will be switched off while the team works.",
      },
      {
        question: "Can you clean units mounted high on the wall or above the ceiling?",
        answer: "Yes. The team brings ladders and the equipment needed to reach high and concealed units.",
      },
      {
        question: "Do you clean ducted systems in villas?",
        answer: "Yes. We clean ducted and concealed systems in villas, as well as split units in apartments.",
      },
    ],
  },

  /* ----------------------------- MEP Services / AMC ----------------------------- */
  {
    slug: "mep-services-amc",
    title: "MEP Services / AMC",
    icon: Building2,
    tagline: "Mechanical, electrical, and plumbing works, with annual maintenance contracts.",
    summary: "Mechanical, electrical, and plumbing works, with annual maintenance contracts for properties.",
    intro: [
      "Every property depends on its MEP systems: the air conditioning that keeps it cool, the electrical network that powers it, and the plumbing that supplies and drains water. When one of them fails, everything else is affected.",
      "Our MEP team handles maintenance and repairs across all three. With an Annual Maintenance Contract, preventive maintenance is scheduled through the year, so your systems are inspected regularly and issues are picked up early. One-off jobs are also available.",
    ],
    hero: { src: "/grid/ac-maintenance.png", alt: "Engineer inspecting commercial outdoor AC units with a tablet" },
    gallery: [
      { src: "/grid/annual-maintenance.jpeg", alt: "Technician connecting pressure gauges to an AC system" },
      { src: "/about/2.jpeg", alt: "Technicians working together on an outdoor unit" },
    ],
    features: [
      { title: "Mechanical works", detail: "Maintenance and repair of AC, ventilation, and pumps.", icon: Cog },
      { title: "Electrical works", detail: "DB checks, sockets, switches, lighting, and fault finding.", icon: Zap },
      { title: "Plumbing works", detail: "Leak repairs, water heaters, pumps, and fixtures.", icon: ShowerHead },
      { title: "Preventive maintenance", detail: "Scheduled inspections of building systems through the year.", icon: ClipboardList },
      { title: "Breakdown call-outs", detail: "Attendance for faults that need attention between visits.", icon: Wrench },
      { title: "Multi-unit properties", detail: "Coordinated maintenance for buildings with many units.", icon: Building2 },
    ],
    signs: [
      "You manage a villa, building, or office",
      "You want one team for AC, electrical, and plumbing",
      "Faults keep recurring between repairs",
      "You need scheduled inspections on record",
      "A move-in or handover inspection is coming up",
      "Several properties need regular maintenance",
    ],
    steps: [
      { title: "Site survey", description: "We record your AC, electrical, and plumbing systems and agree the scope." },
      { title: "Maintenance plan", description: "For AMC customers, a schedule of preventive visits is agreed for the year." },
      { title: "Maintenance & repairs", description: "Technicians carry out maintenance and repairs across all systems." },
      { title: "Reporting", description: "The work carried out on each visit is recorded and shared with you." },
    ],
    included: [
      "Preventive maintenance of AC, electrical, and plumbing systems",
      "Electrical works such as DB checks, sockets, switches, and lighting",
      "Plumbing works such as leak repairs, water heaters, pumps, and fixtures",
      "Breakdown call-outs",
      "Visit reports",
    ],
    notIncluded: ["Major civil, fit-out, or renovation work", "Replacement of complete systems unless agreed"],
    propertyTypes: ["Villas", "Residential buildings", "Offices", "Retail units", "Warehouses", "Hotels"],
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
      {
        question: "Do you work with property managers and landlords?",
        answer: "Yes. We maintain individual units as well as complete buildings and multiple properties.",
      },
    ],
  },

  /* ----------------------------- AC Installation & Repair ----------------------------- */
  {
    slug: "ac-installation-repair",
    title: "AC Installation & Repair",
    icon: PlugZap,
    tagline: "Mounting, insulated copper piping, and vacuum testing for split, inverter, and ducted units.",
    summary: "Installation and replacement of split, inverter, and ducted AC units, with testing and repairs.",
    intro: [
      "A well-installed AC unit starts with planning: the right position for the indoor and outdoor units, a clean pipe route, a proper drain slope, and a suitable power supply.",
      "Our installation team mounts the units, runs insulated copper piping, drain lines, and wiring, then pressure tests and vacuums the system before it is charged and commissioned. We also replace old units, relocate units during moves, and repair faulty existing installations.",
    ],
    hero: { src: "/installation.png", alt: "Technician installing an outdoor AC unit" },
    gallery: [
      { src: "/grid/ac-installation.jpg", alt: "Outdoor AC condenser mounted on an exterior wall" },
      { src: "/gas_fill.png", alt: "Technician vacuuming an AC system with a vacuum pump" },
    ],
    features: [
      { title: "New installations", detail: "Split, inverter, window, and ducted units for any room.", icon: PlugZap },
      { title: "Unit replacement", detail: "Removal of the old unit and installation of the new one.", icon: Wrench },
      { title: "Copper piping", detail: "Insulated refrigerant lines, drain piping, and wiring.", icon: Ruler },
      { title: "Pressure & vacuum test", detail: "Nitrogen pressure test and vacuum before charging.", icon: Gauge },
      { title: "Relocation", detail: "Refrigerant recovery, removal, and reinstallation.", icon: Hammer },
      { title: "Installation repairs", detail: "Fixing leaks, poor drainage, and loose connections.", icon: Cog },
    ],
    signs: [
      "Moving into a new property",
      "Replacing an old or noisy unit",
      "Adding cooling to an extra room",
      "Upgrading to an inverter AC",
      "Relocating a unit during a move",
      "An existing installation leaks or drips",
    ],
    steps: [
      { title: "Site check", description: "Unit positions, pipe route, drain slope, and power supply are confirmed." },
      { title: "Old unit removal", description: "For replacements, refrigerant is recovered and the old unit is removed." },
      { title: "Installation", description: "Units are mounted, and piping, drain lines, and wiring are run and sealed." },
      { title: "Testing & handover", description: "The system is pressure tested, vacuumed, commissioned, and checked." },
    ],
    included: [
      "Installation of the indoor and outdoor units",
      "Insulated copper piping, drain pipe, and electrical connection to an existing power point",
      "Nitrogen pressure test and vacuum before charging",
      "Removal of the old unit when replacing",
      "Test run and cooling check",
    ],
    notIncluded: [
      "The AC unit itself, unless purchased separately",
      "Civil work such as core drilling, wall cutting, or ceiling work",
      "Scaffolding or lifting equipment for hard-to-reach outdoor units",
    ],
    propertyTypes: ["Apartments", "Villas", "Offices", "Shops", "Server rooms", "Warehouses"],
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
        answer: "Yes. Relocation includes refrigerant recovery, removing the unit, and reinstalling it at the new location.",
      },
      {
        question: "Do I need building approval for an outdoor unit?",
        answer:
          "Some buildings require approval from the landlord or building management for outdoor unit placement or work at height, so it is worth checking first.",
      },
    ],
  },

  /* ----------------------------- Painting Services ----------------------------- */
  {
    slug: "painting-services",
    title: "Painting Services",
    icon: Paintbrush,
    tagline: "Interior and exterior painting with surface preparation and priming.",
    summary: "Interior and exterior painting for villas, apartments, and offices, including surface preparation.",
    intro: [
      "A fresh coat of paint changes how a space looks and feels, whether it is a single room, a full villa, or an office before a new tenant moves in.",
      "Our painters start by protecting your floors and furniture, then prepare the surfaces by filling cracks and holes, sanding, and priming where needed. Walls, ceilings, doors, and trims are painted in the colors and finishes you choose, and the area is cleaned when the job is done.",
    ],
    hero: {
      src: "/services/painting-interior.jpg",
      alt: "Pluto Cool painter rolling paint onto a living room wall, with furniture covered in plastic",
    },
    gallery: [
      {
        src: "/services/painting-interior.jpg",
        alt: "Pluto Cool painter painting an interior wall beside a ladder and paint buckets",
      },
      { src: "/services/painting-exterior.jpg", alt: "Pluto Cool painter on a ladder painting the exterior wall of a villa" },
    ],
    features: [
      { title: "Interior painting", detail: "Walls, ceilings, doors, skirting, and trims.", icon: PaintRoller },
      { title: "Exterior painting", detail: "Villa exteriors, facades, and boundary walls.", icon: Building2 },
      { title: "Surface preparation", detail: "Crack filling, sanding, and repair of minor damage.", icon: Hammer },
      { title: "Priming", detail: "Primer on new, repaired, or stained surfaces.", icon: Layers },
      { title: "Color consultation", detail: "Help choosing colors and finishes for each room.", icon: Paintbrush },
      { title: "Protection & clean-up", detail: "Floors and furniture covered, area cleaned afterwards.", icon: ShowerHead },
    ],
    signs: [
      "Moving in or moving out",
      "Peeling, cracked, or faded paint",
      "Stains or marks that will not wash off",
      "Changing the color scheme of a room",
      "Preparing a property for new tenants",
      "Weathered exterior walls",
    ],
    steps: [
      { title: "Site visit", description: "We inspect the surfaces, measure the area, and discuss colors and finishes." },
      { title: "Protection & preparation", description: "Floors and furniture are covered, and surfaces are filled, sanded, and primed." },
      { title: "Painting", description: "Paint is applied with rollers and brushes to walls, ceilings, doors, and trims." },
      { title: "Clean-up", description: "Coverings are removed and the area is cleaned." },
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
    propertyTypes: ["Apartments", "Villas", "Offices", "Shops", "Common areas", "Exteriors"],
    faqs: [
      { question: "Do you supply the paint?", answer: "We can supply the paint, or use paint you have already bought." },
      {
        question: "Do I need to move my furniture?",
        answer: "Light items are moved and everything else is covered. Heavy furniture and appliances should be moved beforehand.",
      },
      { question: "Do you paint exteriors?", answer: "Yes. We paint villa exteriors, facades, and boundary walls." },
      {
        question: "Can you help me choose colors?",
        answer: "Yes. We can talk through colors and finishes during the site visit.",
      },
    ],
  },

  /* ----------------------------- Ducting / HVAC & VAV ----------------------------- */
  {
    slug: "ducting-hvac-vav",
    title: "Ducting / HVAC & VAV",
    icon: Wind,
    tagline: "Ductwork installation, VAV servicing, and airflow balancing for HVAC systems.",
    summary: "Fabrication and installation of ductwork, VAV servicing, and airflow balancing for HVAC systems.",
    intro: [
      "Ductwork carries cooled air from the AC system to every room. When ducts leak, are undersized, or are poorly balanced, some rooms stay warm while others are too cold, and vents become noisy.",
      "Our HVAC team fabricates and installs insulated ductwork, installs and services VAV boxes, dampers, and controls, and balances airflow zone by zone. We work on villas, offices, retail units, and commercial buildings.",
    ],
    hero: {
      src: "/services/hvac-rooftop.jpg",
      alt: "Pluto Cool technician checking refrigerant pressure on a rooftop HVAC unit",
    },
    gallery: [
      { src: "/services/hvac-indoor.jpg", alt: "Pluto Cool technician servicing an indoor AC unit from a ladder" },
      { src: "/repair.png", alt: "Rooftop HVAC ductwork and outdoor AC units on a building" },
    ],
    features: [
      { title: "Duct fabrication", detail: "Ductwork made to suit the layout of your property.", icon: Ruler },
      { title: "Duct installation", detail: "Installation of supply, return, and fresh air ducts.", icon: Wind },
      { title: "Insulation & sealing", detail: "Sealing of joints and insulation of duct runs.", icon: Layers },
      { title: "VAV systems", detail: "Installation, repair, and calibration of VAV boxes.", icon: SlidersHorizontal },
      { title: "Dampers & controls", detail: "Volume dampers, fire dampers, and zone controls.", icon: Gauge },
      { title: "Airflow balancing", detail: "Airflow measured and adjusted across each zone.", icon: Fan },
    ],
    signs: [
      "Some rooms are warmer than others",
      "Noisy or whistling vents",
      "Weak airflow from diffusers",
      "Condensation dripping from ceilings",
      "A fit-out or layout change",
      "VAV boxes that do not respond to settings",
    ],
    steps: [
      { title: "Survey", description: "Ducts and HVAC equipment are inspected and airflow is measured at each outlet." },
      { title: "Design", description: "The duct layout, sizes, and VAV settings for each zone are planned." },
      { title: "Installation & servicing", description: "Ducts, VAV boxes, dampers, and controls are installed or serviced." },
      { title: "Balancing", description: "Airflow is balanced across each room and zone, and temperatures are checked." },
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
      "Civil work such as ceiling openings or false ceilings",
      "BMS programming beyond basic VAV settings",
    ],
    propertyTypes: ["Villas", "Offices", "Retail units", "Restaurants", "Clinics", "Commercial buildings"],
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
        question: "Can existing ductwork be repaired instead of replaced?",
        answer: "Often yes. Leaks can be sealed, damaged sections replaced, and insulation repaired.",
      },
      {
        question: "Do you handle commercial projects?",
        answer: "Yes. We carry out ducting and VAV work for offices, shops, and commercial buildings, as well as homes.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const serviceHref = (slug: string) => `/services/${slug}`;
