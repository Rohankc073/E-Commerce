import React from 'react';
import '../styles/viewpage.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import {useLocation} from "react-router-dom";
import ProductBox from "./viewpageBox";

const Searchp = () => {
    const location = useLocation();
    const { searchResults } = location.state || {};
    return (
        <>


            <header>
                <Navbar/>
                <Panel/>
            </header>
            <div>
                <h2>Search Results</h2>

                {searchResults ? (
                        searchResults.map((product) => (
                            <div key={product.id} >
                                <ProductBox
                                    id={product.ui}
                                    imageUrl={product.imageUrl}
                                    name={product.name}
                                    price={product.price}
                                    condition={product.condition}
                                    />
                            </div>
                        ))
                    ) :
                    (
                        <p>No search results found.</p>
                    )}
            </div>
            <Footer/>
        </>
    );
};

export default Searchp;