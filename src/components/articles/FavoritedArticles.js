import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import {getUsersFavoritedArticles} from "../../modules/ArticleManager";
import "../Dashboard/Home.css";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

export const FavoritedArticles = () => {
    const [favArticles, setFavArticles] = useState([])
    
    const currentUser = sessionStorage.getItem("nutshell_user")

    useEffect(() => {
        getUsersFavoritedArticles(currentUser).then(setFavArticles)
    }, [])

    console.log(favArticles)

    return (
        <div>
            <div className="dash__content">
                <h2 className="dash__header">Favorite Articles</h2>
                    {favArticles.map(a => (
                        <div className="card-dash-content" key={a.id}> 
                        <a href={a.url} target="_blank" className="fav__list__title">{a.title}</a>
                        </div>
                    ))}
                </div>
            </div>
    )





}