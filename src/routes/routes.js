import AddProduct from "../components/site-components/product/AddProduct";
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
]