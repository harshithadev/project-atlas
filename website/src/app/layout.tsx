import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { AskProvider } from "@/components/providers/AskProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AskPanel } from "@/components/ask/AskPanel";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Atlas — Harshitha Devineni",
  description:
    "Thinking alongside Harshitha. A living workspace exploring strategy, design, technology, and human experience.",
  openGraph: {
    title: "Project Atlas — Harshitha Devineni",
    description:
      "I explore the intersection of strategy, design, technology, and human experience to build meaningful digital products.",
    images: ["/images/workspace-day.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <ThemeProvider>
          <AskProvider>
            {children}
            <ThemeToggle />
            <AskPanel />
          </AskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
