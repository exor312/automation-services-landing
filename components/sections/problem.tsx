"use client";

import { useInView } from "@/hooks/useInView";
import { Clock, Mail, MessageCircle } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    quote: "I spend 2 hours every Monday copying data between spreadsheets",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: Mail,
    quote: "I forgot to follow up with a lead and lost a $5K client",
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: MessageCircle,
    quote: "I'm scheduling calls back-and-forth like it's 2010",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-500",
  },
];

export default function Problem() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="problem" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Problem
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sound Familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            You started your business to do meaningful work — not to drown in
            repetitive tasks that a machine could handle.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className={`group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${point.color}`}>
                  <Icon size={24} className={point.iconColor} />
                </div>
                <p className="mt-4 text-lg font-medium text-foreground italic leading-relaxed">
                  &ldquo;{point.quote}&rdquo;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
