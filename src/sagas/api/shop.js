export const getShopFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/shop`).then(r => r.json());
}