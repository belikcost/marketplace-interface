export const getProductAttributesFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/product-variable-attributes?id=${id}`).then(r => r.json());
};