import HomePage from "./pages/HomePage";

import InfographicPage from "./pages/InfographicPage.jsx";
import SimulatorPage from "./pages/SimulatorPage.jsx";
import QuestionPage from "./pages/QuestionPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import Question from "./components/question/Question";
import ResultPage from "./pages/ResultPage";
import Tester from "./Tester/ Tester.jsx";


function App  ()  {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infographic" element={<InfographicPage />} />
        <Route path="/simulator" element={<SimulatorPage />} /> 
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/tester" element={<Tester />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
