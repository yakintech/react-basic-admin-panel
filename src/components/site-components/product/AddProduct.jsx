import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { network } from '../../../network/network'


function AddProduct() {

  let navigate = useNavigate();

  const finish = (values) => {

    network.add('/products', values)
      .then(res => {
        navigate('/admin/products')
      })
  }

  return (<>

    <Form
      layout='vertical'
      onFinish={finish}
      size='large'
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

        <Col span={10}offset={4} >
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

export default AddProduct