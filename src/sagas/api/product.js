export const getProductFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/product?id=${id}`).then(r => r.json());
};