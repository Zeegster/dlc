import ReactDOM from 'react-dom/client'
import '../src/index.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import SimulatorPage from '../src/pages/SimulatorPage'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SimulatorPage />} />
        
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
