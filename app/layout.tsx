import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MatrixRain } from "@/components/effects/MatrixRain";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haris Bhoraniya — Full Stack / React Developer",
  description:
    "Terminal-style interactive portfolio for Haris Bhoraniya, Full Stack / React Developer specializing in React, Next.js, TypeScript, Electron.js and React Native.",
  keywords: [
    "Haris Bhoraniya",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Haris Bhoraniya — Full Stack / React Developer",
    description:
      "Terminal-style interactive portfolio. Type a command to explore projects, skills and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable}`}>
      <body>
        <MatrixRain />
        {children}
      </body>
    </html>
  );
}
