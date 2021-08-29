export const getProductDetailFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/product-detail?id=${id}`).then(r => r.json());
};