import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <span className="font-bold text-lg text-white">AutoFlow</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Helping solopreneurs and small teams automate repetitive tasks so
              they can focus on what actually grows their business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:hello@autoflow.example.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  hello@autoflow.example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AutoFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
