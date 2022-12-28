import { createContext, useState } from "react";

export const counterContext = createContext(null);


export const CounterProvider = ({ children }) => {

    const [counter, setcounter] = useState(0);

    const values = {
        counter,
        setcounter
    }

    return <counterContext.Provider value={values}>{children}</counterContext.Provider>

}