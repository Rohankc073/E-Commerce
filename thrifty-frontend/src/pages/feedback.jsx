// src/pages/feedback.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import Firestore functions

const Feedback = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Submit feedback to Firebase in the "feedback" collection
            const docRef = await addDoc(collection(db, 'feedback'), {
                name,
                message,
            });

            // Clear input fields
            setName('');
            setMessage('');

            // Update the feedback list
            const updatedFeedback = [...feedbackList, { id: docRef.id, name, message }];
            setFeedbackList(updatedFeedback);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div>
            <h1>Feedback Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="message">Feedback:</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Submit Feedback</button>
            </form>


        </div>
    );
};

export default Feedback;
