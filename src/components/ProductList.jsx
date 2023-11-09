import React, { useEffect, useState } from 'react';
import getProducts from '../services/getProducts';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const productsList = await getProducts();
      setProducts(productsList);
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default ProductList;
