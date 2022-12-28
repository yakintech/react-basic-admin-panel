import { Badge } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { favoriteContext } from "../../store/FavoriteContext";


export const getMenuList = (count) => {

    let menuList = [
        {
            key: 0,
            label: <Link to='/admin'>Home</Link>
        },
        {
            key: 1,
            label: <Link to='/admin/products/add'>Add Product</Link>
        },
        {
            key: 2,
            label: <Link to='/admin/products'>Products</Link>
        },
        {
            key: 3,
            label: <Link to='/admin/addcounter'>Add Counter</Link>
        }
        ,
        {
            key: 4,
            label: <Link to='/admin/favorites'>Favorites <Badge count={count}></Badge></Link>
        }
        ,
        {
            key: 5,
            label: <Link to='/admin/addcategory'>Add Category</Link>
        }
    ]

    return menuList
}

