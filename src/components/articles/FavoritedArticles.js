import React, { useEffect, useState } from "react";
//HAVENT IMPORTED CSS YET
import {getUsersFavoritedArticles} from "../../modules/ArticleManager";

export const FavoritedArticles = () => {
    const [favArticles, setFavArticles] = useState([])
    
    const currentUser = sessionStorage.getItem("nutshell_user")

    useEffect(() => {
        getUsersFavoritedArticles(currentUser).then(setFavArticles)
    }, [])

    return (
        <div>
            <div className="fav__article__list" key={favArticles.length}>
                <h3 className="fav__list__header">Favorite Articles</h3>
                <div className="fav__list__content">
                    {favArticles.map(fa => (
                        <a href={fa.url} target="_blank" className="fav__list__title">{fa.title}</a>
                    ))}
                </div>
            </div>
        </div>
    )





}