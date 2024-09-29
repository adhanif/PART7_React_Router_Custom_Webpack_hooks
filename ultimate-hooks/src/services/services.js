import axios from 'axios';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

export const getAll = async (baseUrl) => {
  const response = await axios.get(baseUrl);

  return response.data;
};

export const create = async (baseUrl, newObject) => {
  //   const config = {
  //     headers: { Authorization: token },
  //   };

  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, create, update, setToken };
