import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to='/' style={padding}>
        anecdotes
      </Link>
      <Link to='/create' style={padding}>
        create new
      </Link>
      <a href='#' style={padding}>
        about
      </a>
    </div>
  );
}

export default Menu;
