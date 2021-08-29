export const getSupplierProductsFetch = async (supplier_id) => {
    return await fetch(`${process.env.REACT_APP_API}/supplier-products?supplier_id=${supplier_id}`).then(r => r.json());
};