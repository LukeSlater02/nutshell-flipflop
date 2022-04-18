import React, { useEffect, useState } from "react";
import "./ArticleList.css"
import { getAllArticles, deleteArticle } from "../../modules/ArticleManager";
import { useNavigate } from "react-router-dom";
import { ArticleCard } from "./ArticleCard"
//Nathan: Sets blank state, then useEffect is invokeed which gets allArticles and SETS allArticles, re-rendering the page.
export const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const navigate = useNavigate();
    const handleDeleteArticle = (id) => {
        deleteArticle(id)
        .then(() => getAllArticles().then(setArticles))
    };
    useEffect(() => {
        getAllArticles().then(setArticles);
    }, [])
    return (
        <div>
            <div className="article__list" key={articles.length}>
                <h2 className="list__header">Article List</h2>
                <div className="list__fields">
                    <span className="list__field__title">Title</span>
                        <span className="list__field__synopsis">Synopsis</span>
                </div>
                <div className="list__content">
                    {articles.map(a => (
                                <ArticleCard
                                key={a.id}
                                article={a}
                                handleDeleteArticle={handleDeleteArticle} />
                    ))}
                </div>
            </div>
            <button type="button"
                className="add__button"
                onClick={() => { navigate("/articles/create") }}>
                Create New Article
            </button>
        </div>
    )
}