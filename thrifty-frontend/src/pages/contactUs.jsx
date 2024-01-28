import React, {useEffect, useState} from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "../styles/contactus.css"
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "../Firebase/firebase";
import Navbar1 from "./navbar";


const ContactForm = () => {
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
            window.alert('Feedback sent successfully!');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };
    return (
        <>
        <Navbar1 />
        <div>
            <div className="container55">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <FaMapMarkerAlt />
                            <div className="topic">Address</div>
                            <div className="text-one">Dilibazar, PipalBot</div>
                            <div className="text-two">Kathmandu </div>
                        </div>
                        <div className="phone details">
                            <FaPhoneAlt />
                            <div className="topic">Phone</div>
                            <div className="text-one">+977 9827904325</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="email details">
                            <FaEnvelope />
                            <div className="topic">Email</div>
                            <div className="text-one">codinglab@gmail.com</div>
                            <div className="text-two">info.codinglab@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>
                            If you have any work for me or any types of queries related to my tutorial, you can send me a
                            message from here.
                            It's my pleasure to help you.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" value={name}
                                       onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your message" value={message}
                                       onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            <div className="button">
                                <input type="button" onClick={handleSubmit} value="Send Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactForm;
