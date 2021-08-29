export const getMessagesHistoryFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/messages-history?id=${id}`).then(r => r.json());
};