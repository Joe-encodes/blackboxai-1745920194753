import React from 'react';

const statuses = [
  { id: 1, name: 'AC', status: 'On', mode: 'Eco' },
  { id: 2, name: 'TV', status: 'Off', mode: 'Normal' },
  { id: 3, name: 'Lights', status: 'On', mode: 'Eco' },
  { id: 4, name: 'Fridge', status: 'On', mode: 'Normal' },
];

const DeviceStatus = () => {
  return (
    <section className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Device Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-gray-700">
        {statuses.map(({ id, name, status, mode }) => (
          <div key={id} className="p-4 border rounded-lg">
            <p className="font-semibold text-lg">{name}</p>
            <p>{status}</p>
            <p>{mode}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeviceStatus;
