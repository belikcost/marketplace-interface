export const getProductReviewsFetch = async (id) => {
    return await fetch(`${process.env.REACT_APP_API}/product-reviews?id=${id}`).then(r => r.json());
};