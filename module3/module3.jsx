import ReactDOM from 'react-dom/client'
import '../src/index.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import QuestionPage from './QuestionPage';
import Question from './Question';
import ResultPage from './ResultPage';


function  App  ()  {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<QuestionPage />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/result" element={<ResultPage />} />        
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)
