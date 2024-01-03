// auth.js
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from './firebase';

const handleSignup = async (email, password, fullName) => {
    try {
        const auth = getAuth();

        // Sign up with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // After successful signup, store additional user data in Realtime Database
        const userId = userCredential.user.uid;

        // Customize this as per your user data structure in the Realtime Database
        const userData = {
            fullName: fullName,
            email: email,
            // Add more user data fields as needed
        };

        const userRef = ref(database, `users/${userId}`);
        await set(userRef, userData);

        // Optionally, you can perform additional actions after signup
        // For example, navigate to the home page
        // navigate('/home');
    } catch (error) {
        console.error('Signup error:', error.message);
        // Handle signup errors, e.g., display an error message to the user
    }
};

export { handleSignup };
