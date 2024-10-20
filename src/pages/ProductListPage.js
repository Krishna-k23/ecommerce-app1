import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const limit = 10; // 10 products per page to match your requirement
  const skip = (currentPage - 1) * limit;

  useEffect(() => {
    setLoading(true);
    fetchProducts(limit, skip)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        totalItems={100} // Assuming there are 100 items, adjust accordingly
        itemsPerPage={limit} 
      />
    </div>
  );
};

export default ProductListPage;
