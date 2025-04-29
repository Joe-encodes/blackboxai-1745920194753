import React from 'react';
import Sidebar from './Sidebar';
import DeviceStatus from './DeviceStatus';

const DeviceStatusPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DeviceStatus />
    </div>
  );
};

export default DeviceStatusPage;
