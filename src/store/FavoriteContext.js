import { createContext, useEffect, useState } from "react";
import { getFavoritesFromStorage } from "../library/helpers/storageHelper";

export const favoriteContext = createContext(null);


export const FavoriteProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([]);

    const values = {
        favorites,
        setfavorites
    }


    useEffect(() => {
      
        let favFromStorage = getFavoritesFromStorage();
        setfavorites(favFromStorage);
        
    }, [])
    

    return <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>

}