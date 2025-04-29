import React from 'react';
import ConnectedDevices from './ConnectedDevices';
import PowerUsage from './PowerUsage';
import DeviceStatus from './DeviceStatus';
import QuickControl from './QuickControl';
import Sidebar from './Sidebar';

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-white min-h-screen space-y-10">
        <ConnectedDevices />
        <PowerUsage />
        <DeviceStatus />
        <QuickControl />
      </main>
    </div>
  );
};

export default HomePage;
