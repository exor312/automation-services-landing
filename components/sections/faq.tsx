"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What tools do you use?",
    answer:
      "Make, Zapier, and n8n. Industry-standard no-code platforms that integrate with 1,000+ apps. No custom code required.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Zero. I handle everything — from setup to deployment to training. You just approve the plan and enjoy the time savings.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "First automation live within 2 weeks. Time savings from day one. Most clients report 5-10 hours saved per week within the first month.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "If you don't save 5+ hours/week within 30 days, I work free until we hit that number. Or full refund. No risk.",
  },
  {
    question: "What businesses do you work with?",
    answer:
      "Solopreneurs and teams of 1-30. Coaches, consultants, agencies, e-commerce, service businesses — anyone drowning in manual tasks.",
  },
  {
    question: "Can I add more automations later?",
    answer:
      "Absolutely. Most clients start with one and expand. I offer ongoing retainer packages for continuous optimization.",
  },
  {
    question: "Is my data safe?",
    answer:
      "I use enterprise-grade tools (Make, Zapier, HubSpot) with SOC 2 compliance. Your data stays yours — I never store or access sensitive information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Common Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
