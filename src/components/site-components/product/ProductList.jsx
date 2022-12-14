import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { network } from '../../../network/network';

function ProductList() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)

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
    ]



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