import React, { useState, useEffect } from 'react';
import '../styles/product.css';
import Footer from './footer';
import ProductBox from './viewpageBox';
import Panel from './panel';
import Navbar from './navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const productsSnapshot = await getDocs(productsCollection);

                const productsData = productsSnapshot.docs.slice(0, 6).map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Fetched products from Firebase:', productsData);

                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <header>
                <Navbar/>
                <Panel/>
            </header>

            <main>
                <div className="shop-section55">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col">
                                <ProductBox
                                    imageUrl={product.imageUrl}
                                    name={product.name}
                                    price={product.price}
                                    condition={product.condition}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Product;
