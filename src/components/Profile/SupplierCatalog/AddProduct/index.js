import { useEffect, useState } from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import MainInformation from "./MainInformation";
import Media from "./Media";
import VariableAttributes from "./VariableAttributes";
import Details from "./Details";

import './index.scss';


const AddProduct = ({match, shop, icons, variableAttributes, handleGetAttributes, details, handleGetDetails, currentProduct, handleGetCurrentProduct, sales, handleGetSales}) => {
    const {t} = useTranslation();
    const languages = Object.keys(i18next.store.data);
    const initialData = {
        title: '',
        category: [],
        vendor_code: '',
        price: '',
        description: ''
    };

    useEffect(() => {
        handleGetAttributes();
    }, [handleGetAttributes]);

    useEffect(() => {
        handleGetDetails();
    }, [handleGetDetails]);

    useEffect(() => {
        handleGetSales();
    }, [handleGetSales])

    const buildInitialData = (languages, initialData) => {
        const dataWithLanguages = {
            images: [],
            variableAttributes: [],
            details: []
        };
        languages.forEach(language => {
            dataWithLanguages[language] = initialData;
        });
        return dataWithLanguages;
    };

    const [data, setData] = useState(buildInitialData(languages, initialData));

    const handleChangeWithLanguage = (chosenLanguage, name, value) => {
        setData({...data, [chosenLanguage]: {...data[chosenLanguage], [name]: value}});
    };

    const handleChange = (name, value) => {
        setData({...data, [name]: value});
    };

    useEffect(() => {
        if (currentProduct) {
            setData(currentProduct);
        }
    }, [currentProduct]);

    useEffect(() => {
        if (match.params.id) {
            handleGetCurrentProduct(match.params.id);
        }
    }, [match.params.id]);

    useEffect(() => {
        console.log(data);
    }, [data])

    if (!match.params.id || currentProduct) {
        return (
            <div className="add-product">
                <header>
                    <h1>{match.params.id ? t('editProduct') : t('addProduct')}</h1>
                    <Link to="/profile/catalog">{t('catalog')}</Link>
                </header>
                <nav>
                    <NavLink to={`${match.url}/main-information`}>{t('mainInformation')}</NavLink>
                    <NavLink to={`${match.url}/media`}>{t('media')}</NavLink>
                    <NavLink to={`${match.url}/variable-attributes`}>{t('variableAttributes')}</NavLink>
                    <NavLink to={`${match.url}/details`}>{t('details')}</NavLink>
                </nav>
                <div className="add-product__body">
                    <Switch>
                        <Route exact path={match.url} render={() => <Redirect to={`${match.url}/main-information`}/>}/>
                        <Route path={`${match.url}/main-information`}>
                            <MainInformation
                                shop={shop}
                                languages={languages}
                                icons={icons}
                                data={data}
                                handleChange={handleChangeWithLanguage}
                                sales={sales}
                            />
                        </Route>
                        <Route path={`${match.url}/media`}>
                            <Media images={data.images} handleChange={handleChange}/>
                            <div className="add-product__footer">
                                <Link to={`${match.url}/main-information`}>{t('back')}</Link>
                                <Link to={`${match.url}/variable-attributes`}>{t('next')}</Link>
                            </div>
                        </Route>
                        <Route path={`${match.url}/variable-attributes`}>
                            <VariableAttributes
                                variableAttributes={variableAttributes}
                                chosenAttributes={data.variableAttributes}
                                handleChange={handleChange}
                            />
                        </Route>
                        <Route path={`${match.url}/details`}>
                            <Details
                                details={details}
                                chosenDetails={data.details}
                                handleChange={handleChange}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        );

    } else {
        return null;
    }
}

export default AddProduct;