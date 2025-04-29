import React from 'react';
import Sidebar from './Sidebar';
import QuickControl from './QuickControl';

const QuickControlPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <QuickControl />
    </div>
  );
};

export default QuickControlPage;
