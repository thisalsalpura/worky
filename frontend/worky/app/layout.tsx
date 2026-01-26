import type { Metadata } from "next";
import { Londrina_Solid, Ropa_Sans } from "next/font/google";
import Index_Navbar from "@/components/navbar/Index_Navbar";
import Footer from "@/components/Footer";
import "@/libs/fontawesome"
import "./globals.css";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ropaSans = Ropa_Sans({
  variable: "--font-ropa-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Worky - Freelance Marketplace Platform",
    template: "%s | Worky",
  },
  description:
    "Worky is a scalable freelance marketplace platform built with Next.js, connecting clients and freelancers efficiently.",
  keywords: [
    "freelance marketplace",
    "hire freelancers",
    "remote jobs",
    "nextjs freelance app",
    "worky platform",
  ],
  authors: [{ name: "Worky Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${londrinaSolid.variable} ${ropaSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">

          <Index_Navbar />

          <main className="flex-1 max-w-7xl mx-auto w-full p-5">
            {children}
          </main>

          <Footer />

        </div>
      </body>
    </html>
  );
}