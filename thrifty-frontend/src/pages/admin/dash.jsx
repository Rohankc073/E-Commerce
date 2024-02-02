import React from 'react';
import '../../styles/dash.css';
import Sidebar from './sidebar';
// import Header from './header';
import RecentOrders from './recentorders';
import AdminProduct from './ProductFeatures';

const Dash = () => {
    return (
        <div>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </head>

            <div className="d-flex" id="wrapper">
                {/* Sidebar component */}
                <Sidebar />

                {/* Page Content */}
                <div id="page-content-wrapper">
                    {/* Header component */}
                    {/* <Header /> */}

                    <div className="container-fluid px-4">
                        <RecentOrders />
                        <div className="row my-5">
                            <AdminProduct />
                            {/* Your table and other content here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash;
