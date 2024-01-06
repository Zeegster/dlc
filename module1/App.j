import { HashRouter, Route, Routes } from "react-router-dom";
import InfographicPage from '../pages/InfographicPage';
export  const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/infographic" element={<InfographicPage />} />
        
      </Routes>
    </HashRouter>
  );
}
