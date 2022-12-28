import { createContext, useState } from "react";

export const favoriteContext = createContext(null);


export const FavoriteProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([]);

    const values = {
        favorites,
        setfavorites
    }

    return <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>

}