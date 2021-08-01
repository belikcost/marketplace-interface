export const getShopFetch = async () => {
    return await fetch(`https://60c717e219aa1e00176a048d.mockapi.io/shop`).then(r => r.json());
}