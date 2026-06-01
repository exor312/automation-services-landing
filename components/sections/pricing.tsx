"use client";

import { useInView } from "@/hooks/useInView";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  { name: "Starter", price: "$997", description: "Perfect for solopreneurs ready to automate their first workflow", features: ["1 custom automation", "2-week delivery", "30-day support", "Tool setup & training"], highlighted: false },
  { name: "Growth", price: "$2,497", description: "The complete package for teams ready to scale", features: ["CRM + Booking bundle", "2-week delivery", "30-day support", "Tool setup & training", "Priority support", "Monthly check-in call"], highlighted: true },
  { name: "Done-For-You", price: "$4,497", description: "Full automation overhaul for established businesses", features: ["Full workflow audit", "3 custom automations", "4-week delivery", "60-day support", "Custom reporting dashboard", "Team training session", "Quarterly review calls"], highlighted: false },
];

export default function Pricing() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Invest in Your Time</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transparent pricing. No hidden fees. Every package includes setup, training, and support.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-3 items-start">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-xl border transition-all duration-500 ${
                tier.highlighted
                  ? "border-primary bg-card shadow-xl ring-2 ring-primary/20 p-8 md:p-10"
                  : "border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 p-8"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1 text-sm font-semibold text-white flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.02]"
                    : "border border-border bg-background text-foreground hover:bg-muted hover:border-primary/30"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "500ms" }}>
          <p className="text-sm text-muted-foreground">
            30-day guarantee — If you don&apos;t save 5+ hours/week, full refund. No risk.
          </p>
        </div>
      </div>
    </section>
  );
}
