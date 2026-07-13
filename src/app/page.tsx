import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { clinic, hours, reviews, services, whyChooseUs } from "@/lib/data";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredReviews = reviews.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(26,173,160,0.35),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(60,202,187,0.25),transparent_40%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-200">
                <Star size={13} fill="currentColor" className="text-gold-400" />
                Loved by patients across Abbottabad
              </div>
              <h1 className="font-display mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Gentle, Professional Dental &amp; Medical Care in Abbottabad
              </h1>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
                Haideri Medical and Dental Center offers family dentistry,
                cosmetic treatments, dental implants, and physiotherapy —
                led by {clinic.doctor} in a clean, modern facility patients
                trust as their family clinic.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`tel:${clinic.phoneE164}`}
                  icon={<Phone size={17} strokeWidth={2.5} />}
                >
                  Call {clinic.phoneDisplay}
                </Button>
                <Button
                  href={`https://wa.me/${clinic.whatsappNumber}`}
                  external
                  variant="outline"
                  icon={<WhatsAppIcon size={17} />}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="sr-only">Google reviews</dt>
                  <dd className="font-display text-2xl font-bold text-white">
                    45+
                  </dd>
                  <dd className="mt-1 text-xs text-ink-400">Google Reviews</dd>
                </div>
                <div>
                  <dt className="sr-only">Services offered</dt>
                  <dd className="font-display text-2xl font-bold text-white">
                    9+
                  </dd>
                  <dd className="mt-1 text-xs text-ink-400">
                    Dental &amp; Medical Services
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Days open</dt>
                  <dd className="font-display text-2xl font-bold text-white">
                    6
                  </dd>
                  <dd className="mt-1 text-xs text-ink-400">Days Open a Week</dd>
                </div>
              </dl>
            </div>

            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:max-w-md sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <ShieldCheck size={26} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {clinic.doctor}
                    </p>
                    <p className="text-sm text-brand-200">
                      Lead Dentist &amp; Medical Consultant
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "Modern, hygienic clinical environment",
                    "Gentle, patient-focused treatment",
                    "Affordable fees, transparent care",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <BadgeCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {featuredServices.slice(0, 4).map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 text-xs font-medium text-ink-200"
                    >
                      <ServiceIcon
                        name={s.icon}
                        size={16}
                        className="shrink-0 text-brand-400"
                      />
                      <span className="truncate">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/20 sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20 text-gold-500">
                  <Star size={18} fill="currentColor" strokeWidth={0} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">
                    &ldquo;Best dentist in Abbottabad&rdquo;
                  </p>
                  <p className="text-xs text-ink-400">— Google review</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="Care built around comfort, trust, and results"
            description="What our patients highlight again and again in their reviews — professionalism, cleanliness, and genuine care."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive dental & medical care, under one roof"
            description="From routine check-ups to advanced treatments and physiotherapy, our team covers your family's care needs."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" icon={<ArrowRight size={16} />}>
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Trusted by families across Abbottabad"
            description="Real feedback from our Google Business Profile."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/reviews" variant="secondary" icon={<ArrowRight size={16} />}>
              Read All Reviews
            </Button>
          </div>
        </Container>
      </section>

      {/* Hours & location */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
                <Clock size={13} />
                Opening Hours
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
                Visit us six days a week
              </h2>
              <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] px-6">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-3.5 text-sm"
                  >
                    <dt className="font-medium text-ink-200">{h.day}</dt>
                    <dd
                      className={
                        h.time === "Closed"
                          ? "text-ink-500"
                          : "font-semibold text-white"
                      }
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
                <MapPin size={13} />
                Our Location
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
                Find us in Kehal, Abbottabad
              </h2>
              <p className="mt-4 text-ink-300">{clinic.address}</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Haideri Medical and Dental Center location"
                  src={clinic.mapsEmbedSrc}
                  width="100%"
                  height="280"
                  loading="lazy"
                  className="grayscale-[15%]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Get directions &amp; contact details
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <Sparkles className="mx-auto text-brand-100" size={28} />
            <h2 className="font-display mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
              Ready for a healthier, brighter smile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-brand-50">
              Call, message us on WhatsApp, or send an enquiry — our team
              will get back to you promptly to schedule your visit.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={`tel:${clinic.phoneE164}`}
                variant="secondary"
                icon={<Phone size={16} strokeWidth={2.5} />}
              >
                {clinic.phoneDisplay}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                icon={<CalendarCheck size={16} />}
              >
                Request an Appointment
              </Button>
            </div>
            <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-brand-100">
              <Users size={14} />
              Trusted as the family dentist for patients across Abbottabad
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
