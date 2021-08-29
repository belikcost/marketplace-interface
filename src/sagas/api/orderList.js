export const getOrderListFetch = async ([userId, role, status]) => {
    return await fetch(`${process.env.REACT_APP_API}/${role === 'supplier' ? 'order-list' : 'customer-order-list'}?userId=${userId}&status=${status}`).then(r => r.json());
};