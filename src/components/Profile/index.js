import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import OrderListContainer from "../../containers/Profile/OrderListContainer";
import CatalogContainer from "../../containers/Profile/CatalogContainer";
import DisputesContainer from "../../containers/Profile/DisputesContainer";
import MessagesContainer from "../../containers/Profile/MessagesContainer";
import ReviewsContainer from "../../containers/Profile/ReviewsContainer";
import FavoritesContainer from "../../containers/Profile/FavoritesContainer";
import SettingsContainer from "../../containers/Profile/SettingsContainer";

import './index.scss';


const Profile = ({userRole}) => {
    const {t} = useTranslation();

    return (
        <div className="container">
            <div className="profile">
                <div className="profile__menu">
                    <NavLink to="/profile/order-list">{t('orderList')}</NavLink>
                    <NavLink to="/profile/disputes">{t('disputes')}</NavLink>
                    {userRole === 'supplier' ? (
                        <>
                            <NavLink to="/profile/catalog">{t('productCatalog')}</NavLink>
                            <NavLink to="/profile/reviews">{t('reviewsList')}</NavLink>
                        </>
                    ) : (
                        <NavLink to="/profile/favorites">{t('myFavorites')}</NavLink>
                    )}
                    <NavLink to="/profile/messages">{t('messages')}</NavLink>
                    <NavLink to="/profile/settings">{t('profileSettings')}</NavLink>
                </div>
                <div className="profile__content">
                    <Switch>
                        <Route exact path="/profile" render={() => <Redirect to="/profile/order-list/new"/>}/>

                        <Route exact path="/profile/order-list" render={() => <Redirect to="/profile/order-list/new"/>}/>
                        <Route path="/profile/order-list/:status" component={OrderListContainer}/>

                        <Route exact path="/profile/disputes" render={() => <Redirect to="/profile/disputes/opened"/>}/>
                        <Route path="/profile/disputes/:status" component={DisputesContainer}/>

                        <Route path="/profile/messages" component={MessagesContainer}/>
                        <Route path="/profile/settings" component={SettingsContainer}/>

                        {userRole === 'supplier' ? (
                            <>
                                <Route path="/profile/catalog" component={CatalogContainer}/>
                                <Route path="/profile/reviews" component={ReviewsContainer}/>
                            </>
                        ) : (
                            <Route path="/profile/favorites" component={FavoritesContainer}/>
                        )}

                    </Switch>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    userRole: state.user.role
});

export default connect(mapStateToProps)(Profile);
