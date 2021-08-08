import { useState } from "react";
import { ShopArea } from "./ShopArea";
import { useTranslation } from "react-i18next";
import './index.scss';

const Menu = ({shop}) => {
    const isNotSmall = document.documentElement.scrollWidth > 580;
    const shopKeys = Object.keys(shop);
    const [currentList, setCurrentList] = useState(isNotSmall && shop[shopKeys[0]]);
    const [currentCategory, setCurrentCategory] = useState();
    const [rollbacks, setRollbacks] = useState([]);
    const [isMobileList, setIsMobileList] = useState(false);
    const { t } = useTranslation();

    const handleCurrentCategory = (item, categoryName) => {
        if (currentList) {
            setRollbacks([...rollbacks, currentCategory || Object.keys(currentList)]);
        }
        if (!isNotSmall && currentCategory) {
            setIsMobileList(true);
        }
        setCurrentList(item);
        setCurrentCategory(categoryName);
    }

    const handleRollback = (rollback) => {
        setCurrentList(rollback ? shop[rollback] : undefined);
        setIsMobileList(false);
        setCurrentCategory(rollback);
        setRollbacks([]);
    }

    return (
        <div className="site-menu">
            <div className="site-menu__shop">
                {!isNotSmall && currentList && (
                    <>
                        <p className="site-menu_rollback" onClick={() => handleRollback()}>
                            <span>&#8592;</span> Каталог
                        </p>
                        {rollbacks.map((rollback, i) => (
                            <p
                                className="site-menu_rollback"
                                onClick={() => handleRollback(rollback)}
                                key={i}
                            >
                                <span>&#8592;</span>
                                {t(rollback)}
                            </p>
                        ))}
                        {currentCategory && (
                            <p className="active">
                                {t(currentCategory)}
                            </p>
                        )}
                    </>
                )}
                {shopKeys.map((categories, i) => {
                    if (isNotSmall || !currentList) {
                        return (
                            <p
                                key={i}
                                onClick={() => handleCurrentCategory(shop[categories], categories)}
                                className={shop[categories] === currentList ? 'active' : ''}
                            >
                                {t(categories)}
                            </p>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            {currentList && (
                <ShopArea isNotSmall={isNotSmall} isMobileList={isMobileList} handleCurrentCategory={handleCurrentCategory} categories={currentList}/>
            )}
        </div>
    );
}

export default Menu;