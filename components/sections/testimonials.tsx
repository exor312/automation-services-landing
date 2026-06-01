"use client";

import { useInView } from "@/hooks/useInView";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "I was spending 2 hours a day on follow-ups. Now it\'s automatic. I closed 3 extra deals last month because nothing falls through the cracks.", name: "Sarah K.", role: "Business Coach", stars: 5 },
  { quote: "The booking automation alone saved me 5 hours a week. No more back-and-forth emails to schedule calls. It just works.", name: "Marcus D.", role: "Consulting Agency Owner", stars: 5 },
  { quote: "I was skeptical about automation, but the audit showed me exactly what was possible. Two weeks later, my CRM runs itself.", name: "Lisa R.", role: "E-commerce Founder", stars: 5 },
];

export default function Testimonials() {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Results</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">What Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Real time savings from real business owners</p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <Quote size={32} className="absolute top-4 right-4 text-primary/10" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
