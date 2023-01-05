import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2';
import Child3 from './Child3';

function Parent() {

    const [counter, setcounter] = useState(0);

  return (<>
    <h1>Counter: {counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>
    <Child/>
    <Child2/>
    <Child3/>
  </>
  )
}

export default Parent