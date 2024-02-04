import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/home";

// import ViewPage from "./pages/viewpage";

import Product from "./pages/product";
import SignUpForm from "./pages/register";



import AddProductForm from "./pages/upload";
import Login33 from "./pages/login33";
import YourComponent from "./pages/viewpage";
import EmbeddedCanvas from "./pages/aboutus";

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
import ProductDetail from "./pages/productdetail";
import UpdateProfilePage from "./pages/checkout";
import BillPage from "./pages/modal";
import ChartPage from "./pages/admin/ChartPage";
import ProductFeatures from "./pages/admin/ProductFeatures";
import AdminOrder from "./pages/admin/AdminOrder";
import CrudProduct from "./pages/admin/CrudProduct";
import ImageUpload from "./pages/admin/ImageUpload";
import AddingProduct from "./pages/admin/AddingProduct";
import Dash from './pages/admin/dash';

import Adminlogin from "./pages/admin/adminlogin";


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
                {/*<Route path='/image' element={<AddProductForm />} />*/}
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
                <Route path="/dash" element={<dash/>} />
                <Route path="/chart" element={<ChartPage/>} />
        
                <Route path="/adminproduct" element={<ProductFeatures />} />
                <Route path="/adminorder" element={<AdminOrder />} />
                <Route path="/crudproduct" element={<CrudProduct />} />
                <Route path="/imageupload" element={<ImageUpload/>} />
                <Route path="/addproduct" element={<AddingProduct/>} />
                <Route path="/admin" element={<Dash/>} />
                {/* <Route path="/dash" element={<dash/>} /> */}


            </Routes>
        </Router>
    );
}
export default App;