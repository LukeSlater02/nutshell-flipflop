import React, {useEffect, useState} from "react";
import "./ArticleList.css"
import {getAllArticles} from "../../modules/ArticleManager";
import { useNavigate} from "react-router-dom";

export const ArticleList = () => {

    const [articles, setArticles] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllArticles().then(setArticles);
    }, [])

    return (
        <>
            <div className="content__list">
                <h2 className="list__header">Article List</h2>
                <div className="list__fields">
                    <span className="list__field">Title</span> <span className="list__field">Synopsis</span> <span className="list__field">URL</span>
                </div>
                <div className="list__content">
                    {articles.map(a => (
                        <>
                            <span key={a.id} className="list__item__title">{a.title}</span> <span className="list__item__synopsis">{a.synopsis}</span> <a className="list__item__url">{a.url}</a>
                        </>
                    ))}

                </div>
            </div>

            <button type="button"
                className="add__button"
                onClick={() => {navigate("/articles/create")}}>
                    Create New Article
                </button>

        </>
    )

}