"use client";

import { useInView } from "@/hooks/useInView";
import { Search, Wrench, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Audit", subtitle: "Week 1", description: "60-minute call mapping your workflows. I identify the top 3 time-wasters and prioritize what to automate first.", color: "from-blue-500 to-blue-600" },
  { icon: Wrench, number: "02", title: "Build", subtitle: "Week 2", description: "I build, deploy, and test your automations. You review and approve. Done right, done fast.", color: "from-cyan-500 to-cyan-600" },
  { icon: Rocket, number: "03", title: "Automate", subtitle: "Week 3+", description: "Your team runs on autopilot. I provide 30-day support so everything keeps humming — even as your business grows.", color: "from-emerald-500 to-emerald-600" },
];

export default function HowItWorks() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="how-it-works" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Simple. Fast. Done.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            No lengthy onboarding. No complex proposals. Just three clear steps to getting your time back.
          </p>
        </div>

        <div ref={ref} className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16.67%] right-[16.67%] top-20 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 md:block" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className={`relative text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-xl font-bold text-white shadow-lg ring-4 ring-muted`}>
                  {step.number}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <Icon size={20} className="text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm font-medium text-primary">{step.subtitle}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0"}`} style={{ transitionDelay: "500ms" }}>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Start Your Audit
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
