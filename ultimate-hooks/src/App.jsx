import { useState } from 'react';
import './App.css';
import { useField, useResource } from './hooks';
useField;

function App() {
  const content = useField('text');
  const name = useField('text');
  const number = useField('number');

  const [notes, noteService] = useResource('http://localhost:3001/notes');
  const [persons, personService] = useResource('http://localhost:3001/persons');

  // console.log(notes);

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    noteService.createResource({ content: content.value, important: true });
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    personService.createResource({ name: name.value, number: number.value });
  };

  return (
    <>
      <div>
        <h1>notes</h1>
        <form onSubmit={handleNoteSubmit}>
          <input {...content} />
          <button>create</button>
        </form>
      </div>
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}
      <h1>person</h1>
      <form onSubmit={handlePersonSubmit}>
        <div>
          name <input {...name} />
        </div>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </>
  );
}

export default App;
