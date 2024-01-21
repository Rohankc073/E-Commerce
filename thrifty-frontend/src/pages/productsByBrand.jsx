import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Update with your Firebase configuration

const ProductsByBrand = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByBrand = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const querySnapshot = await getDocs(productsCollection);
                const brandProducts = [];

                querySnapshot.forEach((doc) => {
                    const productData = doc.data();
                    if (productData.brand.toLowerCase() === brandName.toLowerCase()) {
                        brandProducts.push({ id: doc.id, ...productData });
                    }
                });

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
