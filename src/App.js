import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';
import { useContext } from 'react';
import { UserContext } from './contexts/User';
import UserArticles from './components/UserArticles';
import SingleArticle from './components/SingleArticle';
import Footer from './components/Footer';
import Users from './components/Users';
import Articles from './components/Articles';
import ScrollToTop from './utils/scrollToTop';

function App() {
  const { loggedInUser, setLoggedInUser, isLoggedIn } = useContext(UserContext);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <header className='freeze-panel'>
          <Header loggedInUser={loggedInUser} isLoggedIn={isLoggedIn}/>
          <Nav loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} isLoggedIn={isLoggedIn} />
        </header>
        <section className='routes'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
            <Route path='/articles/topics' element={<Topics />}></Route>
            <Route path='/articles/topics/:topic' element={<SingleTopic />}></Route>
            <Route path='/users' element={<Users setLoggedInUser={setLoggedInUser}/>}></Route>
            <Route path={`/${loggedInUser.username}/articles`} element={isLoggedIn ? ( <UserArticles loggedInUser={loggedInUser} />) : <Navigate replace to={"/"} />}></Route>
            <Route path='*' element={<p>404 Not Found! api path does not exist!</p>}></Route>
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
