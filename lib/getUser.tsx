import React from 'react';

const getUser = async (userId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error('failed to fetch user')
  return response.json();
};

export default getUser;