import ReactDOM from 'react-dom/client'
import '../src/index.css' 
import { HashRouter, Route, Routes } from "react-router-dom";
import InfographicPage from '../src/pages/InfographicPage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InfographicPage />} />
        
      </Routes>
    </HashRouter>
  );
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
