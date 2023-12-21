import { HashRouter, Route, Routes } from "react-router-dom";
import QuestionPage from './QuestionPage';
import Question from './Question';
import ResultPage from '../pages/ResultPage';


function  App  ()  {
  return (
    <HashRouter>
      <Routes>
      <Route path="/question" element={<QuestionPage />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/result" element={<ResultPage />} />        
      </Routes>
    </HashRouter>
  );
}
export default App;
