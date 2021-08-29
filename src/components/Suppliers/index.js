import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import './index.scss';


const Suppliers = ({suppliers, handleGetSuppliers}) => {
    const {t} = useTranslation();

    useEffect(() => handleGetSuppliers(), [handleGetSuppliers]);

    if (suppliers) {

        return (
            <div className="suppliers">
                {suppliers.map(supplier => (
                    <div className="supplier" key={supplier.id}>
                        <Link className="supplier__header" to={`/supplier/${supplier.id}`}>
                            <img src={supplier.avatar} alt={t(supplier.title)}/>
                            <h4>{t(supplier.title)}</h4>
                        </Link>
                        <div className="supplier__body">
                            {supplier.products.map(product => (
                                <Link
                                    title={t(product.title)}
                                    to={`/catalog/${product.category.join('/')}/${product.id}`}
                                    key={product.id}
                                >
                                    <img src={product.image} alt={t(product.title)}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}

export default Suppliers;