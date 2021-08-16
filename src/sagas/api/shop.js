export const getShopFetch = async () => {
    return await fetch(`https://2ef1a3bd-dbc4-4c92-9e3a-3a906edf8481.mock.pstmn.io/shop`).then(r => r.json());
}