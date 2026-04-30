'use client';
import { motion } from 'framer-motion';

export default function propertycard({ title, location, price, type, image }: { title: string, location: string, price: string, type: string, image: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
    >
      <div className="h-60 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-zinc-950/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-400 border border-amber-500/20">
          {type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-100 mb-1 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 mb-4 tracking-wide">{location}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-light text-emerald-400 tracking-wider">{price}</span>
          <button className="text-xs tracking-wider border border-zinc-700 px-4 py-2 rounded-lg text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
