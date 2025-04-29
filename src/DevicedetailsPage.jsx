import React from 'react';
import Sidebar from './HomePage'; // Sidebar is defined in HomePage.jsx, I will refactor Sidebar to separate file later if needed
import DeviceDetailsMain from './DeviceDetailsMain';

const DevicedetailsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DeviceDetailsMain />
    </div>
  );
};

export default DevicedetailsPage;
