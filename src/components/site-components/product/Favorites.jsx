import { Button, Table } from 'antd'
import React, { useContext } from 'react'
import { setFavoritesStorage } from '../../../library/helpers/storageHelper';
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

    const emptyFavorites = () => {
        setfavorites([]);
        setFavoritesStorage([]);
    }

    return (<>
        <Button danger onClick={emptyFavorites}>Empty</Button>
        <Table
            dataSource={favorites}
            columns={columns}
        >

        </Table>
    </>
    )
}

export default Favorites