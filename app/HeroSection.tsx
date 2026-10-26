"use client";

/**
 * Hero section — Pluto Cool Technical Services
 */ import { useEffect, useRef, useState, memo, useCallback, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PlugZap,
  Wrench,
  Droplets,
  CalendarDays,
  ShieldCheck,
  CheckCircle,
  Paintbrush,
  Wind,
  Building2,
} from "lucide-react";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";

import { addDays } from "date-fns";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AirflowLines } from "@/components/AirflowLines";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const TIME_SLOTS = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

// ---------------------------------------------------------------------------
// Service cards
// ---------------------------------------------------------------------------

export const SERVICES = [
  {
    id: "AC Repairing",
    title: "AC Repairing",
    description: "Reliable fault diagnosis, repairs, and routine servicing to keep your AC cooling efficiently.",
    icon: Wrench,
    problems: [
      "AC is running but not cooling",
      "Water leaking or dripping from the indoor unit",
      "Unusual noise, odor, or frequent cycling",
      "Routine service or a repair is needed",
    ],
    cta: "Request AC Service",
  },
  {
    id: "AC Installation & Replacement",
    title: "AC Installation & Replacement",
    description:
      "Professional installation of new split and inverter units, or replacement of your old AC, with insulated piping and full testing.",
    icon: Droplets,
    problems: [
      "Dust or debris coming from the vents",
      "Weak airflow from one or more rooms",
      "Coils or ducts have not been cleaned recently",
      "Musty odors when the AC is running",
    ],
    cta: "Book a Cleaning",
  },
  {
    id: "AC Maintenance",
    title: "AC Maintenance",
    description: "Coordinated mechanical, electrical, and plumbing support with planned annual maintenance.",
    icon: Building2,
    problems: [
      "Preventive maintenance for building systems",
      "Electrical or plumbing fault requiring attention",
      "A maintenance contract or scheduled inspection is needed",
      "Support coordinating multiple MEP systems",
    ],
    cta: "Request MEP Support",
  },
  {
    id: "AC Coil & Duct Cleaning",
    title: "AC Coil & Duct Cleaning",
    description: "Professional AC installation, replacement, and repair for split, window, and ducted systems.",
    icon: PlugZap,
    problems: [
      "Installing an AC in a new room or property",
      "Replacing an old or inefficient unit",
      "Repairing an existing AC system",
      "Removing or relocating a unit during a move",
    ],
    cta: "Request Installation or Repair",
  },
  {
    id: "Full System Cleaning",
    title: "Full System Cleaning",
    description: "Interior and exterior painting with careful surface preparation and a clean, even finish.",
    icon: Paintbrush,
    problems: [
      "Walls need repainting or a color refresh",
      "Peeling, cracked, or stained paint needs attention",
      "A room or property needs painting before move-in",
      "Exterior surfaces need a fresh protective coat",
    ],
    cta: "Request a Painting Quote",
  },
  {
    id: "Annual Maintenance (AMC)",
    title: "Annual Maintenance (AMC)",
    description: "Ducting installation and airflow balancing for HVAC systems, including VAV equipment.",
    icon: Wind,
    problems: [
      "Uneven airflow or temperatures between rooms",
      "Ductwork needs installation, repair, or replacement",
      "VAV equipment needs servicing or adjustment",
      "An HVAC system needs airflow balancing",
    ],
    cta: "Request HVAC Support",
  },
];

const ServiceCards = memo(function ServiceCards({
  onSelect,
  className = "",
}: {
  onSelect?: (serviceId: string) => void;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <motion.button
            key={service.id}
            type='button'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * SERVICES.indexOf(service) }}
            onClick={() => onSelect?.(service.id)}
            className='w-full rounded-2xl  border border-white/25 bg-white/10 p-3.5 text-left shadow-lg shadow-black/20 backdrop-blur-xl transition-transform duration-400 hover:scale-102 hover:-translate-y-2 hover:border-white/40 hover:bg-white/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD4F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1626] sm:p-4'
          >
            <Card className='bg-white/5 border-white/10 text-white w-full'>
              <CardHeader className='flex flex-row items-center gap-4 space-y-0 pb-2 w-full'>
                <div className='p-2 rounded-full bg-white/15 text-sky-100 flex items-center justify-center shrink-0'>
                  <Icon className='h-5 w-5' strokeWidth={1.75} />
                </div>
                <CardTitle className='text-sm font-medium tracking-wide'>{service.title}</CardTitle>
              </CardHeader>
            </Card>
          </motion.button>
        );
      })}
    </div>
  );
});

// ---------------------------------------------------------------------------
// Booking calendar
// ---------------------------------------------------------------------------

export const BookingCalendar = memo(function BookingCalendar({
  onSelectDate,
  className = "",
}: {
  onSelectDate: (date: Date | undefined) => void;
  className?: string;
}) {
  const [date, setDate] = useState<Date | undefined>(new Date(new Date().getFullYear(), 1, 12));
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

  return (
    <Card
      className={`mx-auto w-fit rounded-3xl border border-white/25 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-xl sm:p-5 ${className}`}
      size='sm'
    >
      <CardHeader>
        <CardTitle>
          <div className='mb-3 flex items-center gap-2 text-white'>
            <CalendarDays className='h-4 w-4' strokeWidth={1.75} /> <span className='text-sm font-medium'>Booking</span>
          </div>
          <p className='mt-3 text-xs text-white/70'>Pick a date to start your booking.</p>
        </CardTitle>
      </CardHeader>
      <CardContent className='overflow-hidden rounded-xl bg-white'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(date) => {
            setDate(date);
            onSelectDate(date);
          }}
          disabled={{ before: new Date() }}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className='p-0 mx-auto [--cell-size:--spacing(9.5)]'
        />
      </CardContent>
      <CardFooter className='flex flex-wrap gap-2 border-t bg-transparent'>
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant='outline'
            size='sm'
            className='flex-1'
            onClick={() => {
              const newDate = addDays(new Date(), preset.value);
              setDate(newDate);
              setCurrentMonth(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
              onSelectDate(newDate);
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
});

// ---------------------------------------------------------------------------
// Booking dialog — shared by the cards, the calendar, and the hero CTA
// ---------------------------------------------------------------------------

export function BookingDialog({
  open,
  onOpenChange,
  serviceId,
  date,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceId: string | null;
  date: Date | undefined;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState<string | undefined>();
  const [service, setService] = useState<string | undefined>();
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [otherProblem, setOtherProblem] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Track previous open state so we only reset on open transition
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open && !wasOpen.current) {
      setService(serviceId ?? undefined);
      setName("");
      setPhone("");
      setSlot(undefined);
      setSelectedProblems(["Other"]); // Default to "Other" so the user can describe their issue
      setOtherProblem("");
      setIsSubmitted(false);
    }
    wasOpen.current = open;
  }, [open]); // intentionally omit serviceId — only read it at open time

  // Use the ID to grab the full service object to display its problems
  const currentServiceObj = SERVICES.find((s) => s.id === service);

  const handleServiceChange = (value: string | null) => {
    if (value) {
      setService(value);
      setSelectedProblems(["Other"]); // Reset problems when service changes
    }
  };

  const toggleProblem = (prob: string) => {
    setSelectedProblems((prev) => (prev.includes(prob) ? prev.filter((p) => p !== prob) : [...prev, prob]));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Log data payload
    console.log({
      name,
      phone,
      service,
      date,
      slot,
      selectedProblems,
      otherProblem: selectedProblems.includes("Other") ? otherProblem : null,
    });

    // Trigger success screen and confetti
    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7BD4F2", "#D8A657", "#ffffff"],
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md bg-[#0B1626]/95 border border-white/20 backdrop-blur-md shadow-2xl shadow-black/50 text-white max-h-[95vh] overflow-y-auto'>
        {isSubmitted ? (
          // --- SUCCESS SCREEN ---
          <div className='flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500'>
            <div className='rounded-full bg-[#7BD4F2]/10 p-4 mb-4'>
              <CheckCircle className='w-12 h-12 text-[#7BD4F2]' strokeWidth={1.5} />
            </div>
            <DialogHeader>
              <DialogTitle className='text-2xl font-bold tracking-wide text-white text-center'>
                Booking Confirmed!
              </DialogTitle>
              <DialogDescription className='text-white/70 text-center text-base mt-2'>
                Thank you for choosing Pluto Cool. Our technical team will get back to you shortly to finalize your
                appointment.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => onOpenChange(false)}
              className='mt-8 w-full max-w-[200px] bg-white/10 text-white hover:bg-white/20 transition-colors'
            >
              Close Window
            </Button>
          </div>
        ) : (
          // --- BOOKING FORM ---
          <>
            <DialogHeader>
              <DialogTitle className='text-xl font-semibold tracking-wide text-white'>Book a technician</DialogTitle>
              <DialogDescription className='text-white/70'>
                {date
                  ? `${date.toLocaleDateString(undefined, {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}${currentServiceObj ? ` · ${currentServiceObj.title}` : ""}`
                  : "Pick a date and we’ll take it from there."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className='space-y-5 mt-2'>
              <div className='space-y-2'>
                <Label htmlFor='service' className='text-white/90'>
                  Service
                </Label>
                <Select value={service} onValueChange={handleServiceChange}>
                  <SelectTrigger
                    id='service'
                    className='bg-white/5 border-white/10 text-white hover:bg-white/10 focus:ring-2 focus:ring-[#7BD4F2] focus:ring-offset-0 focus:border-transparent transition-all'
                  >
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#0B1626] border-white/20 text-white w-fit'>
                    {SERVICES.map((s) => (
                      <SelectItem key={s.id} value={s.id} className='focus:bg-white/60 focus:text-white cursor-pointer'>
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Dynamic Problems Selection */}
              {currentServiceObj && (
                <div className='space-y-3 p-3 bg-black/20 rounded-xl border border-white/5'>
                  <Label className='text-white/90 text-sm'>What issues are you facing?</Label>
                  <div className='flex flex-wrap gap-2'>
                    {currentServiceObj.problems.map((prob) => {
                      const isSelected = selectedProblems.includes(prob);
                      return (
                        <button
                          key={prob}
                          type='button'
                          onClick={() => toggleProblem(prob)}
                          className={`text-left px-3 py-1.5 rounded-full text-xs transition-all border ${
                            isSelected
                              ? "bg-[#7BD4F2]/20 border-[#7BD4F2] text-[#7BD4F2]"
                              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {prob}
                        </button>
                      );
                    })}
                    <button
                      type='button'
                      onClick={() => toggleProblem("Other")}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                        selectedProblems.includes("Other")
                          ? "bg-[#7BD4F2]/20 border-[#7BD4F2] text-[#7BD4F2]"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Other
                    </button>
                  </div>

                  {/* Text Input for "Other" */}
                  {selectedProblems.includes("Other") && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <Textarea
                        placeholder='Please describe the issue...'
                        value={otherProblem}
                        onChange={(e) => setOtherProblem(e.target.value)}
                        rows={4}
                        className='bg-white/5 border-white/10 text-white mt-2 placeholder:text-white/30 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#7BD4F2] focus-visible:ring-offset-0 transition-all resize-y min-h-[80px]'
                      />
                    </motion.div>
                  )}
                </div>
              )}

              <div className='space-y-2'>
                <Label htmlFor='slot' className='text-white/90'>
                  Preferred time
                </Label>
                <Select value={slot} onValueChange={(value) => setSlot(value ?? undefined)}>
                  <SelectTrigger
                    id='slot'
                    className='bg-white/5 border-white/10 text-white hover:bg-white/10 focus:ring-2 focus:ring-[#7BD4F2] focus:ring-offset-0 focus:border-transparent transition-all'
                  >
                    <SelectValue placeholder='Select a time' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#0B1626] border-white/20 text-white w-fit'>
                    {TIME_SLOTS.map((t) => (
                      <SelectItem key={t} value={t} className='focus:bg-white/60 focus:text-white cursor-pointer'>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name' className='text-white/90'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='John Doe'
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#7BD4F2] focus-visible:ring-offset-0 transition-all'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='phone' className='text-white/90'>
                    Phone
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder='+971 50 123 4567'
                    className='bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#7BD4F2] focus-visible:ring-offset-0 transition-all'
                  />
                </div>
              </div>

              <DialogFooter className='mt-4 border-t border-white/10 pt-4'>
                <Button
                  type='submit'
                  className='w-full cursor-pointer bg-[#D8A657] text-[#10202E] font-semibold hover:bg-[#c99646] transition-colors'
                >
                  Confirm booking
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export default function HeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const openForService = useCallback((serviceId: string) => {
    setSelectedService(serviceId);
    setDialogOpen(true);
  }, []);

  const handleSelectDate = useCallback((date: Date | undefined) => {
    setSelectedDate(date);
    if (date) setDialogOpen(true);
  }, []);

  return (
    <section className='flex-col relative w-full flex items-center justify-center overflow-hidden'>
      {/* ─── Photo Hero ─────────────────────────────────────────────────── */}
      <section
        className='
          relative w-full overflow-hidden
          /* Mobile: tall portrait hero — desktop: widescreen aspect ratio */
          min-h-[70svh] sm:min-h-0 sm:aspect-[1777/885]
        '
      >
        <Image
          src='/final_hero_background.png'
          alt='Man relaxing on a chaise reading a book, cooled by a wall-mounted AC unit, with the Dubai skyline in view'
          fill
          priority
          sizes='100vw'
          className='object-cover object-[25%_center] sm:object-center absolute inset-0 w-full h-full'
        />

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-sky-900/30'></div>

        {/* AirflowLines — scaled via % / vw on mobile, fixed px on sm+ */}
        <AirflowLines
          top='6%'
          left='14%'
          width='min(480px, 60vw)'
          height='min(260px, 33vw)'
          angle={40}
          isPaused={dialogOpen}
        />
        <AirflowLines
          top='9%'
          left='14%'
          width='min(480px, 60vw)'
          height='min(260px, 33vw)'
          angle={10}
          isPaused={dialogOpen}
        />
        <AirflowLines
          top='14%'
          left='14%'
          width='min(480px, 60vw)'
          height='min(260px, 33vw)'
          angle={-10}
          isPaused={dialogOpen}
        />

        {/* ── Mobile hero overlay: headline + CTA (hidden on sm+) ───────── */}
        <div className='absolute inset-0 flex flex-col items-center justify-end pb-10 px-5 sm:hidden'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-center'
          >
            <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-2'>
              Dubai Trusted AC Experts
            </p>
            <h1 className='text-3xl font-bold text-white leading-tight drop-shadow-lg'>
              Cool Air, 
              <br />
              <span className='text-white'>Fast Service.</span>
            </h1>
            <p className='mt-2 text-sm text-white/75 drop-shadow'>Cleaning · Repair · Gas Refill · Installation</p>
            {/* <Button
              onClick={() => setDialogOpen(true)}
              className='mt-5 bg-[#D8A657] text-[#10202E] font-semibold hover:bg-[#c99646] shadow-lg shadow-amber-900/40 transition-all active:scale-95'
            >
              Book a Technician
            </Button> */}
          </motion.div>
        </div>

        {/* ── Desktop: floating service cards (hidden below sm) ─────────── */}
        <div className='w-full hidden sm:block'>
          <ServiceCards
            // onSelect={openForService}
            className=' absolute bottom-[4%] left-[4%] w-2/3 pointer-events-auto'
          />
        </div>

        {/* ── Desktop: floating calendar (hidden below sm) ─────────────── */}
        {/* <BookingCalendar
          onSelectDate={handleSelectDate}
          className='hidden sm:block pointer-events-auto absolute right-[6%] bottom-[4%]'
        /> */}

        <BookingDialog open={dialogOpen} onOpenChange={setDialogOpen} serviceId={selectedService} date={selectedDate} />
      </section>

      {/* ─── Mobile-only: service cards + calendar below the photo ──────── */}
      <div className='sm:hidden w-full bg-[#0B1626] border-t border-white/10'>
        {/* Section header */}
        <div className='px-5 pt-6 pb-3'>
          {/* <p className='text-xs font-semibold uppercase tracking-widest text-sky-700'>What do you need?</p>
          <h2 className='mt-1 text-lg font-bold text-white'>Choose a service</h2> */}
        </div>

        {/* Service cards — full width grid */}
        <div className='px-4 pb-4'>
          {/* <ServiceCards onSelect={openForService} className='pointer-events-auto' /> */}
          <ServiceCards className='' />
        </div>

        {/* Divider */}
        <div className='mx-5 h-px bg-white/10' />

        {/* Calendar */}
        {/* <div className='px-4 py-5 flex flex-col items-center'>
          
          <BookingCalendar onSelectDate={handleSelectDate} className='pointer-events-auto w-full' />
        </div> */}
      </div>
    </section>
  );
}
