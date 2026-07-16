import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { clinic, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Haideri Medical and Dental Center in Kehal, Abbottabad. Call, WhatsApp, or send an enquiry to book your appointment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book Your Appointment"
        description="Reach out by phone, WhatsApp, or the form below — your enquiry will be handled promptly and professionally."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-bold text-ink-900">
                  Send us a message
                </h2>
                <p className="mt-1.5 text-sm text-ink-500">
                  We usually respond within a few hours during clinic
                  timings.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Phone size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Call us</p>
                    <a
                      href={`tel:${clinic.phoneE164}`}
                      className="mt-0.5 block text-sm text-ink-500 hover:text-brand-600"
                    >
                      {clinic.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <WhatsAppIcon size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${clinic.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm text-ink-500 hover:text-brand-600"
                    >
                      Message us instantly
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      Visit us
                    </p>
                    <a
                      href={clinic.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm text-ink-500 hover:text-brand-600"
                    >
                      {clinic.address}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock size={19} />
                  </span>
                  <div className="w-full">
                    <p className="text-sm font-semibold text-ink-900">
                      Opening hours
                    </p>
                    <dl className="mt-2 space-y-1.5">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex items-center justify-between text-xs"
                        >
                          <dt className="text-ink-500">{h.day}</dt>
                          <dd
                            className={
                              h.time === "Closed"
                                ? "text-ink-400"
                                : "font-medium text-ink-700"
                            }
                          >
                            {h.time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-ink-100">
            <iframe
              title="Haideri Medical and Dental Center location map"
              src={clinic.mapsEmbedSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
