import { Phone } from "lucide-react";
import { clinic } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink-100 bg-white/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(15,23,42,0.08)] lg:hidden">
      <a
        href={`tel:${clinic.phoneE164}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-600 py-3.5 text-sm font-semibold text-white"
      >
        <Phone size={17} strokeWidth={2.5} />
        Call Now
      </a>
      <a
        href={`https://wa.me/${clinic.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
      >
        <WhatsAppIcon size={17} />
        WhatsApp
      </a>
    </div>
  );
}
