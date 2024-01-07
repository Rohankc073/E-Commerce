import React, { useState, useEffect } from 'react';
import '../styles/product.css';
import Footer from './footer';
import ProductBox from './viewpageBox';
import Panel from './panel';
import Navbar from './navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Replace with the correct path to your Firebase configuration

// Function to shuffle an array randomly
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const productsSnapshot = await getDocs(productsCollection);

                const productsData = productsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Fetched products from Firebase:', productsData);

                // Shuffle the products array randomly
                const shuffledProducts = shuffleArray(productsData);
                setProducts(shuffledProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <header>
                <Navbar />
                <Panel />
            </header>

            <body>
            <div className="shop-section55">
                {products.map((product) => (
                    <ProductBox
                        key={product.id}
                        imageUrl="https://firebasestorage.googleapis.com/v0/b/thriftytech-6cd3e.appspot.com/o/upload%2F20231227T041433523Z_t5ku0x_ip13Blue.jpg?alt=media"
                        name={product.name}
                        price={product.price}
                        condition={product.condition}
                    />
                ))}
            </div>

            <div className="shop-section66">
                {/* You can add more ProductBox components here if needed */}
            </div>

            <Footer />
            </body>
        </>
    );
};

export default Product;
