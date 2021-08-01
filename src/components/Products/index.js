import { useTranslation } from "react-i18next";
import { Item } from "./Item";
import { products } from "../../../mocks";
import './index.scss';


const Products = () => {
    const { t } = useTranslation();
    return (
        <div className="container products-container">
            <h1>{t('hurryUp')}</h1>
            <div className="products">
                {products.map(p => (
                    <Item key={p.id} {...p}/>
                ))}
            </div>
        </div>
    )

}

export default Products;