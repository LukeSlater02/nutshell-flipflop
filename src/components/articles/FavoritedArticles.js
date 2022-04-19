import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import {getUsersFavoritedArticles} from "../../modules/ArticleManager";
import "./FavoritedArticles.css";

export const FavoritedArticles = () => {
    const [favArticles, setFavArticles] = useState([])
    
    const currentUser = sessionStorage.getItem("nutshell_user")

    useEffect(() => {
        getUsersFavoritedArticles(currentUser).then(setFavArticles)
    }, [])

    console.log(favArticles)

    return (
        <div>
            <div className="fav__article__list">
                <h2 className="list__header">Favorite Articles</h2>
                <div className="fav__list__content">
                    {favArticles.map(a => (
                        <a href={a.url} target="_blank" className="fav__list__title">{a.title}</a>
                    ))}
                </div>
            </div>
        </div>
    )





}