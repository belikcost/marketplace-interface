export const getSupplierReviewsFetch = async (supplierId) => {
    return await fetch(`${process.env.REACT_APP_API}/supplier-reviews?supplier_id=${supplierId}`).then(r => r.json());
};