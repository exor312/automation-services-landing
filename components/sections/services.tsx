import { Cog, Calendar, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: "Lead Capture & CRM Pipeline",
      description:
        'Lead form → CRM → auto email follow-up → team notification. Never lose a lead to "I forgot to reply."',
      stack: "Make + HubSpot Free + Gmail",
      price: "$500–$1,500",
    },
    {
      icon: Calendar,
      title: "Booking & Appointment Automation",
      description:
        "Booking page → calendar → confirmation → reminders → follow-up. Eliminate scheduling back-and-forth forever.",
      stack: "Calendly + Make + Google Calendar",
      price: "$400–$1,000",
    },
  ];

  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What I Automate
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What I Automate for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Two core packages that solve the biggest time-wasters
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Stack: {service.stack}
                </span>
                <span className="text-lg font-semibold text-primary">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold">The Automation Starter</h3>
          <p className="mt-2 text-blue-100">
            Get both packages bundled together and save
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="text-4xl font-bold">$1,497</span>
          </div>
          <a
            href="#pricing"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:shadow-lg"
          >
            View Pricing
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
