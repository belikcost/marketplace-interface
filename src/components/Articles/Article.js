import { useTranslation } from "react-i18next";

export const Article = ({article}) => {
    const {t} = useTranslation();

    if (article) {
        return (
            <div className="container">
                <div className="article">
                    <h1>{t(article.title)}</h1>
                    <img src={article.image} alt={t(article.title)}/>
                    <section>
                        {t(article.text)}
                    </section>
                </div>
            </div>
        );
    } else {
        return null;
    }
}