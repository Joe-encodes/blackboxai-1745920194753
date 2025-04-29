import React from 'react';

const devices = [
  { id: 1, name: 'AC', location: 'Living Room', status: 'On', energy: true, icon: '/public/external/variant92866-nj9q.svg' },
  { id: 2, name: 'TV', location: 'Bedroom', status: 'Off', energy: true, icon: '/public/external/variant102868-nqls.svg' },
  { id: 3, name: 'Lights', location: 'Kitchen', status: 'On', energy: true, icon: '/public/external/variant112870-w76j.svg' },
  { id: 4, name: 'Fridge', location: 'Pantry', status: 'On', energy: true, icon: '/public/external/variant122872-ync9.svg' },
];

const ConnectedDevices = () => {
  return (
    <section className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Connected Devices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src={device.icon} alt={`${device.name} icon`} className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
              <p className="text-gray-500">{device.location}</p>
              <div className="flex space-x-2 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${device.status === 'On' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {device.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold">Energy</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConnectedDevices;
