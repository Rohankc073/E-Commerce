import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/home";
import AdminDashboard from './pages/admin/AdminDashboard';
// import ViewPage from "./pages/viewpage";
import FirstPage from "./pages/landing";
import Product from "./pages/product";
import SignUpForm from "./pages/register";
// import Login from "./pages/Login";
// import Imageuploadpage from "./pages/imageuploadpage";
import Addtocart from "./pages/addtocart";
import Imageuploadpage from "./pages/imageuploadpage";
import AddProductForm from "./pages/upload";
import Login33 from "./pages/login33";
import Login1 from "./pages/login33";
import ViewPage from "./pages/viewpage";
import YourComponent from "./pages/viewpage";
// import Login33 from "./pages/login33";
// import Login33 from "./pages/login33"

function App() {
    console.log('App component rendered');

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/view' element={<YourComponent />} />
                <Route path='/admin' element={<AdminDashboard />} />
                {/*<Route path='/view' element={<ViewPage />} />*/}
                <Route path='/landing' element={<FirstPage />} />
                <Route path='/register' element={<SignUpForm />} />
                <Route path='/product' element={<Product />} />
                <Route path='/upload' element={<Imageuploadpage />} />
                <Route path='/image' element={<AddProductForm />} />i
                <Route path='/adc' element={<Addtocart />} />
                <Route path='/login' element={<Login33 />} />


            </Routes>
        </Router>
    );
}

export default App;
