export const getSupplierProductFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/supplier-product?id=${id}`).then(r => r.json());
};