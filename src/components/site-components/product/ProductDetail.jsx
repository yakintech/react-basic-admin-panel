import { Button, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { network } from '../../../network/network';

function ProductDetail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});
    const [loading, setloading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {

        network.getById("/products", id)
            .then(data => {
                setdetail(data);
                setloading(false);
            })

    }, []);

    const goToBack = () => {
        navigate(-1)
    }


    return (<>
        {
            <Spin spinning={loading}>
                <Button onClick={() => goToBack()}>Go to back!</Button>

                <h1>Id: {detail.id}</h1>
                <h1>Name: {detail.name}</h1>
                <h1>Supplier Id: {detail.supplierId}</h1>
                <h1>Category Id: {detail.categoryId}</h1>
                <h1>Unit Price: {detail.unitPrice}</h1>
                <h1>Units In Stock: {detail.unitsInStock}</h1>
                <h1>quantityPerUnit: {detail.quantityPerUnit}</h1>

            </Spin>
               
           
    }


            </>
    )
}

        export default ProductDetail