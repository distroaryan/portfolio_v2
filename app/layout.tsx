import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter, Fira_Code, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "distroaryan",
  description: "Backend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} ${newsreader.variable} bg-[#0a0a0a] antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        <Navbar />
        <div className="relative z-0">
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
