import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TopBar } from "./TopBar";
import Menu from "./Menu";
import hamburger from '../../img/hamburger.svg';
import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import heart from '../../img/heart.svg';
import shoppingCart from '../../img/shopcart.svg';

const Header = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const shop = useSelector((s) => s.shop);
    const { t } = useTranslation();

    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <>
            <div className="container">
                <header className="header">
                    <TopBar/>
                    <div className="main">
                        <div className="main__column">
                            <div className="hamburger">
                                <img src={hamburger} alt="menu" onClick={handleShowMenu}/>
                            </div>
                            <Link to="/" className="logo">
                                <img src={logo} alt="logo"/>
                            </Link>
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
                <Menu shop={shop} handleShowMenu={handleShowMenu}/>
            )}
        </>
    );
}

export default Header;