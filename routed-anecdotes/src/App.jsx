
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Anecdotes from './anecdotes/Anecdotes';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import CreateAnecdote from './createAnecdote/CreateAnecdote';

function App() {
  return (
    <>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path='/' element={<Anecdotes />}></Route>
        <Route path='/create' element={<CreateAnecdote />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
