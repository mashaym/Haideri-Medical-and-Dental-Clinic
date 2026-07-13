import {
  Activity,
  Baby,
  Scan,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Award,
  Building2,
  Wallet,
  Users,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  tooth: Smile,
  sparkles: Sparkles,
  activity: Activity,
  syringe: Syringe,
  smile: Smile,
  baby: Baby,
  stethoscope: Stethoscope,
  shield: Shield,
  scan: Scan,
  award: Award,
  building: Building2,
  wallet: Wallet,
  users: Users,
};

export default function ServiceIcon({
  name,
  size = 22,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Smile;
  return <Icon size={size} className={className} strokeWidth={1.8} />;
}
