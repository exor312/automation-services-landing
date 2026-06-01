import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-900" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="animate-fade-in-up mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
          ⚡ First automation live in 2 weeks
        </p>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Stop Doing Buswork.
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Start Automating It.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          I help solopreneurs and small teams reclaim 10+ hours per week by
          automating repetitive tasks — so you can focus on what actually grows
          your business.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            Book a Free Automation Audit
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-4 text-lg font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white"
          >
            See What I Automate
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in-up animation-delay-300 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Free consultation
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No commitment
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Results in 2 weeks
          </span>
        </div>
      </div>
    </section>
  );
}
