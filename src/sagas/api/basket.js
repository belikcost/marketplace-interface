export const getBasketHashFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/basket-hash`).then(r => r.json());
};

export const getBasketFetch = async (hash) => {
    return await fetch(`${process.env.REACT_APP_API}/basket?hash=${hash}`).then(r => r.json());
};

export const updateBasketFetch = async (hash, data) => {
    return await fetch(`${process.env.REACT_APP_API}/basket?hash=${hash}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(r => r.json());
};