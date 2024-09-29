import { useState, useEffect } from 'react';
import { getAll } from '../services/services';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name) {
      getAll(name)
        .then((response) => {
          setCountry(response);
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            setCountry('not found');
          }
        });
    }
  }, [name]);

  return country;
};
