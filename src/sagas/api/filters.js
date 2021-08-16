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
    return await fetch(`https://2ef1a3bd-dbc4-4c92-9e3a-3a906edf8481.mock.pstmn.io/filters?${query}`).then(r =>
        r.json());
}