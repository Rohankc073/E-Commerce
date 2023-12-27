import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        imageFile: null,
        imagePreview: null,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Display image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setProduct({
                ...product,
                imageFile: selectedFile,
                imagePreview: reader.result,
            });
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('imageFile', product.imageFile);

        try {
            const response = await axios.post('http://localhost:8080/api/products/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding product:', error.response?.data?.error || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={product.name} onChange={handleChange} />

            <label>Description:</label>
            <input type="text" name="description" value={product.description} onChange={handleChange} />

            <label>Price:</label>
            <input type="text" name="price" value={product.price} onChange={handleChange} />

            <label>Image:</label>
            <input type="file" name="imageFile" onChange={handleFileChange} accept="image/*" />
            {product.imagePreview && <img src={product.imagePreview} alt="Preview" />}

            <button type="submit" disabled={loading}>Add Product</button>
        </form>
    );
};

export default AddProductForm;
