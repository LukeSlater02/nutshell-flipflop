import React, { useEffect, useState } from "react";
import "./ArticleList.css"
import { getAllArticles } from "../../modules/ArticleManager";
import { useNavigate } from "react-router-dom";

export const ArticleList = () => {

    const [articles, setArticles] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllArticles().then(setArticles);
    }, [])

    return (
        <div>
            <div className="content__list">
                <h2 className="list__header">Article List</h2>
                <div className="list__fields">
                    <span className="list__field">Title</span> <span className="list__field">Synopsis</span>
                </div>
                <div className="list__content">
                    {articles.map(a => (
                        <div key={a.id} className="article__instance">
                            <a href={a.url} className="list__item">{a.title}</a>
                            <span className="list__item">{a.synopsis}</span>
                        </div>
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