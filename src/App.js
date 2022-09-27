import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles/topics' element={<Topics />}></Route>
            <Route path='/articles/topics/:topic' element={<SingleTopic />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
