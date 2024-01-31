import React from 'react';
import '../styles/viewpage.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import {useLocation} from "react-router-dom";
import ProductBox from "./viewpageBox";
import "../styles/searchp.css"

const Searchp = () => {
    const location = useLocation();
    const { searchResults } = location.state || {};

    return (
        <>
            <header>
                <Navbar/>
                <Panel/>
            </header>
            <div className="search-results-container">
                {/*<h2>Search Results</h2>*/}
                {searchResults ? (
                    <div className="search-results-row">
                        {searchResults.map((product) => (
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
                ) : (
                    <p>No search results found.</p>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Searchp;