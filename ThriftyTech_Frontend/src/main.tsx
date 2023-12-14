import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Landing from './landing.tsx';
import '../src/CSS/viewP.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Route for the Landing component */}
                <Route path="/" element={<App />} />

                {/* Default route for the App component */}

            </Routes>
        </Router>
    </React.StrictMode>,



    rootElement
);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Route for the Landing component */}
                <Route path="/landing" element={<Landing />} />

                {/* Default route for the App component */}

            </Routes>
        </Router>
    </React.StrictMode>,
    rootElement
);

