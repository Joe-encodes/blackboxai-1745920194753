import React from 'react';

const QuickControl = () => {
  return (
    <section className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Control</h2>
      <div className="flex space-x-4 justify-center">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
          All On
        </button>
        <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400 transition">
          All Off
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
          Eco Mode
        </button>
      </div>
    </section>
  );
};

export default QuickControl;
