import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";


const VariableAttributes = ({variableAttributes, chosenAttributes, handleChange}) => {
    const {t} = useTranslation();
    const history = useHistory();

    const initialAttribute = {
        name: variableAttributes[0].title,
        values: ['']
    };

    const handleChangeName = (index, name) => {
        handleChange('variableAttributes', chosenAttributes.map((chosenAttribute, i) => i === index ? {
            ...chosenAttribute,
            name
        } : chosenAttribute));
    };

    const handleChangeValues = (attributeIndex, attributeValueIndex, value) => {
        handleChange('variableAttributes', chosenAttributes.map((chosenAttribute, i) => i === attributeIndex ? {
            ...chosenAttribute,
            values: chosenAttribute.values.map((attributeValue, i) => i === attributeValueIndex ? value : attributeValue)
        } : chosenAttribute));
    };

    const handleAddValue = (attributeIndex) => {
        handleChange('variableAttributes', chosenAttributes.map((chosenAttribute, i) => i === attributeIndex ? {
            ...chosenAttribute,
            values: [...chosenAttribute.values, '']
        } : chosenAttribute));
    };

    const validateAndGoNext = (e) => {
        e.preventDefault();
        history.push('/profile/catalog/add-product/details');
    }

    return (
        <form onSubmit={validateAndGoNext}>
            <h4>{t('variableAttributes')}</h4>
            <span
                className="add-product_button"
                onClick={() => handleChange('variableAttributes', [...chosenAttributes, initialAttribute])}
            >
                {t('addAttribute')}
            </span>
            {chosenAttributes.map((chosenAttribute, chosenAttributeIndex) => (
                <div className="add-product_with-line" key={chosenAttributeIndex}>
                    <label>
                        <p>{t('variationAttribute')}</p>
                        <select value={chosenAttribute.name}
                                onChange={(e) => handleChangeName(chosenAttributeIndex, e.target.value)}>
                            {variableAttributes.map((variableAttribute, i) => (
                                <option value={variableAttribute.title} key={i}>
                                    {t(variableAttribute.title)}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="add-product_col">
                        <p>{t('variableAttributeValue')}</p>
                        <div className="add-product_col">
                            {chosenAttribute.values.map((value, chosenAttributeValueIndex) => (
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleChangeValues(chosenAttributeIndex, chosenAttributeValueIndex, e.target.value)}
                                    key={chosenAttributeValueIndex}
                                    required
                                />
                            ))}
                        </div>
                        <span className="add-product_button" onClick={() => handleAddValue(chosenAttributeIndex)}>
                            +
                        </span>
                    </label>
                </div>
            ))}
            <div className="add-product__footer">
                <Link to="/profile/catalog/add-product/media">{t('back')}</Link>
                <button>
                    {t('next')}
                </button>
            </div>
        </form>
    );
}

export default VariableAttributes;

