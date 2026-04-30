'use client';
import React from 'react';
import navbar from '../../components/navbar';
import propertycard from '../../components/propertycard';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-zinc-200">
      <Navbar />
      
      <main className="pt-32 px-8 max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">Inventory</span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mt-2 mb-4">
            Exclusive Marketplace
          </h1>
          <p className="text-zinc-500 font-light tracking-wide text-sm">
            Discover properties curated for an elite, modern experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
          <PropertyCard 
            title="The Heritage Mansion"
            location="Sector 150, Noida"
            price="₹ 8.5 Cr"
            type="Mansion"
            image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
          />
          <PropertyCard 
            title="Saffron Warm Homes"
            location="Knowledge Park 5, Greater Noida"
            price="₹ 1.9 Cr"
            type="Apartment"
            image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
          />
          <PropertyCard 
            title="Royal Oak Villa"
            location="Sector 78, Noida"
            price="₹ 3.4 Cr"
            type="Villa"
            image="https://images.unsplash.com/photo-1600603430034-70e28f338d17?auto=format&fit=crop&w=800&q=80"
          />
          <PropertyCard 
            title="Forest Green Retreat"
            location="Gaur City 2, Noida"
            price="₹ 5.0 Cr"
            type="House"
            image="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
          />
          <PropertyCard 
            title="The Ruby Crest"
            location="Sector 44, Noida"
            price="₹ 9.0 Cr"
            type="Penthouse"
            image="https://images.unsplash.com/photo-1600575154943-7f72ab01e9d0?auto=format&fit=crop&w=800&q=80"
          />
          <PropertyCard 
            title="Golden Amaltas"
            location="Greater Noida"
            price="₹ 2.5 Cr"
            type="Apartment"
            image="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </main>
    </div>
  );
}
