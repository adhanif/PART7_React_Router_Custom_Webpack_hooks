import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../customHooks';
useNavigate;

function CreateAnecdote({ addNew }) {
  const content = useField('text');
  const author = useField('text');
  const url = useField('text');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      url: url.value,
      votes: 0,
    });
    navigate('/');
  };
  return (
    <div>
      {' '}
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for the mor info
          <input {...url} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
}

export default CreateAnecdote;
