import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import {
    getProductAttributesRequest,
    getProductRequest,
    getProductReviewsRequest,
    getSupplierRequest
} from "../redux/actions";

import Product from "../components/Catalog/Product";


const ProductContainer = ({match: {params: {id}}, locale, supplier, product, onGetProductRequest, onGetProductAttributesRequest, onGetProductReviewsRequest, onGetSupplierRequest}) => {
    const [variableAttributes, setVariableAttributes] = useState([]);
    const [count, setCount] = useState(1);

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


    if (Object.keys(product).length > 5 && product.reviewRating) {
        return (
            <Product
                locale={locale}
                product={product}
                variableAttributes={variableAttributes}
                handleSetAttributeValue={handleSetAttributeValue}
                count={count}
                handleSetCount={handleSetCount}
                supplier={supplier}
            />
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => ({
    locale: state.locale,
    product: state.currentProduct,
    supplier: state.supplier
});

const mapDispatchToProps = (dispatch) => ({
    onGetProductRequest: (id) => dispatch(getProductRequest(id)),
    onGetProductAttributesRequest: (id) => dispatch(getProductAttributesRequest(id)),
    onGetProductReviewsRequest: (id) => dispatch(getProductReviewsRequest(id)),
    onGetSupplierRequest: (id) => dispatch(getSupplierRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)

