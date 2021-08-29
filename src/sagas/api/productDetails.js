export const getProductDetailsFetch = async (supplierId) => {
    return await fetch(`${process.env.REACT_APP_API}/product-details?supplier_id=${supplierId}`).then(r => r.json());
};