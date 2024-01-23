import React, { useState, useEffect } from 'react';
import '../styles/product.css';
import Footer from './footer';
import ProductBox from './viewpageBox';
import Panel from './panel';
import Navbar from './navbar';
import {collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                let productsQuery = query(productsCollection);

                if (searchTerm) {
                    productsQuery = query(productsCollection, where('name', '==', searchTerm));
                }

                const productsSnapshot = await getDocs(productsQuery);
                const productsData = productsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Fetched products from Firebase:', productsData);

                setProducts(productsData);
                setSearchResults(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    return (
        <>
            <header>
                <Navbar/>
                <Panel/>
            </header>

            <main>
                <div className="shop-section55">
                    {products.map((product, index) => (
                        <div key={product.id} className={`col ${index % 4 === 0 ? 'start-new-row' : ''}`}>
                            <ProductBox
                                id={product.id}
                                imageUrl={product.imageUrl}
                                name={product.name}
                                price={product.price}
                                condition={product.condition}

                            />
                        </div>

                    ))}

                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Product;
