import { useEffect, useState } from 'react';
import { getAll, create } from '../../../ultimate-hooks/src/services/services';

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

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if (baseUrl) {
      getAll(baseUrl).then((response) => {
        setResources(response);
      });
    }
  }, [resources]);

  const createResource = (resource) => {
    const response = create(baseUrl, resource);
    return response;
  };

  const service = {
    createResource,
  };
  return [resources, service];
};
