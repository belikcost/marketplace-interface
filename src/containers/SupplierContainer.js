import { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { getProductsRequest, getSupplierRequest, getSupplierReviewsRequest } from "../redux/actions";

import Supplier from "../components/Suppliers/Supplier";


const SupplierContainer = ({match, locale, supplier, onGetSupplierRequest, products, onGetProductsRequest, reviews, onGetReviewsRequest}) => {

    useEffect(() => onGetSupplierRequest(match.params.id), [match.params.id, onGetSupplierRequest]);
    useEffect(() => onGetProductsRequest(), [onGetProductsRequest]);

    const handleGetReviews = useCallback(
        () => onGetReviewsRequest(match.params.id),
        [match.params.id, onGetReviewsRequest]
    );

    return (
        <Supplier
            locale={locale}
            supplier={supplier}
            products={products}
            reviews={reviews}
            handleGetReviews={handleGetReviews}
        />
    );
}

const mapStateToProps = (state) => ({
    locale: state.locale,
    supplier: state.supplier,
    products: state.products,
    reviews: state.supplierReviews,
});

const mapDispatchToProps = (dispatch) => ({
    onGetSupplierRequest: (id) => dispatch(getSupplierRequest(id)),
    onGetProductsRequest: () => dispatch(getProductsRequest()),
    onGetReviewsRequest: (id) => dispatch(getSupplierReviewsRequest(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(SupplierContainer);


