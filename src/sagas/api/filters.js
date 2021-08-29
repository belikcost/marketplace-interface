export const getFiltersFetch = async (values) => {
    let query = "";
    values.forEach((value, i) => {
        switch (i) {
            case 0:
                query += `category=${value}`;
                return;
            case 1:
                query += `&subcategory=${value}`;
                return;
            default:
                query += `&item=${value}`;
                return;
        }
    });
    return await fetch(`${process.env.REACT_APP_API}/filters?${query}`).then(r =>
        r.json());
}