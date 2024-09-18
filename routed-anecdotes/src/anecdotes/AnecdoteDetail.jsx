import React from 'react';
import Anecdotes from './Anecdotes';
import { useParams } from 'react-router-dom';
useParams;

function AnecdoteDetail({ anecdotes }) {
  const { id } = useParams();

  const currentAnecdote = anecdotes.find((a) => a.id === Number(id));

  return (
    <div>
      <h1>{currentAnecdote.content}</h1>
      <p>has {currentAnecdote.votes} votes</p>
    </div>
  );
}

export default AnecdoteDetail;
