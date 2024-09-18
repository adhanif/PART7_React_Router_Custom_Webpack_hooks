import React from 'react';
import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Anecdotes from './anecdotes/Anecdotes';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import CreateAnecdote from './createAnecdote/CreateAnecdote';
import AnecdoteDetail from './anecdotes/AnecdoteDetail';

function App() {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ]);
  return (
    <>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path='/' element={<Anecdotes anecdotes={anecdotes} />}></Route>
        <Route path='/:id' element={<AnecdoteDetail anecdotes={anecdotes} />}></Route>
        <Route path='/create' element={<CreateAnecdote />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
