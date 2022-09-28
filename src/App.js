import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';
import { useContext } from 'react';
import { UserContext } from './contexts/User';
import UserArticle from './components/UserArticles';
import SingleArticle from './components/SingleArticle';

function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Header loggedInUser={loggedInUser}/>
        <Nav loggedInUser={loggedInUser}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles/topics' element={<Topics />}></Route>
            <Route path='/articles/topics/:topic' element={<SingleTopic />}></Route>
            <Route path={`/${loggedInUser.username}/articles`} element={<UserArticle loggedInUser={loggedInUser}/>}></Route>
            <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
