export const loginFetch = async (data) => {
    return await fetch(`${process.env.REACT_APP_API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(r => r.json());
};