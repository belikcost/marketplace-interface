export const getProductsFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/products`).then(r => r.json());
}