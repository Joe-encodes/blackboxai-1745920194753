import React from 'react';
import Sidebar from './Sidebar';
import PowerUsage from './PowerUsage';

const PowerUsagePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <PowerUsage />
    </div>
  );
};

export default PowerUsagePage;
