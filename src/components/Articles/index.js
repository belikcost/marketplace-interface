import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import './index.scss';


const Articles = ({articles}) => {
    const {t} = useTranslation();

    if (articles) {
        return (
            <div className="articles">
                {articles.map(article => (
                    <Link
                        to={`/articles/${article.id}`}
                        className="articles_article"
                        key={article.id}
                    >
                        <img src={article.image} alt={t(article.title)}/>
                        <div className="articles_title">
                            {t(article.title)}
                        </div>
                    </Link>
                ))}
            </div>
        )
    } else {
        return null;
    }
};

export default Articles;