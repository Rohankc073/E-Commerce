import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import ViewPage from "./pages/viewpage";

function App() {
    console.log('App component rendered');

    return (
        <Router>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<AdminDashboard />} />
                <Route path='/view' element={<ViewPage />} />
            </Routes>
        </Router>
    );
}

export default App;
