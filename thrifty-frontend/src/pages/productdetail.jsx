// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const ProductDetail = () => {
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const productDoc = await getDoc(doc(db, 'products', productId));
                if (productDoc.exists()) {
                    setProductDetail({ id: productDoc.id, ...productDoc.data() });
                } else {
                    console.error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetail();
    }, [productId]);

    if (!productDetail) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h2>{productDetail.name}</h2>
            <p>Price: ${productDetail.price}</p>
            <p>Condition: {productDetail.condition}</p>
            {/* Add other details as needed */}
        </div>
    );
};

export default ProductDetail;
