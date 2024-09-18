import React from 'react';

function Notification({ notification }) {
  const padding = {
    padding: 10,
    border: '2px solid red',
    backgroundColor: '#fdd',
    color: 'red',
    borderRadius: '5px',
  };
  return <div style={padding}>a new anecdote {notification} created!</div>;
}

export default Notification;
