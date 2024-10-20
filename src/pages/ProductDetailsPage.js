import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../features/productSlice'; // Redux action to fetch product details

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { productDetails, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    const goBack = () => {
        navigate('/');
    };

    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

    return productDetails ? (
        <div className="container mx-auto p-6 max-h-screen overflow-hidden">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600"
                onClick={goBack}
            >
                Back to Products
            </button>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 h-full">
                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        className="rounded-lg w-full md:max-w-md max-h-[80vh] object-contain"
                        src={productDetails.images[0]}
                        alt={productDetails.title}
                    />
                </div>
                <div className="md:w-1/2 md:pl-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">{productDetails.title}</h1>
                    <p className="text-lg text-gray-700 mb-6">{productDetails.description}</p>
                    <p className="text-2xl font-semibold text-green-500 mb-4">Price: ${productDetails.price}</p>
                    {productDetails.discountPercentage && (
                        <p className="text-sm text-gray-500 mb-2">
                            Discount: {productDetails.discountPercentage}%
                        </p>
                    )}
                    <p className="text-sm text-gray-500 mb-2">Rating: {productDetails.rating}/5</p>
                    <p className="text-sm text-gray-500 mb-2">Brand: {productDetails.brand}</p>
                    <p className="text-sm text-gray-500">Category: {productDetails.category}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="text-center mt-20">Product not found</div>
    );
};

export default ProductDetailsPage;
