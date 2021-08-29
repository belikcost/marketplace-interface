import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { loginRequest, registerRequest, signOut } from "../../redux/actions";

import { TopBar } from "./TopBar";
import Menu from "./Menu";
import { LoginRegister } from "./LoginRegister";

import hamburgerIcon from '../../img/hamburger.svg';
import logoIcon from '../../img/logo.svg';
import userIcon from '../../img/user.svg';
import heart from '../../img/heart.svg';
import shoppingCartIcon from '../../img/shopcart.svg';
import starIcon from '/src/img/star_fill.svg';


const Header = ({shop, user, handleLoginRequest, handleSignOut, handleRegisterRequest}) => {
    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);

    const isSmall = document.documentElement.scrollWidth <= 800;

    const {t} = useTranslation();

    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu);
    }

    const handleReverseModal = () => {
        if (isShowLogin) {
            setIsShowLogin(false);
            setIsShowRegister(true);
        } else if (isShowRegister) {
            setIsShowRegister(false);
            setIsShowLogin(true);
        }
    }

    const UserDropdown = () => isSmall ? (
        <>
            <Link to="/profile/order-list">{t('orderList')}</Link>
            <Link to="/profile/disputes">{t('disputes')}</Link>
            {user.role === 'supplier' ? (
                <>
                    <Link to="/profile/catalog">{t('productCatalog')}</Link>
                    <Link to="/profile/reviews">{t('reviewsList')}</Link>
                </>
            ) : (
                <Link to="/profile/favorites">{t('myFavorites')}</Link>
            )}
            <Link to="/profile/messages">{t('messages')}</Link>
            <Link to="/profile/settings">{t('profileSettings')}</Link>
            <span onClick={handleSignOut}>{t('signOut')}</span>
        </>
    ) : (
        <>
            <Link to="/profile">{t('userProfile')}</Link>
            <span onClick={handleSignOut}>{t('signOut')}</span>
        </>
    );

    return (
        <>
            <div className="container">
                <header className="header">
                    <TopBar/>
                    <div className="main">
                        <div className="main__column">
                            <div className="hamburger">
                                <img src={hamburgerIcon} alt="menu" onClick={handleShowMenu}/>
                            </div>
                            <Link to="/" className="logo">
                                <img src={logoIcon} alt="logo"/>
                            </Link>
                        </div>
                        <input type="search"/>
                        <ul className="section main__column">
                            <li>
                                <img src={userIcon} alt="user"/>
                                <div className="header_dropdown">
                                    {user ? (
                                        <UserDropdown/>
                                    ) : (
                                        <>
                                            <span onClick={() => setIsShowRegister(true)}>{t('signUp')}</span>
                                            <span onClick={() => setIsShowLogin(true)}>{t('signIn')}</span>
                                        </>
                                    )}
                                </div>
                            </li>
                            {user ?
                                (user.role === 'supplier' ? (
                                    <>
                                        <li>
                                            <Link to="/profile/catalog">
                                                <img src={shoppingCartIcon} alt={t('catalog')}/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/profile/reviews">
                                                <img src={starIcon} alt={t('reviews')}/>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/profile/favorites">
                                                <img src={heart} alt={t('myFavorites')}/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/basket">
                                                <img src={shoppingCartIcon} alt={t('basket')}/>
                                            </Link>
                                        </li>
                                    </>
                                )) : (
                                    <li>
                                        <Link to="/basket">
                                            <img src={shoppingCartIcon} alt={t('basket')}/>
                                        </Link>
                                    </li>
                                )}
                        </ul>
                    </div>
                </header>
            </div>
            {isShowMenu && (
                <Menu shop={shop} handleShowMenu={handleShowMenu}/>
            )}
            {isShowLogin && (
                <LoginRegister
                    type={'signIn'}
                    user={user}
                    handleRequest={handleLoginRequest}
                    handleCloseModal={() => setIsShowLogin(false)}
                    handleReverse={handleReverseModal}
                />
            )}
            {isShowRegister && (
                <LoginRegister
                    type={'signUp'}
                    user={user}
                    handleRequest={handleRegisterRequest}
                    handleCloseModal={() => setIsShowRegister(false)}
                    handleReverse={handleReverseModal}
                />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    user: state.user,
    shop: state.shop
});

const mapDispatchToProps = (dispatch) => ({
    handleRegisterRequest: (data) => dispatch(registerRequest(data)),
    handleLoginRequest: (data) => dispatch(loginRequest(data)),
    handleSignOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);