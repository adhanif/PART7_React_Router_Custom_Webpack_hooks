import React from 'react';
import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Anecdotes from './anecdotes/Anecdotes';
import Menu from './menu/Menu';
import Footer from './footer/Footer';
import CreateAnecdote from './createAnecdote/CreateAnecdote';
import AnecdoteDetail from './anecdotes/AnecdoteDetail';
import About from './about/About';
import Notification from './notification/Notification';

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

  const [notification, setNotification] = useState('');

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(anecdote.content);
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  return (
    <>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification ? <Notification notification={notification} /> : ''}

      <Routes>
        <Route path='/' element={<Anecdotes anecdotes={anecdotes} />}></Route>
        <Route path='/:id' element={<AnecdoteDetail anecdotes={anecdotes} />}></Route>
        <Route path='/create' element={<CreateAnecdote addNew={addNew} />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
