import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import "./ArticleCard.css";


//Nathan
export const ArticleCard = ({article, handleDeleteArticle}) => {
    console.log(article.favorite);
    return (
        <div className="articleCard-content">
            <section className="articleCard-container">
                <a href={article.url} target="_blank" className="card-title">{article.title}</a>
                <span className="card-synopsis">{article.synopsis}</span>
                
                <span className="card-favorite">{article.favorite === true ? <FontAwesomeIcon icon={faStar} /> : ""}</span>
            </section>
        </div>
    )
}

// if favorite, display Checkmark, if not favorite display nothing. 