import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Haideri Medical and Dental Center home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2c-2.5 0-4.5 1.7-6 1.7-1.2 0-2 .8-2 2.3 0 4.5 1.4 9.5 2.8 12.6.6 1.3 1.3 2.4 2.5 2.4 1.5 0 1.6-2.6 1.8-4.4.1-1.1.3-2.2.9-2.2s.8 1.1.9 2.2c.2 1.8.3 4.4 1.8 4.4 1.2 0 1.9-1.1 2.5-2.4C18.6 15.5 20 10.5 20 6c0-1.5-.8-2.3-2-2.3-1.5 0-3.5-1.7-6-1.7Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-bold tracking-tight text-ink-900 sm:text-base">
          Haideri Medical
        </span>
        <span className="text-[11px] font-medium tracking-wide text-brand-600 uppercase sm:text-xs">
          &amp; Dental Center
        </span>
      </span>
    </Link>
  );
}
