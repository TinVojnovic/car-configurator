import React from 'react';
import { Navbar } from './shared'
import { Homepage, CarSelect, Configurator, ConfigView } from './views'
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/car-select" element={<CarSelect />}/>
        <Route path="/config-view" element={<ConfigView />}/>
        <Route path="/configurator" element={<Configurator />}/>
      </Routes>
    </div>
  );
}

export default App;
