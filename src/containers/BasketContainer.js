import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getBasketRequest } from "../redux/actions";

import Basket from "../components/Basket";
import { MakeOrder } from "../components/Basket/MakeOrder";


const BasketContainer = ({basket, onGetBasketRequest}) => {

    useEffect(() => {
        onGetBasketRequest();
    }, [onGetBasketRequest]);

    return (
        <>
            <Switch>
                <Route exact path="/basket">
                    <Basket
                        basket={basket}
                    />
                </Route>
                <Route path="/basket/make-order">
                    <MakeOrder/>
                </Route>
            </Switch>

        </>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});

const mapDispatchToProps = (dispatch) => ({
    onGetBasketRequest: () => dispatch(getBasketRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)