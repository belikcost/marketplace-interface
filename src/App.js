import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Banners from "./components/Banners";
import Products from "./components/Products";
import Catalog from "./components/Catalog";
import { getIcon, getShopRequest } from "./redux/actions";

const App = () => {
    const dispatch = useDispatch();
    const selector = useSelector(selector => selector);

    useEffect(() => {
        dispatch(getShopRequest());
    }, [dispatch]);

    useEffect(() => {
        Object.keys(selector.shop).forEach(category => dispatch(getIcon(category)));
    }, [selector.shop])

    return (
        <>
            <Header/>
            <Switch>
                {Object.keys(selector.shop).map(category =>
                    Object.keys(selector.shop[category]).map((subcategory, i) => (
                        <Route key={i} path={`/catalog/${category}/${subcategory}`}>
                            <Category categoryName={category}/>
                        </Route>
                    ))

                )}
                <Route path="/catalog">
                    <Catalog/>
                </Route>
                <Route path="/">
                    <Banners/>
                    <Products/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
