export default function Problem() {
  const painPoints = [
    {
      icon: "🕐",
      quote: "I spend 2 hours every Monday copying data between spreadsheets",
    },
    {
      icon: "📧",
      quote: 'I forgot to follow up with a lead and lost a $5K client"',
    },
    {
      icon: "😩",
      quote: "I'm scheduling calls back-and-forth like it's 2010",
    },
  ];

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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-xl bg-card p-6 shadow-sm border border-border"
            >
              <div className="text-3xl">{point.icon}</div>
              <p className="mt-4 text-lg font-medium text-foreground italic">
                &ldquo;{point.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
