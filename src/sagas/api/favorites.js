export const getFavoritesFetch = async (userId) => {
    return await fetch(`${process.env.REACT_APP_API}/favorites-products?userId=${userId}`).then(r => r.json());
};