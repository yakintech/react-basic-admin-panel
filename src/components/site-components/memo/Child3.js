import React, { useRef } from 'react'

function Child3() {

    let inputRef = useRef();
    let h1Ref = useRef();



    const changeColor = () => {
        h1Ref.current.style.color = 'tomato'
        // document.getElementById('title').style.color = 'tomato'
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (<>
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={() => focusInput()}>Focus</button>

        </div>
        <hr></hr>
        <div>
            <h1 ref={h1Ref} id='title'>Hello</h1>
            <button onClick={() => changeColor()}>Change H1 Color</button>
        </div>
    </>
    )
}

export default Child3