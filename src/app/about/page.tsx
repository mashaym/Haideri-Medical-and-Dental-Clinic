import type { Metadata } from "next";
import { Award, CalendarCheck, HeartPulse, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import { clinic, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Haideri Medical and Dental Center in Abbottabad, led by Dr. Syed Saif Kazmi — a modern, family-friendly clinic offering dentistry, physiotherapy, and general medical care.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Patient Safety First",
    description:
      "Sterile instruments, modern equipment, and strict hygiene protocols on every visit.",
  },
  {
    icon: HeartPulse,
    title: "Genuine, Careful Treatment",
    description:
      "No unnecessary procedures — just honest guidance and treatment plans built around your needs.",
  },
  {
    icon: Sparkles,
    title: "Comfort-Focused",
    description:
      "A calm, modern environment designed to put nervous patients and children at ease.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Family & Medical Clinic Built on Trust"
        description="Haideri Medical and Dental Center has become the family dentist of choice for patients across Abbottabad — combining dental, cosmetic, and physiotherapy care in one modern facility."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Our Story
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink-900">
                Care that treats you like family
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
                <p>
                  Located in Kehal, Abbottabad, Haideri Medical and Dental
                  Center was built around a simple idea: patients deserve
                  professional, honest care in a clean and comfortable
                  environment — without the anxiety that often comes with
                  visiting the dentist.
                </p>
                <p>
                  Over time, that approach has turned first-time visitors
                  into long-term patients. Many of our reviews come from
                  families who now consider us their regular dentist,
                  returning for routine check-ups, cosmetic treatment, and
                  physiotherapy alike.
                </p>
                <p>
                  Today, the clinic offers a complete range of dental
                  services alongside physiotherapy and general medical
                  consultations, all under one roof, six days a week.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <Award size={28} />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-ink-900">
                    {clinic.doctor}
                  </p>
                  <p className="text-sm font-medium text-brand-600">
                    Lead Dentist &amp; Medical Consultant
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-600">
                Patients describe Dr. Syed Saif Kazmi as{" "}
                <span className="font-semibold text-ink-900">
                  &ldquo;world-class,&rdquo;
                </span>{" "}
                &ldquo;skillful,&rdquo; and a doctor who provides
                &ldquo;absolutely genuine treatment.&rdquo; His approach
                combines clinical precision with a gentle, patient-first
                manner — the reason many families return to Haideri Medical
                and Dental Center as their trusted dentist.
              </p>
              <ul className="mt-6 space-y-3 border-t border-ink-100 pt-6">
                {[
                  "Comprehensive general & cosmetic dentistry",
                  "Root canal, extractions & oral surgery",
                  "Dental implants & orthodontics",
                  "Physiotherapy & general medical consultation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-600"
                  >
                    <ServiceIcon
                      name="shield"
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What guides every appointment"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trusted by families across Abbottabad"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <ServiceIcon name={item.icon} />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={`tel:${clinic.phoneE164}`}
              icon={<Phone size={16} strokeWidth={2.5} />}
            >
              {clinic.phoneDisplay}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              icon={<CalendarCheck size={16} />}
            >
              Request an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
