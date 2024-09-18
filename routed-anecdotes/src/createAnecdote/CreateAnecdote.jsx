import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
useNavigate;

function CreateAnecdote({ addNew }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content,
      author,
      url,
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
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for the mor info
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
}

export default CreateAnecdote;
