'use client';
import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-zinc-200 p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-16 border-b border-zinc-900 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-500">Workspace</span>
            <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mt-1">Dashboard</h1>
          </div>
          <Link href="/" className="text-sm tracking-wide text-zinc-400 hover:text-emerald-400">
            &larr; Back to Home
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Properties Listed</h3>
            <p className="text-4xl font-light text-emerald-400">4</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Active Leads</h3>
            <p className="text-4xl font-light text-amber-400">12</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Total Responses</h3>
            <p className="text-4xl font-light text-zinc-100">48</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-10">
            <h2 className="text-xl font-bold mb-6">Create New Listing</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Property Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Elegant Green Heights" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-zinc-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Price</label>
                  <input 
                    type="text" 
                    placeholder="e.g., ₹ 2.5 Cr" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Noida Extension" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-zinc-300"
                  />
                </div>
              </div>
              <button type="button" className="px-6 py-3 bg-amber-500 text-zinc-950 font-medium rounded-xl text-sm shadow-xl hover:scale-[1.01] transition-all">
                List Property
              </button>
            </form>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Need CRM Automation?</h3>
              <p className="text-zinc-500 font-light text-sm mb-6 leading-relaxed tracking-wide">
                Upgrade to our premium Leadknight CRM platform to get full automation and pipeline management.
              </p>
            </div>
            <button className="w-full py-3 bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-all text-sm font-medium rounded-xl">
              Explore CRM Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
