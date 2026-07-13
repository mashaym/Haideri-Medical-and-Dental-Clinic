import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/data";

export default function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm shadow-ink-900/[0.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            {initial}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-900">{review.author}</p>
            {review.meta && (
              <p className="text-xs text-ink-400">{review.meta}</p>
            )}
          </div>
        </div>
        <Quote size={22} className="shrink-0 text-brand-100" />
      </div>

      <div className="mt-3 flex gap-0.5 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
        {review.text}
      </p>

      <p className="mt-4 text-xs font-medium text-ink-400">{review.timeAgo}</p>
    </div>
  );
}
