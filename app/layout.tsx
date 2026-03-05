import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Fira_Code, Newsreader } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Aryan Srivastava - Portfolio",
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
        className={`${inter.variable} ${firaCode.variable} ${newsreader.variable} bg-black text-gray-200 antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
