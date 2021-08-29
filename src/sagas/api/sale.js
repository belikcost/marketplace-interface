export const getSaleFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/sale?id=${id}`).then(r => r.json());
};