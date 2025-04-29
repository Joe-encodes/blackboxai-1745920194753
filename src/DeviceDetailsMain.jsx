import React from 'react';

const DeviceDetailsMain = () => {
  return (
    <main className="flex-1 p-8 bg-white min-h-screen max-w-5xl mx-auto">
      <section className="mb-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">Device Settings</h1>
        <div className="bg-purple-100 rounded-lg p-6 flex items-center space-x-6">
          <img src="/public/external/variant102929-txw.svg" alt="Device Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">TV</h2>
            <p className="text-gray-600">Bedroom</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Power Control</h2>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
            Turn On
          </button>
          <button className="px-6 py-3 bg-purple-300 text-purple-900 rounded-md font-semibold hover:bg-purple-400 transition">
            Energy Mode
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Usage Stats</h2>
        <div className="bg-gray-100 rounded-lg p-6">
          {/* Placeholder for usage stats chart */}
          <p className="text-gray-500 text-center">Usage stats chart goes here</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Device Options</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 rounded-lg p-4 flex items-center space-x-2">
              <span className="font-semibold">On/Off Timer</span>
              <span className="text-gray-600">Set schedule</span>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
              Set Timer
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 rounded-lg p-4 flex items-center space-x-2">
              <span className="font-semibold">Priority Level</span>
              <span className="text-gray-600">Normal</span>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
              Select
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 rounded-lg p-4 flex items-center space-x-2">
              <span className="font-semibold">Energy Budget</span>
              <span className="text-gray-600">60% set</span>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
              Adjust
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeviceDetailsMain;
