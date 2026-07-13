import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-900/10",
  secondary: "bg-white text-brand-700 hover:bg-brand-50 border border-brand-200",
  outline:
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
