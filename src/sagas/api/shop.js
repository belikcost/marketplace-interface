export const getShopFetch = async () => {
    return await fetch(`https://5e4a4fc6-529f-44b1-bdea-f9aba3273253.mock.pstmn.io/shop`).then(r => r.json());
}