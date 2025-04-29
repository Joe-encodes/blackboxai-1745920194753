import React from 'react';

const EnergyMain = () => {
  return (
    <main className="flex-1 p-8 bg-white min-h-screen max-w-5xl mx-auto relative">
      <section className="mb-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">Energy Overview</h1>
        <div className="flex space-x-6 mb-6">
          <div className="flex flex-col items-center">
            <img src="/public/external/variant142904-3mm.svg" alt="Today Icon" className="w-5 h-5 mb-1" />
            <span className="font-semibold text-gray-700">Today</span>
            <span className="text-xl font-semibold text-gray-900">12.4 kWh</span>
            <span className="text-gray-500">Total energy used</span>
            <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Details
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="/public/external/variant152906-09p.svg" alt="Cost Icon" className="w-5 h-5 mb-1" />
            <span className="font-semibold text-gray-700">Estimated Cost</span>
            <span className="text-xl font-semibold text-gray-900">$2.15</span>
            <span className="text-gray-500">Today’s spend</span>
            <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Details
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="/public/external/variant162908-mu1o.svg" alt="Eco Mode Icon" className="w-5 h-5 mb-1" />
            <span className="font-semibold text-gray-700">Eco Mode</span>
            <span className="text-xl font-semibold text-gray-900">Active</span>
            <span className="text-gray-500">Energy saving on</span>
            <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Manage
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Usage Breakdown</h2>
        <div className="relative w-full h-64 bg-gray-100 rounded-lg">
          {/* Placeholder for usage breakdown chart */}
          <div className="absolute top-0 left-0 w-1/6 h-full bg-purple-300"></div>
          <div className="absolute top-0 left-1/6 w-1/6 h-3/4 bg-purple-400"></div>
          <div className="absolute top-0 left-2/6 w-1/6 h-1/2 bg-purple-500"></div>
          <div className="absolute top-0 left-3/6 w-1/6 h-1/3 bg-purple-600"></div>
          <div className="absolute top-0 left-4/6 w-1/6 h-1/6 bg-purple-700"></div>
          <div className="absolute top-0 left-5/6 w-1/6 h-1/12 bg-purple-800"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-400"></div>
        </div>
        <div className="flex justify-between mt-4 text-gray-700">
          <span>AC</span>
          <span>Fridge</span>
          <span>Lights</span>
          <span>TV</span>
          <span>Heater</span>
          <span>Other</span>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/public/external/variant182914-piqj.svg" alt="AC Icon" className="w-5 h-5" />
            <span className="flex-1">AC</span>
            <span>On</span>
            <span>2.1 kWh</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/public/external/variant192915-h0y.svg" alt="TV Icon" className="w-5 h-5" />
            <span className="flex-1">TV</span>
            <span>Off</span>
            <span>0.8 kWh</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/public/external/variant212917-zok.svg" alt="Lights Icon" className="w-5 h-5" />
            <span className="flex-1">Lights</span>
            <span>On</span>
            <span>1.3 kWh</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/public/external/variant222919-u5sd.svg" alt="Fridge Icon" className="w-5 h-5" />
            <span className="flex-1">Fridge</span>
            <span>On</span>
            <span>2.8 kWh</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnergyMain;
