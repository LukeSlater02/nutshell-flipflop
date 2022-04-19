import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import "./ArticleCard.css";

//if click favorite button. 
// handleChange: grab the Id, 
    const handleChange = (e) => {

    }

//Nathan
export const ArticleCard = ({article, handleDeleteArticle}) => {
    console.log(article.favorite);
    return (
        <div className="articleCard-content">
            <section className="articleCard-container">
                <a href={article.url} target="_blank" className="card-title">{article.title}</a>
                <span className="card-synopsis">{article.synopsis}</span>
                
                {article.favorite ? <button onClick={handleChange(article.id)} className="card-favorite"><FontAwesomeIcon icon={faStar} /></button> :
                    <button className="card-notFavorite"><FontAwesomeIcon icon={faStar} /></button>}
            </section>
        </div>
    )
}

// {article.favorite === true ? <FontAwesomeIcon icon={faStar} /> : ""}


// if favorite, display Checkmark, if not favorite display nothing. 