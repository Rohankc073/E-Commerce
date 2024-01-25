import React, { useState } from 'react';
import '../styles/upload.css';
import Navbar from './navbar';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Replace with the correct path to your Firebase configuration

const YourFormComponent = () => {
    const [product, setProduct] = useState({
        // uid:"",
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        color: '',
        condition: '',
        brand: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(product);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                // Add product data to Firestore with auto-generated ID
                const productsCollection = collection(db, 'products');

                await addDoc(productsCollection, {
                    // uid: product.uid,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    color: product.color,
                    condition: product.condition,
                    brand: product.brand,
                    // ... other fields as needed
                });

                // Form submitted successfully
                alert('Product added successfully!');
            } catch (error) {
                console.error('Error adding product:', error);
                alert('Failed to add product. Please check the console for details.');
            }
        } else {
            // Display error message to the user
            alert('Please fill out all fields correctly.');
        }
    };
    const validateForm = (formData) => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.description.trim()) {
            errors.description = 'Description is required';
        }
        if (!formData.price.trim()) {
            errors.price = 'Price is required';
        }
        if (!formData.imageUrl.trim()) {
            errors.imageUrl = 'Image URL is required';
        }
        if (!formData.color.trim()) {
            errors.color = 'Color is required';
        }
        if (!formData.condition.trim()) {
            errors.condition = 'Condition is required';
        }
        if (!formData.brand.trim()) {
            errors.brand = 'Brand is required';
        }

        return errors;
    };

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}

                <label>Description:</label>
                <input type="text" name="description" value={product.description} onChange={handleChange} />
                {errors.description && <div className="error">{errors.description}</div>}

                <label>Price:</label>
                <input type="text" name="price" value={product.price} onChange={handleChange} />
                {errors.price && <div className="error">{errors.price}</div>}

                <label>Color:</label>
                <input type="text" name="color" value={product.color} onChange={handleChange} />
                {errors.color && <div className="error">{errors.color}</div>}

                <label>Condition:</label>
                <input type="text" name="condition" value={product.condition} onChange={handleChange} />
                {errors.condition && <div className="error">{errors.condition}</div>}

                <label>Brand:</label>
                <input type="text" name="brand" value={product.brand} onChange={handleChange} />
                {errors.brand && <div className="error">{errors.brand}</div>}

                <label>Image URL:</label>
                <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
                {errors.imageUrl && <div className="error">{errors.imageUrl}</div>}

                <button type="submit">Add Product</button>
            </form>
        </>
    );
};

export default YourFormComponent;
