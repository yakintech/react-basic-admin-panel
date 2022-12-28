import React, { useContext } from 'react'
import { counterContext } from '../../../store/CounterContext'

function Home() {

    const { counter, setcounter } = useContext(counterContext)

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(0)}>Empty</button>
    </>
    )
}

export default Home