import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { currencies, languages } from "../../../constants";
import { toBase64 } from "../../../utils";

import { BankDetails } from "./Supplier/BankDetails";
import { GeneralInformation as SupplierGeneralInformation } from "./Supplier/GeneralInformation";
import { GeneralInformation as CustomerGeneralInformation } from "./Customer/GeneralInformation";
import { BankCards } from "./Customer/BankCards";
import { DeliveryInformation } from "./Customer/DeliveryInformation";
import { AddCardModal } from "./Customer/AddCardModal";

import { Input } from "../../../base/Fields/Input";
import { Select } from "../../../base/Fields/Select";
import { Checkbox } from "../../../base/Fields/Checkbox";

import './index.scss';


const Settings = ({profile, userRole}) => {
    const history = useHistory();
    const avatarInput = useRef();
    const {t} = useTranslation();

    const [data, setData] = useState();
    const [modalData, setModalData] = useState();

    const handleSetImage = (files) => {
        Array.from(files).forEach(async (file) => {
            await toBase64(file).then(result => handleChangeData('avatar', result));
        });
    };

    useEffect(() => {
        if (profile) {
            const securityData = {
                oldPassword: '',
                newPassword: '',
                repeatPassword: ''
            };

            setData({...profile, ...securityData});
        }
    }, [profile]);

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    };

    const handleChangeChildrenData = (parent, name, value) => {
        handleChangeData(parent, {...data[parent], [name]: value});
    };

    const handleChangeNotificationsData = (parent) => (name, value) => handleChangeChildrenData(parent, name, value);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/profile');
    };

    const SelectField = ({...props}) => <Select {...props} data={data} handleChange={handleChangeData}/>;
    const NotificationCheckbox = ({type, ...props}) => (
        <Checkbox
            {...props}
            data={data[type]}
            handleChange={handleChangeNotificationsData(type)}
            className="profile-settings_checkbox"
        />
    );

    return (
        <div className="profile-settings">
            <h1>{t('profileSettings')}</h1>
            {data && (
                <form onSubmit={handleSubmit}>
                    <section>
                        <h4>{t('personalSettings')}</h4>
                        <article>
                            <h5>{t('generalInformation')}</h5>
                            <label className="profile-settings__avatar">
                                <p>{t('avatar')}</p>
                                <img src={data.avatar} alt={t('avatar')}/>
                                <input
                                    onChange={(e) => handleSetImage(e.target.files)}
                                    type="file"
                                    ref={avatarInput}
                                />
                            </label>
                            {userRole === 'supplier' ? (
                                <SupplierGeneralInformation
                                    data={data}
                                    handleChangeData={handleChangeData}
                                />
                            ) : (
                                <CustomerGeneralInformation
                                    data={data}
                                    handleChangeData={handleChangeData}
                                />
                            )}
                            <Input name="phone" data={data} handleChange={handleChangeData} required={true}/>
                            <Input name="email" data={data} handleChange={handleChangeData} disabled={true}/>
                        </article>

                        <article>
                            <SelectField
                                name="language"
                                options={languages}
                            />
                            <SelectField
                                name="currency"
                                options={currencies}
                            />
                        </article>
                    </section>
                    {userRole === 'supplier' ? (
                        <BankDetails data={data} handleChangeData={handleChangeData}/>
                    ) : (
                       <>
                           <DeliveryInformation data={data} handleChangeData={handleChangeData}/>
                           <BankCards data={data} handleChangeData={handleChangeData} setModalData={setModalData}/>
                       </>
                    )}
                    <section>
                        <h4>{t('notifications')}</h4>
                        <article>
                            <h5>{t('emailNotifications')}</h5>
                            <NotificationCheckbox type="emailNotifications" name="newOrders"/>
                            <NotificationCheckbox type="emailNotifications" name="newMessages"/>
                            <NotificationCheckbox type="emailNotifications" name="news"/>
                        </article>
                        <article>
                            <h5>{t('pushNotifications')}</h5>
                            <NotificationCheckbox type="pushNotifications" name="newOrders"/>
                            <NotificationCheckbox type="pushNotifications" name="newMessages"/>
                            <NotificationCheckbox type="pushNotifications" name="news"/>
                        </article>
                        <article>
                            <h5>{t('phoneNotifications')}</h5>
                            <NotificationCheckbox type="phoneNotifications" name="newOrders"/>
                            <NotificationCheckbox type="phoneNotifications" name="newMessages"/>
                            <NotificationCheckbox type="phoneNotifications" name="news"/>
                        </article>
                    </section>
                    <section>
                        <h4>{t('security')}</h4>
                        <Input name="oldPassword" data={data} handleChange={handleChangeData}/>
                        <Input name="newPassword" data={data} handleChange={handleChangeData}/>
                        <Input name="repeatPassword" data={data} handleChange={handleChangeData}/>
                    </section>
                    <footer>
                        <button className="profile-settings_button">{t('save')}</button>
                    </footer>
                </form>
            )}
            <div>
                {modalData && userRole === 'customer' && (
                    <AddCardModal
                        data={data}
                        handleChangeData={handleChangeData}
                        modalData={modalData}
                        setModalData={setModalData}
                    />
                )}
            </div>
        </div>
    );
};

export default Settings;