import React, { useContext } from 'react'
import { counterContext } from '../../../store/CounterContext'

function AddCounter() {

    //use context ile counter context e ABONE oldum.
    let { counter, setcounter } = useContext(counterContext);

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
    )
}

export default AddCounter