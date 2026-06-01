import { Search, Wrench, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Audit",
      subtitle: "Week 1",
      description:
        "60-minute call mapping your workflows. I identify the top 3 time-wasters and prioritize what to automate first.",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Build",
      subtitle: "Week 2",
      description:
        "I build, deploy, and test your automations. You review and approve. Done right, done fast.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Automate",
      subtitle: "Week 3+",
      description:
        "Your team runs on autopilot. I provide 30-day support so everything keeps humming — even as your business grows.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple. Fast. Done.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            No lengthy onboarding. No complex proposals. Just three clear steps
            to getting your time back.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 md:block" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Number badge */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg ring-4 ring-muted">
                {step.number}
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                <step.icon size={20} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-primary">{step.subtitle}</p>
              <p className="mt-3 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
