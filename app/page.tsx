import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
        Welcome to
      </p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Influence<span className="text-gold-gradient">2</span>Impact
      </h1>
      <p className="text-text-secondary text-lg max-w-xl mb-12">
        Scale your funding business, master digital selling, and join the elite
        Inner Circle mastermind with Darius Benders.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/saas" className="btn-gold">
          Fund2Grow Platform
        </Link>
        <Link href="/funding-mastery" className="btn-gold">
          Funding Mastery
        </Link>
        <Link href="/digital-mastery" className="btn-gold">
          Digital Mastery
        </Link>
        <Link href="/inner-circle" className="btn-gold">
          Inner Circle
        </Link>
      </div>
    </div>
  );
}
