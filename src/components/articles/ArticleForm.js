import React, { useState } from "react";
import { addArticle } from "../../modules/ArticleManager";
// LUKE: accepts inputs from text field for url, title & synopsis. auto calculates date/time with AM/PM, gets userId from sessionsStorage


export const ArticleForm = () => {
    const [article, setArticle] = useState(
        {
            userId: 0,
            url: "",
            title: "",
            synopsis: "",
            timestamp: ""
        }
    )

    const [isLoading, setIsLoading] = useState(false)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    c = mm + '/' + dd + '/' + yyyy;

    const handleControlledInputChange = (event) => {
        let newArticle = [...article]
        let newVal = event.target.value

        newArticle[event.target.id] = newVal
        setArticle(newArticle)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)

        var dateWithoutSecond = new Date();
        article.timestamp = dateWithoutSecond.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        article.userId = sessionStorage.getItem("nutshell_user")

        if (article.url === "" || article.title === "" || article.synopsis === "") {
            window.alert("Please complete all fields.")
        }

        addArticle(article).then(() => setIsLoading(false))
    }

    return (
        <>
            <form className="article__form">
                <h2 className="article__header">Create New Article</h2>

                <fieldset className="article__fields">
                    <div>
                        <label htmlFor="url">URL:</label>
                        <input type="text" id="url" onChange={handleControlledInputChange} required className="form-control" placeholder="link to article" value={article.url} />
                    </div>
                </fieldset>

                <fieldset className="article__fields">
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" onChange={handleControlledInputChange} required className="form-control name" placeholder="article title" value={event.title} />
                    </div>
                </fieldset>


                <fieldset className="article__fields">
                    <div>
                        <label htmlFor="synopsis">Synopsis:</label>
                        <input type="text" id="synopsis" onChange={handleControlledInputChange} required className="form-control location" placeholder="article synopsis" value={article.synopsis} />
                    </div>
                </fieldset>

                <button
                    type="button"
                    className="submit__article__button"
                    disabled={isLoading}
                    onClick={handleSubmit}>
                    Save Article
                </button>

            </form>
        </>
    )
}