// // SearchResults.js
// import React, { useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
//
// const firebaseConfig = {
//     // Your Firebase config object
// };
//
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
//
// const SearchResults = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//
//     const handleSearch = async () => {
//         try {
//             const productsRef = collection(db, 'products');
//
//             // Use query to filter based on the search term
//             const q = query(productsRef, where('productName', '==', searchTerm));
//             const querySnapshot = await getDocs(q);
//
//             const results = [];
//             querySnapshot.forEach((doc) => {
//                 results.push(doc.data());
//             });
//
//             setSearchResults(results);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search for products"
//             />
//             <button onClick={handleSearch}>Search</button>
//
//             {searchResults.length > 0 ? (
//                 <div>
//                     <h2>Search Results:</h2>
//                     <ul>
//                         {searchResults.map((product, index) => (
//                             <li key={index}>
//                                 {/* Display relevant product information */}
//                                 {product.productName} - {product.brand} - ${product.price}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>No results found</p>
//             )}
//         </div>
//     );
// };
//
// export default SearchResults;
