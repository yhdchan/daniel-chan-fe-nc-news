import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';
import { useContext, useState } from 'react';
import { UserContext } from './contexts/User';
import UserArticle from './components/UserArticles';
import SingleArticle from './components/SingleArticle';
import Footer from './components/Footer';
import Users from './components/Users';
import Sort from './components/Sort';

function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [sortState, setSortState] = useState('created_at');
  const [orderState, setOrderState] =useState('desc');

  return (
    <BrowserRouter>
      <div className="App">
        <header className='freeze-panel'>
          <Header loggedInUser={loggedInUser}/>
          <Nav loggedInUser={loggedInUser}/>
        </header>
        <section className='routes'>
          <Sort setSortState={setSortState} setOrderState={setOrderState}/>
          <Routes>
            <Route path='/' element={<Home sortState={sortState} orderState={orderState}/>} />
            <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
            <Route path='/articles/topics' element={<Topics />}></Route>
            <Route path='/articles/topics/:topic' element={<SingleTopic sortState={sortState} orderState={orderState}/>}></Route>
            <Route path='/users' element={<Users setLoggedInUser={setLoggedInUser}/>}></Route>
            <Route path={`/${loggedInUser.username}/articles`} element={<UserArticle loggedInUser={loggedInUser} sortState={sortState} orderState={orderState}/>}></Route>
            <Route path='*' element={<p>404 Not Found! api path does not exist!</p>}></Route>
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
