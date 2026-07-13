import type { Metadata } from "next";
import { ExternalLink, Star } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what patients are saying about Haideri Medical and Dental Center in Abbottabad — real feedback from our Google Business Profile.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Reviews"
        title="What Our Patients Are Saying"
        description="Feedback shared by real patients on our Google Business Profile — from dental treatment to physiotherapy care."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-ink-100 bg-white p-6 sm:flex-row sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink-900">
                  Highly rated on Google
                </p>
                <p className="text-sm text-ink-500">
                  {reviews.length}+ written reviews from patients across
                  Abbottabad
                </p>
              </div>
            </div>
            <Button
              href="https://www.google.com/search?q=Haideri+Medical+and+Dental+Center+Abbottabad+reviews"
              external
              variant="secondary"
              icon={<ExternalLink size={15} />}
            >
              View on Google
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
