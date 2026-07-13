import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  return (
    <div
      id={service.slug}
      className="group scroll-mt-24 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="font-display mt-4 text-lg font-semibold text-ink-900">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {detailed ? service.description : service.shortDescription}
      </p>
      {!detailed && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Learn more
          <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}
