import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{useState} from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const fetchQuestions=async(category="", difficulty="")=>{
       const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
      
      setQuestions(data.results);
      
  }

  return (
    <BrowserRouter>
    <div className="app">
     <Header />
     <Switch>
       <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
       </Route>
       <Route path="/quiz" exact>
          <Quiz name={name} questions={questions} setQuestions={setQuestions} score={score}
            setScore={setScore} />
       </Route>
       <Route path="/result" exact>
          <Result name={name} score={score} />
       </Route>
     </Switch>
    </div>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
