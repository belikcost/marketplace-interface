import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getFavoritesRequest } from "../../redux/actions";

import Favorites from "../../components/Profile/Favorites";


const FavoritesContainer = ({user, favorites, onGetFavoritesRequest}) => {


    useEffect(() => {
        onGetFavoritesRequest(user.id);
    }, [user.id, onGetFavoritesRequest]);


    return (
        <Favorites
            favorites={favorites}
        />
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
   onGetFavoritesRequest: (userId) => dispatch(getFavoritesRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)