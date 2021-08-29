import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getArticlesRequest } from "../redux/actions";

import Articles from "../components/Articles";
import { Article } from "../components/Articles/Article";


const ArticlesContainer = ({articles, onGetArticlesRequest}) => {
    const {t} = useTranslation();

    useEffect(() => onGetArticlesRequest(),[onGetArticlesRequest])

    return (
        <Switch>
            <Route exact path="/articles">
                <div className="container">
                    <h1>{t('ourArticles')}</h1>
                    <Articles articles={articles}/>
                </div>
            </Route>
            <Route path="/articles/:id" render={({match}) => (
                <Article article={articles.find(article => +article.id === +match.params.id)}/>
            )}/>
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    onGetArticlesRequest: () => dispatch(getArticlesRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);