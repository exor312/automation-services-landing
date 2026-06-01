"use client";

import { useInView } from "@/hooks/useInView";
import { Cog, Calendar, ArrowRight, Zap, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Lead Capture & CRM Pipeline",
    description:
      "Lead form \u2192 CRM \u2192 auto email follow-up \u2192 team notification. Never lose a lead to \u201CI forgot to reply.\u201D",
    stack: ["Make", "HubSpot Free", "Gmail"],
    price: "$500\u2013$1,500",
    highlight: "Most popular",
  },
  {
    icon: Calendar,
    title: "Booking & Appointment Automation",
    description:
      "Booking page \u2192 calendar \u2192 confirmation \u2192 reminders \u2192 follow-up. Eliminate scheduling back-and-forth forever.",
    stack: ["Calendly", "Make", "Google Calendar"],
    price: "$400\u2013$1,000",
    highlight: null,
  },
];

export default function Services() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What I Automate</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What I Automate for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Two core packages that solve the biggest time-wasters
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {service.highlight && (
                  <div className="absolute -top-3 right-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary flex items-center gap-1">
                    <Zap size={12} />
                    {service.highlight}
                  </div>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.stack.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle CTA */}
        <div
          className={`mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-10 text-center text-white shadow-lg transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
          <div className="relative">
            <h3 className="text-2xl font-bold md:text-3xl">The Automation Starter Bundle</h3>
            <p className="mt-2 text-blue-100">Get both packages bundled together and save 25%</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-lg text-blue-200 line-through">$2,500</span>
              <span className="text-5xl font-bold">$1,497</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> CRM + Booking</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> 30-day support</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} /> 2-week delivery</span>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Get the Bundle
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
