import React from 'react';
import { Navbar } from './shared'
import { Homepage, CarSelect, Configurator, ConfigView, Login, Exterior, Interior } from './views'
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoutes from './private-routes/PrivateRoutes';
import { OptionSelect, ConfigSelect } from './modules';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/car-select" element={<CarSelect />} />
            <Route path="/config-view/:id" element={<ConfigView />} />
            <Route path="/configurator" element={<Configurator />}>
              <Route path="/configurator/exterior" element={<Exterior />}>

                <Route path="/configurator/exterior/configSelect"
                  element={<ConfigSelect onClick={() => navigate("/configurator/interior")} />} />

                <Route path="/configurator/exterior/optionSelect/:option"
                  element={<OptionSelect onClick={() => navigate("/configurator/exterior/configSelect")} />} />

              </Route>
              <Route path="/configurator/interior" element={<Interior />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
