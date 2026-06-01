import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Business Automation Services | Stop Wasting Hours on Buswork",
  description:
    "I help solopreneurs and small teams automate repetitive tasks using Make, Zapier, and n8n. Reclaim 10+ hours per week. Book a free automation audit.",
  keywords: [
    "business automation",
    "workflow automation",
    "zapier consultant",
    "make.com expert",
    "n8n automation",
    "small business automation",
  ],
  openGraph: {
    title: "Business Automation Services | Stop Wasting Hours on Buswork",
    description:
      "Automate repetitive tasks. Reclaim 10+ hours per week. Free audit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
