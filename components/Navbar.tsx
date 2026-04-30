import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4 px-8 flex justify-between items-center text-zinc-100">
      <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent tracking-wider">
        EstateLux
      </div>
      <div className="flex items-center gap-8 text-sm uppercase tracking-widest font-light text-zinc-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <Link href="/marketplace" className="hover:text-amber-400 transition-colors">Marketplace</Link>
        <Link href="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link>
      </div>
      <div className="flex items-center gap-4">
        <a href="#app-download" className="px-5 py-2 text-sm bg-gradient-to-r from-amber-500 to-emerald-600 text-zinc-950 font-medium rounded-full shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300">
          Download App
        </a>
      </div>
    </nav>
  );
}
