import React from 'react';
import { ShoppingCart, Refrigerator, CalendarCheck, Scale } from 'lucide-react';

function Tips() {
  return (
    <div className="space-y-8">
      <section className="content-section">
        <h1 className="text-3xl font-bold text-[#8B4513] mb-6">
          Tips to Reduce Food Waste
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#496F5D]">
              Smart Shopping
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <ShoppingCart className="w-12 h-12 text-[#496F5D] mb-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Make a shopping list and stick to it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Check your fridge before shopping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Don't shop when hungry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Buy only what you need</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#496F5D]">
              Storage Solutions
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Refrigerator className="w-12 h-12 text-[#496F5D] mb-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Store food at the right temperature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Use airtight containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Practice FIFO (First In, First Out)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Keep your fridge organized</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#496F5D]">
              Meal Planning
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <CalendarCheck className="w-12 h-12 text-[#496F5D] mb-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Plan your meals for the week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Use leftovers creatively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Cook appropriate portions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Freeze excess food</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#496F5D]">
              Understanding Date Labels
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Scale className="w-12 h-12 text-[#496F5D] mb-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>"Best before" ≠ "Use by"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Trust your senses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Check food quality before discarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#496F5D]">•</span>
                  <span>Store food properly to extend life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tips;