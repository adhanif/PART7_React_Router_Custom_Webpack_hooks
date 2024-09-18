import React from 'react';
import { useState } from 'react';

function CreateAnecdote() {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
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
          <input value={author} onChange={(e) => setAuthot(e.target.value)} />
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
