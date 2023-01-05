import AddCategory from "../components/site-components/categories/AddCategory";
import AddCounter from "../components/site-components/counter/AddCounter";
import Home from "../components/site-components/home/Home";
import Parent from "../components/site-components/memo/Parent";
import AddProduct from "../components/site-components/product/AddProduct";
import Favorites from "../components/site-components/product/Favorites";
import ProductDetail from "../components/site-components/product/ProductDetail";
import ProductList from "../components/site-components/product/ProductList";
import UpdateProduct from "../components/site-components/product/UpdateProduct";

export const routes = [
    {
        path:'/admin/products' ,
        element: <ProductList/>
    },
    {
        path:'/admin/products/add' ,
        element: <AddProduct/>
    },
    {
        path:'/admin/products/:id' ,
        element: <ProductDetail/>
    }
    ,
    {
        path:'/admin/products/update/:id' ,
        element: <UpdateProduct/>
    }
    ,
    {
        path:'/admin/addcounter' ,
        element: <AddCounter/>
    }
    ,
    {
        path:'/admin' ,
        element: <Home/>
    }
    ,
    {
        path:'/admin/favorites' ,
        element: <Favorites/>
    }
    ,
    {
        path:'/admin/addcategory' ,
        element: <AddCategory/>
    },
    {
        path:'/admin/memo' ,
        element: <Parent/>
    }
]