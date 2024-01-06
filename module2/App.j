import { HashRouter, Route, Routes } from "react-router-dom";
import SimulatorPage from '../pages/SimulatorPage'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/simulator" element={<SimulatorPage />} />
        
      </Routes>
    </HashRouter>
  );
}
export default App;