import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-text-secondary text-sm">
          &copy; 2024 Influence2Impact. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/saas" className="text-sm text-text-secondary hover:text-white transition-colors">
            Fund2Grow
          </Link>
          <Link href="/funding-mastery" className="text-sm text-text-secondary hover:text-white transition-colors">
            Funding Mastery
          </Link>
          <Link href="/digital-mastery" className="text-sm text-text-secondary hover:text-white transition-colors">
            Digital Mastery
          </Link>
          <Link href="/inner-circle" className="text-sm text-text-secondary hover:text-white transition-colors">
            Inner Circle
          </Link>
        </div>
      </div>
    </footer>
  );
}
