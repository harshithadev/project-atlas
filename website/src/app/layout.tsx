import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import { AskProvider } from "@/components/providers/AskProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AskPanel } from "@/components/ask/AskPanel";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BottomDock } from "@/components/workspace/BottomDock";
import "./globals.css";

// Applied before first paint so returning night-mode visitors don't see a
// flash of the day theme.
const themeInitScript = `try{if(localStorage.getItem("atlas-theme")==="night")document.documentElement.dataset.theme="night"}catch(e){}`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <AskProvider>
            {children}
            <BottomDock />
            <ThemeToggle />
            <AskPanel />
          </AskProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
