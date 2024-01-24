// // src/pages/feedback.jsx
// import React, { useState, useEffect } from 'react';
// import { db } from '../Firebase/firebase';
// import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import Firestore functions
//
// const Feedback = () => {
//
//
//     return (
//         <div>
//             <h1>Feedback Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//
//                 <label htmlFor="message">Feedback:</label>
//                 <textarea
//                     id="message"
//                     name="message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                 ></textarea>
//
//                 <button type="submit">Submit Feedback</button>
//             </form>
//
//
//         </div>
//     );
// };
//
// export default Feedback;
