import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Influence2Impact | Darius Benders",
  description:
    "Scale your funding business, master digital offers, and join the elite Inner Circle mastermind with Darius Benders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-bg min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
