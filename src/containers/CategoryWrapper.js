import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getFiltersRequest, getIcon } from "../redux/actions";
import Category from '../components/Catalog/Category';


const CategoryWrapper = ({shop, filters, onGetFiltersRequest, icons, onGetIcon, match, products}) => {
    const {category, subcategory, item} = match.params;

    const setDefaultValue = (filters) => filters.map(filter => ({...filter, value: []}));

    const [currentCategory, setCurrentCategory] = useState([category]);
    const [appointedFilters, setAppointedFilters] = useState(setDefaultValue(filters));

    useEffect(() => {
        let currentCategory = [category];

        if (item) {
            currentCategory.push(subcategory, item);
        } else if (subcategory) {
            currentCategory.push(subcategory);
        }

        onGetFiltersRequest(currentCategory);
        setCurrentCategory(currentCategory);

    }, [category, subcategory, item, onGetFiltersRequest]);

    useEffect(() => {
        setAppointedFilters(setDefaultValue(filters));
    }, [filters])

    useEffect(() => {
        appointedFilters.forEach(filter => {

            if (filter.useIcons) {
                filter.values.forEach(value => onGetIcon(value));
            }
        })
    }, [onGetIcon, appointedFilters]);

    const handleFilters = (name, value) => {
        setAppointedFilters(appointedFilters.map(filter => filter.name === name ? {...filter, value: value} : filter));
    };

    return (
        <Category
            shop={shop}
            currentCategory={currentCategory}
            filters={appointedFilters}
            handleFilters={handleFilters}
            icons={icons}
            products={products}
        />
    );
}

const mapStateToProps = (state) => ({
    shop: state.shop,
    filters: state.filters,
    icons: state.icons,
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    onGetIcon: (name) => dispatch(getIcon(name)),
    onGetFiltersRequest: (category) => dispatch(getFiltersRequest(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper)