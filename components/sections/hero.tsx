"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900 to-indigo-900/30" />

      {/* Animated glow blobs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/15 blur-3xl animate-pulse [animation-delay:2s]" />

      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <p className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </span>
          First automation live in 2 weeks
        </p>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Stop Doing Buswork.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
            Start Automating It.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl leading-relaxed">
          I help solopreneurs and small teams reclaim <strong className="text-white">10+ hours per week</strong> by
          automating repetitive tasks — so you can focus on what actually grows
          your business.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:scale-105"
          >
            Book a Free Audit
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600/50 px-8 py-4 text-lg font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white hover:bg-white/5"
          >
            <Play size={18} className="text-blue-400" />
            See What I Automate
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in-up animation-delay-300 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {[
            "Free consultation",
            "No commitment",
            "Results in 2 weeks",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up animation-delay-300 mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Hours saved/week" },
            { value: "2", label: "Weeks to results" },
            { value: "30", label: "Day guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
