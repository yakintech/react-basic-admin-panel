export const setFavoritesStorage = (favorites) => {
    localStorage.setItem('fav', JSON.stringify(favorites));
}



export const getFavoritesFromStorage = () => {

    let data = localStorage.getItem('fav');

    if(data)
        return JSON.parse(data);
    else
        return [];

}