import React from 'react';
import Sidebar from './Sidebar';
import ConnectedDevices from './ConnectedDevices';

const ConnectedDevicesPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ConnectedDevices />
    </div>
  );
};

export default ConnectedDevicesPage;
