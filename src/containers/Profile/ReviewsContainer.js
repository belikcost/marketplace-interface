import { connect } from "react-redux";

import Reviews from "../../components/Profile/Reviews";
import { getSupplierReviewsRequest } from "../../redux/actions";
import { useEffect } from "react";


const ReviewsContainer = ({user, locale, reviews, onGetReviewsRequest}) => {

    useEffect(() => {
        onGetReviewsRequest(user.id);
    }, [onGetReviewsRequest, user.id]);

    return (
        <Reviews
            locale={locale}
            reviews={reviews}
        />
    )
};

const mapStateToProps = (state) => ({
    user: state.user,
    locale: state.locale,
    reviews: state.supplierReviews
});

const mapDispatchToProps = (dispatch) => ({
    onGetReviewsRequest: (supplierId) => dispatch(getSupplierReviewsRequest(supplierId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)