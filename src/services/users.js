import { urlFetch } from '../constants';

export const getUser = async (user) => {
  const response = await fetch(`${urlFetch}${user}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong');

};
