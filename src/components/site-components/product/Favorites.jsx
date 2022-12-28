import { Button, Table } from 'antd'
import React, { useContext } from 'react'
import { favoriteContext } from '../../../store/FavoriteContext'

function Favorites() {

    const { favorites, setfavorites } = useContext(favoriteContext);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        }
    ]

    return (<>
        <Button danger onClick={() => setfavorites([])}>Empty</Button>
        <Table
            dataSource={favorites}
            columns={columns}
        >

        </Table>
    </>
    )
}

export default Favorites