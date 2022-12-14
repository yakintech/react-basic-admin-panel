import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react'
import { menuList } from './menuList';

function LayoutHeader() {



    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[2]}
                items={menuList}
            />
        </Header>
    )
}

export default LayoutHeader