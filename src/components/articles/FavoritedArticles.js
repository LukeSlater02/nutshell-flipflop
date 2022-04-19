import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import {getUsersFavoritedArticles} from "../../modules/ArticleManager";

export const FavoritedArticles = () => {
    const [favArticles, setFavArticles] = useState([])
    
    const currentUser = sessionStorage.getItem("nutshell_user")

    useEffect(() => {
        getUsersFavoritedArticles(currentUser).then(setFavArticles)
    }, [])

    return (
        <div>
            <div className="fav__article__list">
                <h3 className="fav__list__header">Favorite Articles</h3>
                <div className="fav__list__content">
                    {favArticles.map(a => (
                        <a href={a.url} target="_blank" className="fav__list__title">{a.title}</a>
                    ))}
                </div>
            </div>
        </div>
    )





}