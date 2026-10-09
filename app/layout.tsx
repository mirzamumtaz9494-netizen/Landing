import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrandStay | Hospitality SaaS platform",
  description: "Run every property from one powerful workspace. Manage success rates, operations, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} min-h-screen flex flex-col bg-brand-dark text-white`}>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
