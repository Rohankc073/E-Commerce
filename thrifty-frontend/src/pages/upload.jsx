// import React, { useState } from 'react';
// import '../styles/upload.css'
// import Navbar from "./navbar";
// const YourFormComponent = () => {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: '',
//         imageFile: null,
//         imagePreview: '',
//         color: '',
//         condition: '',
//         brand: '',
//     });
//
//     const [errors, setErrors] = useState({});
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//         // Clear error message when user starts typing
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//     };
//
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProduct((prevProduct) => ({
//                     ...prevProduct,
//                     imageFile: file,
//                     imagePreview: reader.result,
//                 }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formErrors = validateForm(product);
//         setErrors(formErrors);
//         if (Object.keys(formErrors).length === 0) {
//             // Form is valid, submit the data or perform further actions
//             alert('Form submitted successfully!');
//         } else {
//             // Display error message to the user
//             alert('Please fill out all fields correctly.');
//         }
//     };
//
//     const validateForm = (formData) => {
//         const errors = {};
//         // Add validation logic here for each field
//         if (!formData.name.trim()) {
//             errors.name = 'Name is required';
//         }
//         if (!formData.description.trim()) {
//             errors.description = 'Description is required';
//         }
//         if (!formData.price.trim()) {
//             errors.price = 'Price is required';
//         }
//         if (!formData.color.trim()) {
//             errors.color = 'Color is required';
//         }
//         if (!formData.condition.trim()) {
//             errors.condition = 'Condition is required';
//         }
//         if (!formData.brand.trim()) {
//             errors.brand = 'Brand is required';
//         }
//         // Add additional validation rules as needed
//
//         return errors;
//     };
//
//     return (
//         <>
//             <Navbar/>
//         <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" name="name" value={product.name} onChange={handleChange} />
//             {errors.name && <div className="error">{errors.name}</div>}
//
//             <label>Description:</label>
//             <input type="text" name="description" value={product.description} onChange={handleChange} />
//             {errors.description && <div className="error">{errors.description}</div>}
//
//             <label>Price:</label>
//             <input type="text" name="price" value={product.price} onChange={handleChange} />
//             {errors.price && <div className="error">{errors.price}</div>}
//
//             <label>Color:</label>
//             <input type="text" name="color" value={product.color} onChange={handleChange} />
//             {errors.color && <div className="error">{errors.color}</div>}
//
//             <label>Condition:</label>
//             <input type="text" name="condition" value={product.condition} onChange={handleChange} />
//             {errors.condition && <div className="error">{errors.condition}</div>}
//
//             <label>Brand:</label>
//             <input type="text" name="brand" value={product.brand} onChange={handleChange} />
//             {errors.brand && <div className="error">{errors.brand}</div>}
//
//             <label>Image:</label>
//             <input type="file" name="imageFile" onChange={handleFileChange} accept="image/*" />
//             {product.imagePreview && <img src={product.imagePreview} alt="Preview" />}
//
//             <button type="submit">Add Product</button>
//         </form>
//         </>
//     );
// };
//
// export default YourFormComponent;
