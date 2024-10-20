import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/productSlice';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector((state) => state.products);

  const currentPage = 1; 
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  useEffect(() => {
    dispatch(getProducts({ limit, skip }));
  }, [dispatch, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default ProductListPage;
