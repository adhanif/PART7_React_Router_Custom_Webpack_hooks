import React from 'react';
import { Link } from 'react-router-dom';

function Anecdotes({ anecdotes }) {
  const padding = {
    paddingTop: 10,
    paddingBottom: 10,
  };
  return (
    <div style={padding}>
      <h1>Anecdotes</h1>
      <ul>
        {anecdotes.map((anecdote) => (
          <Link key={anecdote.id} to={`/${anecdote.id}`}>
            <li>{anecdote.content}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Anecdotes;
