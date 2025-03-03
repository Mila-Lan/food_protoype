import React from 'react';
import { PieChart, DollarSign, Trash2 } from 'lucide-react';

function Statistics() {
  return (
    <div className="space-y-8">
      <section className="content-section">
        <h1 className="text-3xl font-bold text-[#8B4513] mb-6">
          Food Waste Statistics in New Zealand
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <PieChart className="w-12 h-12 text-[#496F5D] mb-4" />
            <h3 className="text-2xl font-bold mb-2">157,389</h3>
            <p className="text-gray-600">Tonnes of food wasted annually</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md">
            <DollarSign className="w-12 h-12 text-[#496F5D] mb-4" />
            <h3 className="text-2xl font-bold mb-2">$644</h3>
            <p className="text-gray-600">Average household waste per year</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md">
            <Trash2 className="w-12 h-12 text-[#496F5D] mb-4" />
            <h3 className="text-2xl font-bold mb-2">8.6%</h3>
            <p className="text-gray-600">Of household waste is food</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#496F5D]">Most Wasted Foods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Vegetables & Fruits</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Bread</span>
                  <span className="text-[#496F5D]">20%</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Leftovers</span>
                  <span className="text-[#496F5D]">16%</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Citrus</span>
                  <span className="text-[#496F5D]">14%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Other Categories</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Vegetables</span>
                  <span className="text-[#496F5D]">13%</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Meat & Fish</span>
                  <span className="text-[#496F5D]">10%</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span>Dairy</span>
                  <span className="text-[#496F5D]">8%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;