import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
          Ready to Reclaim Your Time?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Book a free 30-minute automation audit. No pitch — just a clear plan
          showing exactly what to automate first.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@autoflow.example.com"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
          >
            Book Your Free Audit
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
        <p className="mt-6 text-sm text-blue-200">
          Free consultation · No commitment · Results in 2 weeks
        </p>
      </div>
    </section>
  );
}
