export const getVariableAttributesFetch = async () => {
    return await fetch(`${process.env.REACT_APP_API}/variable-attributes`).then(r => r.json());
};