export const getSuppliersFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/suppliers`).then(r => r.json());
};