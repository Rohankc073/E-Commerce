import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/home";

// import ViewPage from "./pages/viewpage";

import Product from "./pages/product";
import SignUpForm from "./pages/register";

import Addtocart from "./pages/addtocart";
import Imageuploadpage from "./pages/imageuploadpage";
import AddProductForm from "./pages/upload";
import Login33 from "./pages/login33";
import YourComponent from "./pages/viewpage";
import EmbeddedCanvas from "./pages/aboutus";
import Adminlogin from "./pages/adminlogin";
import Signup from "./pages/signup";
import Accounts from "./pages/accounts";
import UserProfile from "./pages/accounts";
import Description from "./pages/upload";
import FeedbackList from "./pages/feedbacklist";
import CheckoutForm from "./pages/checkout";
import ShoppingCart from "./pages/checkout";
import Payment from "./pages/payment";
import ContactForm from "./pages/contactUs";
import Searchp from "./pages/searchp";

import UpdateProfilePage from "./pages/checkout";



function App() {
    console.log('App component rendered');
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/view' element={<YourComponent />} />

              
                <Route path='/register' element={<SignUpForm />} />
                <Route path='/product' element={<Product />} />
                <Route path='/upload' element={<Imageuploadpage />} />
                {/*<Route path='/image' element={<AddProductForm />} />*/}
                <Route path='/adc' element={<Addtocart />} />
                <Route path='/login' element={<Login33 />} />
                <Route path='/aboutus' element={<EmbeddedCanvas />} />
                <Route path='/adminlogin' element={<Adminlogin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/accounts' element={<UserProfile />} />
                <Route path='/des' element={<Description />} />
                <Route path='/feedback/list' element={<FeedbackList/>} />
                <Route path='/checkout' element={<ShoppingCart/>} />
                <Route path='/payment' element={<Payment/>} />
                <Route path='/contactUs' element={<ContactForm/>} />
                {/*<Route path="/product/:brandName" component={ProductsByBrand} />*/}
                <Route path='/searchP' element={<Searchp/>} />
                <Route path="/products" exact component={Product} />
                <Route path="/view/:productId" element={<YourComponent/>} exact />
                <Route path='/delivery' element={<UpdateProfilePage />} />


            </Routes>
        </Router>
    );
}
export default App;
