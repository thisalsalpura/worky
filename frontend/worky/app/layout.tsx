import type { Metadata } from "next";
import { Londrina_Solid, Ropa_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Index_Navbar } from "@/components/ui/navbar/Index_Navbar";
import { Footer } from "@/components/ui/Footer";
import "@/libs/fontawesome";
import "./globals.css";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
  display: "swap"
});

const ropaSans = Ropa_Sans({
  variable: "--font-ropa-sans",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "Worky",
    default: "Worky - Freelance Marketplace Platform"
  },
  description: "Worky is a scalable Freelance Marketplace Platform, connecting Clients and Freelancers Efficiently.",
  keywords: [
    "freelance marketplace",
    "freelance app",
    "hire freelancers",
    "remote jobs",
    "worky platform"
  ],
  authors: [{ name: "Thisal Senevirathne" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${londrinaSolid.variable} ${ropaSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">

            <Index_Navbar />

            <main className="mx-auto max-w-7xl w-full flex-1 p-5">
              {children}
            </main>

            <Footer />

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}