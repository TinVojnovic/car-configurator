import React from 'react';
import { Navbar } from './shared'
import { Homepage, CarSelect, Configurator, ConfigView, Login } from './views'
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './private-routes/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/car-select" element={<CarSelect />} />
            <Route path="/config-view/:id" element={<ConfigView />} />
            <Route path="/configurator" element={<Configurator />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
