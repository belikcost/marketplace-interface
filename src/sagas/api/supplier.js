export const getSupplierFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/supplier?id=${id}`).then(r => r.json());
};