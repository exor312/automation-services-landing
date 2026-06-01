"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowRight, Calendar, Shield } from "lucide-react";

export default function FinalCTA() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-16 md:py-24">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/[0.02]" />

      <div ref={ref} className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Ready to Reclaim Your Time?
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl text-lg text-blue-100 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "100ms" }}>
          Book a free 30-minute automation audit. No pitch — just a clear plan showing exactly what to automate first.
        </p>
        <div className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <a href="mailto:hello@autoflow.example.com" className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl transition-all hover:shadow-2xl hover:scale-105">
            <Calendar size={20} />
            Book Your Free Audit
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "300ms" }}>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Free consultation
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            No commitment
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={16} className="text-emerald-300" />
            30-day guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
