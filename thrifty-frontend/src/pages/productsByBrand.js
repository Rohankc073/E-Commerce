// ProductsByBrand.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const ProductsByBrand = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByBrand = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const brandProductsQuery = query(
                    productsCollection,
                    where('brand', '==', brandName)
                );

                const querySnapshot = await getDocs(brandProductsQuery);

                const brandProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(brandProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByBrand();
    }, [brandName]);

    return (
        <div>
            <h2>Products by {brandName}</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.description}, ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsByBrand;
