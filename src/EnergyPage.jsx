import React from 'react';
import Sidebar from './Sidebar';
import EnergyMain from './EnergyMain';

const EnergyPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <EnergyMain />
    </div>
  );
};

export default EnergyPage;
