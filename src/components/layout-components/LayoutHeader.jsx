import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useContext } from 'react'
import { favoriteContext } from '../../store/FavoriteContext';
import { getMenuList } from './menuList';

function LayoutHeader() {


    let { favorites } = useContext(favoriteContext);

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[2]}
                items={getMenuList(favorites.length)}
            />
        </Header>
    )
}

export default LayoutHeader