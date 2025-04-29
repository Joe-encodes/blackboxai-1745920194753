import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DevicesPage from './DevicesPage';
import EnergyPage from './EnergyPage';
import ConnectedDevicesPage from './ConnectedDevicesPage';
import DeviceDetailsPage from './DeviceDetailsPage';
import PowerUsagePage from './PowerUsagePage';
import DeviceStatusPage from './DeviceStatusPage';
import QuickControlPage from './QuickControlPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/devices" replace />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/energy" element={<EnergyPage />} />
        <Route path="/connected-devices" element={<ConnectedDevicesPage />} />
        <Route path="/device-details" element={<DeviceDetailsPage />} />
        <Route path="/power-usage" element={<PowerUsagePage />} />
        <Route path="/device-status" element={<DeviceStatusPage />} />
        <Route path="/quick-control" element={<QuickControlPage />} />
      </Routes>
    </Router>
  );
};

export default App;
