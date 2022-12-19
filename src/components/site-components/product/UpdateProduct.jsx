import { Button, Col, Form, Input, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { network } from '../../../network/network'

function UpdateProduct() {

  let form = useRef();

  let navigate = useNavigate();

  let { id } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {

    network.getById('/products', id)
      .then(res => {
        setproduct(res);
        form.current.resetFields();
      })

  }, [])


  const updateProduct = (values) => {

    network.update('/products', id, values)
      .then(res => {
        navigate('/admin/products')
      })

  }

  let h1Ref = useRef();
  const change = () => {
    h1Ref.current.style.color = 'tomato';
  }
  return (<>
    <h1 ref={h1Ref}>Hello</h1>
    <button onClick={() => change()}>Change h1</button>
    <Form
      ref={form}
      onFinish={updateProduct}
      layout='vertical'
      size='large'
      initialValues={
        {
          name: product.name,
          unitPrice: product.unitPrice,
          unitsInStock: product.unitsInStock,
          quantityPerUnit: product.quantityPerUnit

        }
      }
    >
      <Row>
        <Col span={10}>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your product name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

        </Col>
        <Col span={10} offset={4}>
          <Form.Item
            label='Unit Price'
            name='unitPrice'
          >
            <Input />
          </Form.Item>
        </Col>

      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label='Stock'
            name='unitsInStock'
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={10} offset={4} >
          <Form.Item
            label='Quantity per Unit'
            name='quantityPerUnit'
          >
            <Input />
          </Form.Item>
        </Col>



      </Row>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>

    </Form>

  </>)
}

export default UpdateProduct