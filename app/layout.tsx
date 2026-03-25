import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Influence2Impact | Darius Benders",
  description:
    "Scale your funding business, master digital selling, and join the elite Inner Circle mastermind with Darius Benders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-pattern" />
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />

        <header>
          <div className="container">
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="logo">
                <div className="logo-icon">I2I</div>
                Influence<span>2</span>Impact
              </div>
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <p className="footer-text">
              &copy; 2024 <a href="/">Influence2Impact</a>. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
