// src/pages/FeedbackList.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

const FeedbackList = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            // Fetch feedback from Firebase when the component mounts
            try {
                const feedbackRef = collection(db, 'feedback');
                const snapshot = await getDocs(feedbackRef);
                const feedbackData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setFeedbackList(feedbackData);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchFeedback();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>Feedback List</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {feedbackList.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.name}</td>
                        <td>{feedback.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackList;
