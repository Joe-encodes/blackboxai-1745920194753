import React from 'react';

const DevicesMain = () => {
  return (
    <main className="flex-1 p-8 bg-white min-h-screen max-w-5xl mx-auto relative">
      <section className="mb-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">My Devices</h1>
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-700">All</span>
            <img src="/public/external/rectangle2887-2c88-200h.png" alt="All Devices" className="w-5 h-0.5" />
          </div>
          <div className="font-semibold text-gray-700">On</div>
          <div className="font-semibold text-gray-700">Off</div>
          <div className="font-semibold text-gray-700">Eco Mode</div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Device Card 1 */}
          <div className="bg-purple-100 rounded-lg p-6 flex flex-col">
            <div className="w-9 h-12 bg-purple-200 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-1">AC</h2>
            <p className="text-purple-700 mb-4">Living Room</p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
                Details
              </button>
              <button className="bg-purple-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-purple-400 transition">
                Power
              </button>
            </div>
          </div>

          {/* Device Card 2 */}
          <div className="bg-purple-100 rounded-lg p-6 flex flex-col">
            <div className="w-9 h-12 bg-purple-200 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-1">TV</h2>
            <p className="text-purple-700 mb-4">Bedroom</p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
                Details
              </button>
              <button className="bg-purple-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-purple-400 transition">
                Power
              </button>
            </div>
          </div>

          {/* Device Card 3 */}
          <div className="bg-purple-100 rounded-lg p-6 flex flex-col">
            <div className="w-9 h-12 bg-purple-200 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-1">Lights</h2>
            <p className="text-purple-700 mb-4">Kitchen</p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
                Details
              </button>
              <button className="bg-purple-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-purple-400 transition">
                Power
              </button>
            </div>
          </div>

          {/* Device Card 4 */}
          <div className="bg-purple-100 rounded-lg p-6 flex flex-col">
            <div className="w-9 h-12 bg-purple-200 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold mb-1">Fridge</h2>
            <p className="text-purple-700 mb-4">Pantry</p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
                Details
              </button>
              <button className="bg-purple-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-purple-400 transition">
                Power
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Device Status</h2>
        <div className="grid grid-cols-3 gap-6 text-gray-700">
          <div className="flex flex-col items-center">
            <span className="font-semibold">AC</span>
            <span>On</span>
            <span>Eco</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">TV</span>
            <span>Off</span>
            <span>Normal</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Lights</span>
            <span>On</span>
            <span>Eco</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Fridge</span>
            <span>On</span>
            <span>Normal</span>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-xs">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Add Device</h2>
        <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-purple-700 transition">
          Add New Device
        </button>
      </section>
    </main>
  );
};

export default DevicesMain;
