import React from 'react';
import { Navbar } from './shared'
import { Homepage, CarSelect, Configurator, ConfigView, Login, Exterior, Interior, Summary } from './views'
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoutes from './private-routes/PrivateRoutes';
import { OptionSelect, ExteriorSelect, InteriorSelect } from './modules';

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
                  element={<ExteriorSelect onClick={() => navigate("/configurator/interior/configSelect")} />} />

                <Route path="/configurator/exterior/optionSelect/:option"
                  element={<OptionSelect onClick={() => navigate("/configurator/exterior/configSelect")} />} />

              </Route>
              <Route path="/configurator/interior" element={<Interior />}>

                <Route path="/configurator/interior/configSelect"
                  element={<InteriorSelect onClick={() => navigate("/configurator/summary")} />} />

                <Route path="/configurator/interior/optionSelect/:option"
                  element={<OptionSelect onClick={() => navigate("/configurator/interior/configSelect")} />} />
              </Route>

              <Route path="/configurator/summary" element={<Summary />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
