import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Fira_Code, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
        className={`${inter.variable} ${firaCode.variable} ${newsreader.variable} ${jetbrainsMono.variable} bg-[url('/samurai-bg.png')] bg-cover bg-fixed bg-[position:80%_center] md:bg-center antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {/* Dark overlay to balance the moonlight theme */}
        {/* A lighter version */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        {/* <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-black via-black/90 to-black/40" /> */}
        <Navbar />
        <div className="relative z-0">
          {children}
        </div>
         <Analytics />
      </body>
    </html>
  );
}
