export const getArticlesFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/articles`).then(r => r.json());
};