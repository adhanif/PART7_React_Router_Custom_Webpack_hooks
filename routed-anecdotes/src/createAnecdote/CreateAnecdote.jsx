import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../customHooks';
useNavigate;

function CreateAnecdote({ addNew }) {
  const content = useField('text');
  const author = useField('text');
  const url = useField('text');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    addNew({
      content: content.inputProps.value,
      author: author.inputProps.value,
      url: url.inputProps.value,
      votes: 0,
    });
    navigate('/');
  };

  const handleReset = (e) => {
    e.preventDefault();
    content.reset();
    author.reset();
    url.reset();
  };

  return (
    <div>
      {' '}
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content
          <input {...content.inputProps} />
        </div>
        <div>
          author
          <input {...author.inputProps} />
        </div>
        <div>
          url for the mor info
          <input {...url.inputProps} />
        </div>
        <button onClick={handleClick}>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
}

export default CreateAnecdote;
