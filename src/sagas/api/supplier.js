export const getSupplierFetch = async (id) => {
    return await fetch(`https://2ef1a3bd-dbc4-4c92-9e3a-3a906edf8481.mock.pstmn.io/supplier?id=${id}`).then(r => r.json());
};