import { getYear } from "date-fns";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logoImage from '/src/img/logo_white.svg';
import vkIcon from '/src/img/vk.svg';
import instagramIcon from '/src/img/inst.svg';
import facebookIcon from '/src/img/fb.svg';

import './index.scss';


const Footer = () => {
    const {t} = useTranslation();
    const thisYear = getYear(new Date());

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="main-footer__body">
                    <div className="main-footer_col">
                        <h4>{t('forCustomers')}</h4>
                        <a href="/">{t('howItWork')}</a>
                        <a href="/">{t('customerSafety')}</a>
                        <a href="/">{t('paymentConditions')}</a>
                        <a href="/">t{('useConditions')}</a>
                        <a href="/">{t('accountRegister')}</a>
                    </div>
                    <div className="main-footer_col">
                        <h4>{t('forSuppliers')}</h4>
                        <a href="/">{t('howBeSupplier')}</a>
                        <a href="/">{t('cooperationRules')}</a>
                        <a href="/">{t('supplierPersonalPage')}</a>
                    </div>
                    <div className="main-footer_col">
                        <h4>{t('aboutCompany')}</h4>
                        <Link to="/about-us">{t('aboutUs')}</Link>
                        <a href="/">{t('news')}</a>
                        <a href="/">{t('faq')}</a>
                        <a href="/">{t('supportService')}</a>
                        <a href="/">{t('copyrightReport')}</a>
                    </div>
                    <div>
                        <div className="main-footer__subscribe">
                            <p>{t('wantGetNewsAndSales')}</p>
                            <label>
                                <input type="email" placeholder="example@example.ru"/>
                                <button>
                                    {t('subscribe')}
                                </button>
                            </label>
                        </div>
                        <div className="main-footer__contacts">
                            <h4>{t('ourContacts')}</h4>
                            <div>
                                <a href="/">
                                    <img src={vkIcon} alt="VK"/>
                                </a>
                                <a href="/">
                                    <img src={instagramIcon} alt="Instagram"/>
                                </a>
                                <a href="/">
                                    <img src={facebookIcon} alt="Facebook"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer__footer">
                    <a href="/">
                        <img src={logoImage} alt="PlaceMik"/>
                    </a>
                    <p>© PlaceMik.ru, {thisYear}</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;