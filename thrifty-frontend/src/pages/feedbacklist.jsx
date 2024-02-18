import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import '../styles/FeedbackList.css';
import Navbar1 from "./navbar"; // Import CSS file for styling

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

    const handleDeleteFeedback = async (id) => {
        try {
            await deleteDoc(doc(db, 'feedback', id));
            setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
        } catch (error) {
            console.error('Error deleting feedback:', error);
        }
    };

    return (
        <>
        <Navbar1 />
        <div>
            <h2>Feedback List</h2>
            <table className="feedback-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {feedbackList.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.name}</td>
                        <td>{feedback.message}</td>
                        <td>
                            <button onClick={() => handleDeleteFeedback(feedback.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default FeedbackList;
