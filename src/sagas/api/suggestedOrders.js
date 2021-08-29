export const getSuggestedOrdersFetch = async ([supplier_id, status, searchString]) => {
    console.log(searchString);
    return await fetch(`${process.env.REACT_APP_API}/order-list?supplier_id=${supplier_id}&status${status}`).then(r => r.json());
};