import type { Metadata } from "next";
import { CalendarCheck, Phone } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import { clinic, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental & Medical Services",
  description:
    "Explore our full range of dental and medical services — general & family dentistry, cosmetic dentistry, root canal, dental implants, orthodontics, oral surgery, pediatric dentistry, and physiotherapy in Abbottabad.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Dental & Medical Care, In One Place"
        description="From preventive care to advanced treatment, each service is delivered with professionalism, comfort, and a patient-first approach."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center sm:px-16">
            <SectionHeading
              title="Not sure which treatment you need?"
              description="Call or message us — our team will help you find the right care for your situation."
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
          </div>
        </Container>
      </section>
    </>
  );
}
