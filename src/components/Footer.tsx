import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { clinic, hours, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-300">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="[&_span]:text-white [&_a]:text-white">
              <Logo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Trusted dental &amp; medical care in Abbottabad — general and
              cosmetic dentistry, physiotherapy, and family-friendly service
              led by {clinic.doctor}.
            </p>
            <a
              href={`https://wa.me/${clinic.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-2 text-sm font-medium text-[#25D366]"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-4">
                  <span>{h.day}</span>
                  <span
                    className={
                      h.time === "Closed" ? "text-ink-500" : "text-ink-300"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <a
                  href={clinic.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {clinic.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={17} className="shrink-0 text-brand-400" />
                <a
                  href={`tel:${clinic.phoneE164}`}
                  className="transition-colors hover:text-white"
                >
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={17} className="shrink-0 text-brand-400" />
                <span>Fri 12–9 pm · Sun Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {clinic.name}. All rights reserved.
          </p>
          <p>Kehal, Abbottabad, Khyber Pakhtunkhwa</p>
        </div>
      </Container>
    </footer>
  );
}
