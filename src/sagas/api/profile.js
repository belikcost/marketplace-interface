export const getProfileFetch = async ([userId, userRole]) => {
    return await fetch(`${process.env.REACT_APP_API}/${userRole === 'supplier' ? 'profile' : 'customer-profile'}?id=${userId}`).then(r => r.json());
};