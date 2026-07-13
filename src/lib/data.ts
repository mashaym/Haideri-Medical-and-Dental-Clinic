export const clinic = {
  name: "Haideri Medical and Dental Center",
  shortName: "Haideri Dental",
  doctor: "Dr. Syed Saif Kazmi",
  phoneDisplay: "0333 9482234",
  phoneE164: "+923339482234",
  whatsappNumber: "923339482234",
  address: "46W9+3RP, Kehal, Abbottabad, 22020, Pakistan",
  addressShort: "Kehal, Abbottabad, KPK",
  mapsQuery: "46W9+3RP, Kehal, Abbottabad, 22020",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=46W9%2B3RP%2C+Kehal%2C+Abbottabad%2C+22020",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=46W9%2B3RP%2C+Kehal%2C+Abbottabad%2C+22020&output=embed",
} as const;

export const hours = [
  { day: "Monday", time: "10 am – 8 pm" },
  { day: "Tuesday", time: "10 am – 8 pm" },
  { day: "Wednesday", time: "10 am – 8 pm" },
  { day: "Thursday", time: "10 am – 8 pm" },
  { day: "Friday", time: "12 pm – 9 pm" },
  { day: "Saturday", time: "10 am – 8 pm" },
  { day: "Sunday", time: "Closed" },
] as const;

// Day index: 0 = Sunday ... 6 = Saturday, matching Date.getDay()
export const hoursByDayIndex = [
  { day: "Sunday", open: null, close: null },
  { day: "Monday", open: 10, close: 20 },
  { day: "Tuesday", open: 10, close: 20 },
  { day: "Wednesday", open: 10, close: 20 },
  { day: "Thursday", open: 10, close: 20 },
  { day: "Friday", open: 12, close: 21 },
  { day: "Saturday", open: 10, close: 20 },
] as const;

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon:
    | "tooth"
    | "sparkles"
    | "activity"
    | "syringe"
    | "smile"
    | "baby"
    | "stethoscope"
    | "shield"
    | "scan";
};

export const services: Service[] = [
  {
    slug: "general-family-dentistry",
    name: "General & Family Dentistry",
    shortDescription:
      "Routine check-ups, cleanings, and preventive care for every member of the family.",
    description:
      "Comprehensive dental exams, professional cleanings (scaling & polishing), cavity checks, and preventive guidance. Our family-friendly approach means patients of all ages are treated with the same gentle, thorough care.",
    icon: "tooth",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Teeth whitening, veneers, and smile makeovers using modern techniques.",
    description:
      "From professional teeth whitening to porcelain veneers and full smile makeovers, we help you achieve a brighter, more confident smile using safe, proven cosmetic techniques.",
    icon: "sparkles",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription:
      "Painless, precise root canal therapy to save damaged or infected teeth.",
    description:
      "Modern, minimally uncomfortable root canal therapy to treat infected or badly decayed teeth, relieving pain and preserving your natural tooth wherever possible.",
    icon: "syringe",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "Permanent, natural-looking replacements for missing teeth.",
    description:
      "Durable, natural-looking dental implants to replace missing teeth, restoring both function and appearance with long-lasting results.",
    icon: "shield",
  },
  {
    slug: "orthodontics-braces",
    name: "Orthodontics & Braces",
    shortDescription:
      "Teeth straightening solutions for children, teens, and adults.",
    description:
      "Traditional braces and modern alignment options to correct crowding, spacing, and bite issues for patients of all ages.",
    icon: "smile",
  },
  {
    slug: "oral-surgery-extractions",
    name: "Oral Surgery & Extractions",
    shortDescription:
      "Safe, comfortable tooth extractions and minor oral surgical procedures.",
    description:
      "From routine to complex extractions, including wisdom teeth, our team ensures a safe and comfortable experience with clear aftercare guidance.",
    icon: "activity",
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDescription:
      "Gentle, patient dental care designed especially for children.",
    description:
      "A calm, friendly environment where children feel at ease, with preventive care and treatment tailored to young patients.",
    icon: "baby",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription:
      "Effective, well-guided physiotherapy sessions in a modern facility.",
    description:
      "Our physiotherapy services are guided by experienced professionals and consistently highlighted by patients as effective, affordable, and well-equipped.",
    icon: "stethoscope",
  },
  {
    slug: "general-medical-consultation",
    name: "General Medical Consultation",
    shortDescription:
      "Medical consultations available alongside our dental services.",
    description:
      "As a combined medical and dental center, we also offer general medical consultations for common health concerns, all under one roof.",
    icon: "scan",
  },
];

export type Review = {
  author: string;
  meta?: string;
  timeAgo: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Usman Suleman",
    meta: "2 reviews",
    timeAgo: "5 months ago",
    text: "I had visited with my family for dental treatment and find them quite professional. They are now our family dentist. Highly recommended.",
  },
  {
    author: "Yasir Suleman",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "I had a highly positive experience when my family underwent dental treatments at Dr. Syed Saif's clinic. The staff exhibited exceptional professionalism and provided comprehensive guidance throughout the process. I wholeheartedly recommend Haideri Medical and Dental Center to anyone seeking dental care.",
  },
  {
    author: "Shamim Kosar",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "This is a highly professional dental clinic with experienced and competent doctors. The staff is courteous and well-trained, and patients receive excellent care in a comfortable environment. The overall attitude and service quality are commendable.",
  },
  {
    author: "Nadeem Gul",
    meta: "Local Guide · 10 reviews · 2 photos",
    timeAgo: "5 months ago",
    text: "Had great experience with high qualified doctor the clinic was clean and modern with healthy environment and the doctor was gentle with all the treatment procedure the experience was 10 on 10",
  },
  {
    author: "Shahzaib Syed",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Excellent experience overall. The doctors are professional, knowledgeable, and very cooperative. Dental services are handled with great care, and the physiotherapy sessions are effective and well-guided. The staff is polite, the environment is comfortable.",
  },
  {
    author: "Fahad Malik",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "I got back from Saudia and went to this place for my dental treatment. Got really surprised to see such a professional and highly skilled staff. Fees were so minor for such an excellent treatment.",
  },
  {
    author: "Mudasir Hilal",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Best dental clinic in Abbottabad.",
  },
  {
    author: "M Maqbool",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "One of the best dental clinic in Abbottabad.",
  },
  {
    author: "Fazi Kazmi",
    meta: "2 reviews · 3 photos",
    timeAgo: "5 months ago",
    text: "Best physio therapy services in Abbottabad, friendly environment, well equipped and affordable.",
  },
  {
    author: "arslan umar",
    meta: "Local Guide · 30 reviews · 8 photos",
    timeAgo: "5 months ago",
    text: "Best dental clinic here in Abbottabad.",
  },
  {
    author: "azam saleem",
    meta: "6 reviews",
    timeAgo: "5 months ago",
    text: 'Dr Saif described as "world-class," providing "absolutely genuine treatment" and "skillful" care.',
  },
  {
    author: "Trust Well",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Very nice place to be, very professional and has great customer service.",
  },
  {
    author: "Siraj Ahmed",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Doctor Saif is a great doctor.",
  },
  {
    author: "Fahad Kazmi",
    meta: "1 review · 1 photo",
    timeAgo: "5 months ago",
    text: "Best physiotherapy service in Abbottabad.",
  },
  {
    author: "Kamal Ahmad",
    meta: "3 reviews",
    timeAgo: "5 months ago",
    text: "Best dentist in Abbottabad.",
  },
  {
    author: "Orca",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Recommended dental clinic.",
  },
  {
    author: "ShAyan Kabir",
    meta: "2 reviews · 1 photo",
    timeAgo: "5 months ago",
    text: "Impressive and polite staff.",
  },
  {
    author: "Sumbul Washma",
    meta: "1 review",
    timeAgo: "5 months ago",
    text: "Excellent.",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced, Trusted Doctor",
    description:
      'Led by Dr. Syed Saif Kazmi, described by patients as "world-class" and "skillful," with a track record of genuine, careful treatment.',
    icon: "award",
  },
  {
    title: "Modern, Clean Facility",
    description:
      "A clean, modern, well-equipped clinic that patients consistently rate as comfortable and hygienic.",
    icon: "building",
  },
  {
    title: "Affordable Care",
    description:
      "High-quality dental and physiotherapy treatment at fees patients describe as fair and minor for the quality delivered.",
    icon: "wallet",
  },
  {
    title: "Family-Friendly",
    description:
      "A courteous, well-trained team that treats every patient — from children to grandparents — with patience and respect.",
    icon: "users",
  },
] as const;
