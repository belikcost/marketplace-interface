// [
//     {
//         "id": 1,
//         "title": "color",
//         "type": "radio_image",
//         "values": [
//             {
//                 "name": "white",
//                 "value": "https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6076609136.jpg"
//             },
//             {
//                 "name": "black",
//                 "value": "https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6076609136.jpg"
//             },
//             {
//                 "name": "yellow",
//                 "value": "https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6076609136.jpg"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "title": "size",
//         "type": "radio_text",
//         "values": [
//             {
//                 "name": "s"
//             },
//             {
//                 "name": "m"
//             },
//             {
//                 "name": "l"
//             }
//         ]
//     }
// ]

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