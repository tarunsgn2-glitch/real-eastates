'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] text-zinc-200 selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-8 overflow-hidden bg-gradient-to-b from-zinc-950/20 via-[#0a0f0d] to-[#0a0f0d]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Premium Real Estate Marketplace
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-none"
          >
            Discover Properties <br/>
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
              Beyond Imagination
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-zinc-400 max-w-2xl text-lg md:text-xl font-light tracking-wide mb-12"
          >
            List, discover, and generate responses with premium modules. Experience real estate that feels like an exclusive art piece.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 items-center"
          >
            <Link href="/marketplace" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-sm font-medium rounded-xl shadow-2xl shadow-amber-500/20 hover:scale-[1.02] transition-all">
              Explore Marketplace
            </Link>
            <Link href="/dashboard" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-xl hover:text-amber-400 hover:border-amber-500/30 transition-all">
              Go to Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-32 px-8 bg-zinc-950/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">Featured</span>
              <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mt-2">Premium Listings</h2>
            </div>
            <Link href="/marketplace" className="text-sm tracking-wide text-zinc-400 hover:text-amber-400 transition-colors">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PropertyCard 
              title="The Imperial Palace"
              location="Sector 137, Noida"
              price="₹ 4.5 Cr"
              type="Villa"
              image="https://images.unsplash.com/photo-1613490493576-7fde63185c1a?auto=format&fit=crop&w=800&q=80"
            />
            <PropertyCard 
              title="Golden Tulip Villa"
              location="Gaur City 2, Noida"
              price="₹ 2.8 Cr"
              type="Apartment"
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
            />
            <PropertyCard 
              title="Jade Forest Resort"
              location="Greater Noida West"
              price="₹ 6.2 Cr"
              type="Independent House"
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="app-download" className="py-32 px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 via-[#131b18] to-zinc-900 rounded-[2.5rem] p-16 border border-zinc-800 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-xs text-emerald-400 uppercase tracking-widest">Mobile App</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight tracking-tight">
              Carry the Premium Experience in Your Pocket
            </h2>
            <p className="text-zinc-400 font-light tracking-wide leading-relaxed mb-8">
              Get access to instant notifications, track leads, and communicate seamlessly with buyers and builders. 
            </p>
            <button className="px-8 py-4 bg-emerald-500 text-zinc-950 rounded-xl font-medium shadow-2xl shadow-emerald-500/20 hover:scale-[1.02] transition-all">
              Download our App
            </button>
          </div>
          <div className="w-64 h-64 rounded-full bg-emerald-500/10 filter blur-3xl absolute right-12 top-12" />
        </div>
      </section>
    </main>
  );
}
