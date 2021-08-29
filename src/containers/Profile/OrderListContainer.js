import { useEffect } from "react";
import { connect } from "react-redux";

import { getOrderListRequest, getSuggestedOrdersRequest } from "../../redux/actions";

import OrderList from "../../components/Profile/OrderList";


const OrderListContainer = ({match: {params: {status}}, locale, user, orderList, onGetOrderListRequest, onGetSuggestedRequest}) => {

    useEffect(() => {
        onGetOrderListRequest([user.id, user.role, status])
    }, [onGetOrderListRequest, user.id, user.role, status]);

    return (
        <OrderList
            locale={locale}
            userRole={user.role}
            orderList={orderList}
        />
    )
}

const mapStateToProps = (state) => ({
    locale: state.locale,
    user: state.user,
    orderList: state.orderList
});

const mapDispatchToProps = (dispatch) => ({
    onGetOrderListRequest: (data) => dispatch(getOrderListRequest(data)),
    onGetSuggestedRequest: (data) => dispatch(getSuggestedOrdersRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);