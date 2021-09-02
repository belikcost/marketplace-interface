import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { toBase64 } from "../../../../../utils";
import removeIcon from '/src/img/trash_active.svg';
import galleryIcon from '/src/img/gallery 1.svg';

const Media = ({images, handleChange}) => {
    const {t} = useTranslation();
    const fileInput = useRef();
    
    const handleSetImages = (files) => {
        Array.from(files).forEach(async (file) => {
            await toBase64(file).then(result => handleChange('images', [...images, result]));
        });
    };

    const handleRemoveImages = (removedImage) => {
        handleChange('images', images.filter(image => image !== removedImage));
    }

    return (
        <>
            <h4>{t('media')}</h4>
            <div className="add-product__add-images">
                <img src={galleryIcon} onClick={() => fileInput.current.click()} alt={t('addImages')}/>
                <p>{t('addImages')}</p>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    ref={fileInput}
                    onChange={(e) => handleSetImages(e.target.files)}
                />
            </div>
            <div className="add-product__chosen-images">
                {images.map((image, i) => (
                    <div key={i}>
                        <img src={image} alt={t('selectedImage')}/>
                        <img
                            src={removeIcon}
                            className="remove"
                            onClick={() => handleRemoveImages(image)}
                            alt={t('remove')}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Media;