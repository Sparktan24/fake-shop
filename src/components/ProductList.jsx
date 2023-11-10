import React, { useEffect, useState } from 'react';
import getProducts from '../services/getProducts';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    async function fetchProducts() {
      const productsList = await getProducts();
      setProducts(productsList);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container-products">
        {products
          ?.map((product) => (
            <div className="card-product" key={product.id}>
              <figure className="container-img">
                <img src={product.image} alt={product.title} />
              </figure>
              <div className="info-product">
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};

export default ProductList;
