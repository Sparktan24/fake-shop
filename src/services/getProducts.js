import React from 'react';

const getProducts = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const response = await data.json();
  return response;
};

export default getProducts;
