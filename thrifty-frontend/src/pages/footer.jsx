// import React from 'react';
// import '../styles/footer.css'
// const Footer = () => {
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };
//
//     return (
//         <footer>
//             <div className="foot-panel1" onClick={scrollToTop}>
//                 Back to Top
//             </div>
//
//             <div className="foot-panel2">
//                 <ul>
//                     <p>Customer Care </p>
//                     <a>Help center</a>
//                     <a>How to buy </a>
//                     <a>Returns and Refund </a>
//                     <a>Contact Us</a>
//                 </ul>
//
//
//                 <ul>
//                     <p>Earn with Thrifty </p>
//                     <a>Sell in Thrifty</a>
//                     <a>Career</a>
//                     <a>Code of conduct </a>
//                     <a>Partner with Thrifty</a>
//                     <a>Affiliate Program</a>
//                 </ul>
//
//                 <ul>
//                     <p>Get to Know Us </p>
//                     <a>About</a>
//                     <a>Blog</a>
//                     <a>Thrifty Relations </a>
//                     <a>Thrifty Devices</a>
//                     <a>Thrifty Science </a>
//                 </ul>
//
//                 <ul>
//                     <p>Get to Know Us </p>
//                     <a>Careers</a>
//                     <a>Blog</a>
//                     <a>Thrifty Relations </a>
//                     <a>Thrifty Devices</a>
//                     <a>Thrifty Science </a>
//                 </ul>
//             </div>
//
//             <div className="foot-panel3">
//                 <div className="logo25"></div>
//             </div>
//
//             <div className="foot-panel4">
//                 <div className="pages">
//                     {/*<a>Conditions of Use</a>*/}
//                     {/*<a>Privacy Notice</a>*/}
//                     {/*<a>Your Ads Privacy Choices</a>*/}
//                 </div>
//                 <div className="copyright">
//
//                 </div>
//             </div>
//         </footer>
//     );
// }
//
// export default Footer;
import logoImage from '../images/pop.png'
import React from 'react';
import '../styles/footer.css'
// index.js or another global styling file
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <img src={logoImage} alt="Company Logo" />
                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">Thrifty Tech © 2023</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Dilibazar,PipalBot</span> Kathmandu, Nepal</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+977 9827904325</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">thriftytech@company.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <h2>About the company</h2>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>

            </div>
            <div className="foot-panel12" onClick={scrollToTop}>
                Back to Top
            </div>
        </footer>
    );
}

export default Footer;
