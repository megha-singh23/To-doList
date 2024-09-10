import QuestionList from'./component/questionlist'
import First from './component/first' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/question-list" element={<QuestionList />} />
      </Routes>
    </Router>
  );
};

export default App;

