export const getDisputesFetch = async (userId) => {
    return await fetch(`${process.env.REACT_APP_API}/disputes?userId=${userId}`).then(r => r.json());
};