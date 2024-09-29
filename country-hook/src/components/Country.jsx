import React from 'react';

function Country({ country }) {
  
  if (!country) {
    return null;
  }

  if (country === 'not found') {
    return <div>not found...</div>;
  }

  return (
    <>
      {country && (
        <div>
          <h3>{country.name.Country} </h3>
          <div>capital {country.capital} </div>
          <div>population {country.population}</div>
          <img src={country.flags.png} height='100' alt={`flag of ${country.name}`} />
        </div>
      )}
    </>
  );
}

export default Country;
