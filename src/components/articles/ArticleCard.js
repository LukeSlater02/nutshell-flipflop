import React, {useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import {getArticleById, updateArticle} from "../../modules/ArticleManager";

import "./ArticleCard.css"; 

//Nathan
export const ArticleCard = ({article, handleDeleteArticle}) => {

    const [ favoriteState, setFavoriteState ] = useState(false);

    const handleFavoriteChange = (article) => {
        article.favorite === true ? article.favorite = false : article.favorite = true;

        updateArticle(article)
        .then(favoriteState === false ? setFavoriteState(true) : setFavoriteState(false))
    }
    
    
    
    return (
        <div className="articleCard-content">
            <section className="articleCard-container">
                <a href={article.url} target="_blank" className="card-title">{article.title}</a>
                <span className="card-synopsis">{article.synopsis}</span>
                
                {article.favorite ? <button onClick={() => handleFavoriteChange(article)} className="card-favorite"><FontAwesomeIcon icon={faStar} /></button> :
                    <button onClick={() => handleFavoriteChange(article)} className="card-notFavorite"><FontAwesomeIcon icon={faStar} /></button>}
            </section>
        </div>
    )
}

// {article.favorite === true ? <FontAwesomeIcon icon={faStar} /> : ""}


// if favorite, display Checkmark, if not favorite display nothing. 