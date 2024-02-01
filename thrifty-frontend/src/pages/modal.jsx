import React from 'react';
import '../styles/Modal.css'; // Create a CSS file for styling your modal

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Thank you!</h2>
                <p>Your order has been confirmed.</p>
            </div>
        </div>
    );
};

export default Modal;
