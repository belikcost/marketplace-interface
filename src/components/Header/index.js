import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TopBar } from "./TopBar";
import { Menu } from "./Menu";
import { getShopRequest } from "../../redux/actions";
import hamburger from '../../img/hamburger.svg';
import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import heart from '../../img/heart.svg';
import shoppingCart from '../../img/shopcart.svg';

const Header = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const dispatch = useDispatch();
    const shop = useSelector((s) => s.shop);
    const { t } = useTranslation();
    useEffect(() => {
        dispatch(getShopRequest());
    }, [dispatch])

    console.log(shop);
    return (
        <>
            <div className="container">
                <header className="header">
                    <TopBar/>
                    <div className="main">
                        <div className="main__column">
                            <div className="hamburger">
                                <img src={hamburger} alt="menu"/>
                            </div>
                            <a href="/" className="logo">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <input type="search"/>
                        <ul className="section main__column">
                            <li>
                                <a href="/">
                                    <img src={user} alt="user"/>
                                    <p>{t('signIn')}</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={heart} alt="user"/>
                                    <p>{t('favorites')}</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={shoppingCart} alt="user"/>
                                    <p>{t('cart')}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
            {isShowMenu && (
                <Menu shop={shop}/>
            )}
        </>
    );
}

export default Header;