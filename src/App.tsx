import React from 'react';
import { Navbar } from './shared'
import { Homepage, CarSelect, Configurator, ConfigView, Exterior, Interior } from './views'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/car-select" element={<CarSelect />} />
          <Route path="/config-view" element={<ConfigView />} />
          <Route path="/configurator" element={<Configurator />}>
            <Route path="/configurator/exterior" element={<Exterior />} />
            <Route path="/configurator/interior" element={<Interior />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
