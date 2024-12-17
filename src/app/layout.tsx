import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umrah - BusinessEasy",
  description:
    "True path of life is Islam. Best & Cheapest Umrah package for all over muslims. Umrah from Finland. Join us for a Spiritual Journey: Umrah in Soudi Arabia. Embark on a life-changing journey to the holy cities of Makkah and Madinah. Join our exclusive 7-days Umrah package and experience the peace, blessings, and spirituality of Umrah with Comfort and ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Header />
        </header>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
