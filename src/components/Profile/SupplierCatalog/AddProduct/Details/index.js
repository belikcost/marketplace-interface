import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";

import removeIcon from '/src/img/trash_active.svg';


const Details = ({details, chosenDetails, handleChange}) => {
    const {t} = useTranslation();
    const history = useHistory();
    const possibleDetails = details.filter(detail => !chosenDetails.some(chosenDetail => chosenDetail.id === detail.id));

    const handleAddDetail = (id) => {
        handleChange('details', [...chosenDetails, {...possibleDetails.find(detail => detail.id === +id), value: ''}]);
    };

    const handleChangeValue = (id, value) => {
        handleChange('details', chosenDetails.map(chosenDetail => chosenDetail.id === id ? {
            ...chosenDetail,
            value
        } : chosenDetail));
    };

    const handleRemoveDetail = (id) => {
        handleChange('details', chosenDetails.filter(detail => detail.id !== id));
    };

    const validateAndSave = (e) => {
        e.preventDefault();
        history.push('/profile/catalog');
    }

    return (
        <form onSubmit={validateAndSave}>
            <h4>{t('details')}</h4>
            <label>
                {t('addDetails')}
                <select
                    value="default"
                    onChange={(e) => handleAddDetail(e.target.value)}
                    disabled={possibleDetails.length === 0}
                >
                    <option value="default" disabled>{t('choseDetail')}</option>
                    {possibleDetails.map(possibleDetail => (
                        <option value={possibleDetail.id} key={possibleDetail.id}>
                            {t(possibleDetail.title)}
                        </option>
                    ))}
                </select>
            </label>
            <div>
                {chosenDetails.map(chosenDetail => (
                    <label key={chosenDetail.id} className="add-product__chosen-detail">
                        <p>{t(chosenDetail.title)}</p>
                        <span>
                            <select
                                value={chosenDetail.value || 'default'}
                                onChange={(e) => handleChangeValue(chosenDetail.id, e.target.value)}
                            >
                                <option value="default" disabled>
                                    {t('choseValue')}
                                </option>
                                {chosenDetail.values.map((value, i) => (
                                    <option value={value} key={i}>
                                        {t(value)}
                                    </option>
                                ))}
                            </select>
                            <img src={removeIcon} onClick={() => handleRemoveDetail(chosenDetail.id)} alt={t('remove')}/>
                        </span>
                    </label>
                ))}
            </div>
            <div className="add-product__footer">
                <Link to="profile/catalog/add-product/variable-attributes">{t('back')}</Link>
                <button>
                    {t('save')}
                </button>
            </div>
        </form>
    );
}

export default Details;