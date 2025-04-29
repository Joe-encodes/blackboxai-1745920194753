import React from 'react';
import Sidebar from './Sidebar';
import DevicesMain from './DevicesMain';

const DevicesPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DevicesMain />
    </div>
  );
};

export default DevicesPage;
