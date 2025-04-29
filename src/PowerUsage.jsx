import React, { useState } from 'react';

const PowerUsage = () => {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <section className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Power Usage</h2>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            activeTab === 'daily' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('daily')}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            activeTab === 'weekly' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('weekly')}
        >
          Weekly
        </button>
      </div>
      <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
        {/* Placeholder for power usage chart */}
        {activeTab === 'daily' ? 'Daily Power Usage Chart' : 'Weekly Power Usage Chart'}
      </div>
    </section>
  );
};

export default PowerUsage;
