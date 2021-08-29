import { useTranslation } from "react-i18next";

export const Attribute = ({data, handleSetDataValue}) => {
    const {t} = useTranslation();

    return (
        <div>
            <p>
                <span className="product-card_text-normal">
                    {t(data.title)}:
                </span>
                <span className="product-card_attribute-value">
                     {t(data.value || 'notChosen')}
                </span>
            </p>
            <div className="product-card_attribute-values">
                {data.type === "radio_image" ?
                    data.values.map((attributeValue, i) => (
                            <img
                                onClick={() => handleSetDataValue(attributeValue.name)}
                                src={attributeValue.value}
                                className={attributeValue.name === data.value ? 'active' : ''}
                                alt={t(attributeValue.name)}
                                key={i}
                            />
                        )
                    ) : data.values.map((attributeValue, i) => (
                            <span
                                onClick={() => handleSetDataValue(attributeValue.name)}
                                className={attributeValue.name === data.value ? 'active' : ''}
                                key={i}
                            >
                                {t(attributeValue.name)}
                            </span>
                    ))}
            </div>
        </div>
    );
}