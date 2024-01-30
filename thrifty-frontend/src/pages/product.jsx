import React, { useState, useEffect } from 'react';
import '../styles/product.css';
import Footer from './footer';
import ProductBox from './viewpageBox';
import Panel from './panel';
import Navbar from './navbar';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

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

                setProducts(productsData);
                setSearchResults(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <header>
                <Navbar />
                <Panel />
            </header>

            <main>
                <div className="shop-section55">
                    {currentProducts.map((product) => (
                        <div key={product.id}>
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

                <div className="tooltip">
                    {Array.from({ length: Math.ceil(searchResults.length / productsPerPage) }, (_, index) => (
                        <button key={index + 1} onClick={() => paginate(index + 1)} >
                            {index + 1}
                        </button>

                    ))}

                </div>
            </main>
            <Footer />
        </>
    );
};

export default Product;
