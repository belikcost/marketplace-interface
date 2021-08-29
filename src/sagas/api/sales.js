export const getSalesFetch = async (supplierId) => {
    return await fetch(`${process.env.REACT_APP_API}/sales?supplier_id=${supplierId}`).then(r => r.json());
};