import React from 'react';
import Sidebar from './Sidebar';
import DeviceDetailsMain from './DeviceDetailsMain';

const DeviceDetailsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DeviceDetailsMain />
    </div>
  );
};

export default DeviceDetailsPage;
