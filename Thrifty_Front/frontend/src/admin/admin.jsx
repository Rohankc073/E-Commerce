import React, {useState} from "react";

const menu = [
    {name : "Dashboard", path:"/admin"},
    {name: "Products",path: "/admin/product"},
    {name: "Customers",path: "/admin/customers"},
    {name: "Orders",path: "/admin/order"},
    {name: "Products",path: "/admin/product"},
    {name: "AddProducts",path: "/admin/product/create"},
    {name: "Products",path: "/admin/product"},
]

const Admin=()=> {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
    const [sideBarVisible,setSideBArVisible]=useState(false)
    const navigate = usenavigate();



}