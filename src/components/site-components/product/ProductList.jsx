import { Button, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { network } from '../../../network/network';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { favoriteContext } from '../../../store/FavoriteContext';

function ProductList() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);

    const { favorites, setfavorites } = useContext(favoriteContext);

    useEffect(() => {

        getProducts();

    }, []);

    let navigate = useNavigate();

    const getProducts = () => {
        network.getAll('/products')
            .then(data => {
                setproducts(data);
                setloading(false);
            });
    }


    const deleteProduct = (id) => {

        setloading(true);

        network.delete('/products', id)
            .then(res => {
                getProducts();
            })

    }


    const goToDetail = (id) => {
        navigate(`/admin/products/${id}`);
    }

    const addToFavorites = (id) => {

        let product = products.find(q => q.id == id);

        //favoride varsa favoriden çıkar yoksa favoriye ekle
        //find {}
        //filter []
        let favoriteControl = favorites.find(q => q.id == id);

        if (!favoriteControl) {
            setfavorites([...favorites, product]);
        }
        else {
            let filteredFavorites = favorites.filter(q => q.id != id);
            setfavorites([...filteredFavorites])
        }



    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        },
        {
            title: 'Detail',
            dataIndex: 'id',
            render: (id) => <Button type="primary" ghost onClick={() => goToDetail(id)}>Go to Detail</Button>
        }
        ,
        {
            title: 'Update',
            dataIndex: 'id',
            render: (id) => <Button type="primary" ghost onClick={() => navigate('/admin/products/update/' + id)}>Update</Button>
        },

        {
            title: 'Favorite',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => addToFavorites(id)} type="primary" shape="circle" icon={iconGenerate(id)} />
        }
    ]


    const iconGenerate = (id) => {
        let favoriteControl = favorites.find(q => q.id == id);

        if (favoriteControl)
            return <StarFilled />
        else
            return <StarOutlined />
    }



    return (<>

        <Table
            columns={columns}
            dataSource={products}
            loading={loading}
            pagination={{
                pageSize: 5
            }}
        ></Table>


    </>)
}

export default ProductList