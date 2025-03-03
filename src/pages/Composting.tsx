import React from 'react';
import { Leaf, ThermometerSun, Timer, AlertCircle } from 'lucide-react';

function Composting() {
  return (
    <div className="space-y-8">
      <section className="content-section">
        <h1 className="text-3xl font-bold text-[#8B4513] mb-6">
          Composting Guide
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#496F5D] mb-4">
              Why Compost?
            </h2>
            <p className="text-gray-700 mb-4">
              Composting is nature's way of recycling organic waste into new soil 
              that can be used to grow plants. It's an excellent way to reduce your 
              carbon footprint and create nutrient-rich soil for your garden.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1593105522065-a7b98314f018?auto=format&fit=crop&w=800&q=80" 
              alt="Composting process" 
              className="rounded-xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#496F5D] mb-4">
              What Can Be Composted?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h3 className="font-semibold mb-2">Green Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fruit scraps</li>
                  <li>• Vegetable scraps</li>
                  <li>• Coffee grounds</li>
                  <li>• Tea bags</li>
                  <li>• Fresh grass clippings</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h3 className="font-semibold mb-2">Brown Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dry leaves</li>
                  <li>• Straw</li>
                  <li>• Paper</li>
                  <li>• Cardboard</li>
                  <li>• Wood chips</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Leaf className="w-12 h-12 text-[#496F5D] mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Layer Materials</h3>
            <p className="text-sm text-gray-600">
              Alternate green and brown materials
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <ThermometerSun className="w-12 h-12 text-[#496F5D] mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Keep it Warm</h3>
            <p className="text-sm text-gray-600">
              Maintain proper temperature
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Timer className="w-12 h-12 text-[#496F5D] mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Turn Regularly</h3>
            <p className="text-sm text-gray-600">
              Mix every 1-2 weeks
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <AlertCircle className="w-12 h-12 text-[#496F5D] mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Monitor Moisture</h3>
            <p className="text-sm text-gray-600">
              Keep damp, not wet
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Composting;