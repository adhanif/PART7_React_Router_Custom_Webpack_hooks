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
      content: content.value,
      author: author.value,
      url: url.value,
      votes: 0,
    });
    navigate('/');
  };

  // const handleReset = () => {
  //   content.reset();
  //   author.reset();
  //   url.reset();
  // };

  return (
    <div>
      {' '}
      <h2>create a new anecdote</h2>
      <form>
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
        <button onClick={handleClick}>create</button>
        <button onClick={content.reset}>reset</button>
      </form>
    </div>
  );
}

export default CreateAnecdote;
