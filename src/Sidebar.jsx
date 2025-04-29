import React from 'react';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-purple-700 min-h-screen flex flex-col justify-between p-6">
      <div>
        <div className="mb-8 flex items-center justify-between">
          <img src="/public/external/rectangle2860-6hdo-200h.png" alt="Logo" className="w-28 h-6" />
          <img src="/public/external/variant22860-ws7g.svg" alt="Menu Icon" className="w-5 h-5" />
        </div>
        <ul className="space-y-4">
          <li className="flex items-center p-2 rounded-lg bg-purple-300 bg-opacity-20">
            <img src="/public/external/component1i286-25y.svg" alt="Dashboard Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Dashboard</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-purple-300 hover:bg-opacity-20 cursor-pointer">
            <img src="/public/external/component1i286-zx25.svg" alt="Devices Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Devices</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-purple-300 hover:bg-opacity-20 cursor-pointer">
            <img src="/public/external/component1i286-431.svg" alt="Security Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Security</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-purple-300 hover:bg-opacity-20 cursor-pointer">
            <img src="/public/external/component1i286-owp.svg" alt="Energy Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Energy</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-purple-300 hover:bg-opacity-20 cursor-pointer">
            <img src="/public/external/component1i286-6g7e.svg" alt="Notifications Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Notifications</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-purple-300 hover:bg-opacity-20 cursor-pointer">
            <img src="/public/external/component1i286-paoi.svg" alt="Profile Icon" className="w-5 h-5" />
            <span className="ml-3 text-white font-medium">Profile</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        <div className="w-24 h-12 bg-gray-300 rounded"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
