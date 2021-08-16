import { useCallback, useEffect, useState } from "react";
import i18next from "i18next";
import { connect } from "react-redux";

import {
    getLocale,
    getProductAttributesRequest,
    getProductRequest,
    getProductReviewsRequest,
    getSupplierRequest
} from "../redux/actions";

import Product from "../components/Catalog/Product";

const ProductContainer = ({match: {params: {id}}, onGetLocale, product, onGetProductRequest, onGetProductAttributesRequest, onGetProductReviewsRequest, onGetSupplierRequest}) => {
    const [variableAttributes, setVariableAttributes] = useState([]);
    const [count, setCount] = useState(1);
    const [reviews, setReviews] = useState([]);

    const iso = i18next.language;

    useEffect(() => {
        onGetLocale(iso);
    }, [onGetLocale, iso])

    useEffect(() => {
        onGetProductRequest(id);
    }, [id, onGetProductRequest]);

    useEffect(() => {
        if (product.type === "variable") {
            onGetProductAttributesRequest(id);
        }
    }, [id, product.type, onGetProductAttributesRequest]);

    useEffect(() => {
        onGetProductReviewsRequest(id);
    }, [id, onGetProductReviewsRequest])

    useEffect(() => {
        onGetSupplierRequest(product.supplier_id);
    }, [product.supplier_id, onGetSupplierRequest])

    useEffect(() => {
        if (product.variableAttributes) {
            setVariableAttributes(product.variableAttributes.map(attribute => ({...attribute, value: null})));
        }
    }, [product.variableAttributes]);

    useEffect(() => {
        if (product.reviewRating.reviews) {
            setReviews(product.reviewRating.reviews);
        }
    }, [product.reviewRating.reviews])

    const handleSetAttributeValue = useCallback((id, value) => {
        setVariableAttributes(variableAttributes.map(attribute => attribute.id === id ? {
            ...attribute, value
        } : attribute));
    },[variableAttributes]);

    const handleSetCount = useCallback((count) => {
        if (count >= 1 && count <= 100) {
            setCount(count);
        }
    },[]);

    const handleSetReviews = useCallback((value) => {
        setReviews(value);
    },[]);

    return (
        <Product
            product={product}
            variableAttributes={variableAttributes}
            handleSetAttributeValue={handleSetAttributeValue}
            count={count}
            handleSetCount={handleSetCount}
            reviews={reviews}
            handleSetReviews={handleSetReviews}
        />
    );
};

const mapStateToProps = (state) => ({
    product: state.currentProduct
});

const mapDispatchToProps = (dispatch) => ({
    onGetLocale: (iso) => dispatch(getLocale(iso)),
    onGetProductRequest: (id) => dispatch(getProductRequest(id)),
    onGetProductAttributesRequest: (id) => dispatch(getProductAttributesRequest(id)),
    onGetProductReviewsRequest: (id) => dispatch(getProductReviewsRequest(id)),
    onGetSupplierRequest: (id) => dispatch(getSupplierRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)

