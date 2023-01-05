import React, { useMemo } from 'react'

function Child2() {

    let data = useMemo(() => {
        let date = new Date();
        return date.toString();
    }, [])

    return (
       <h1>{data}</h1>
    )
}

export default Child2