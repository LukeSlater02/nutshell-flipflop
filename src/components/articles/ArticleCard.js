import React from 'react';
import "./ArticleCard.css";
import { Link } from "react-router-dom";
//Nathan
export const ArticleCard = ({article, handleDeleteArticle}) => {
    return (
        <div className='articleCard-content'>
            <a href={article.url} className="card-title">{article.title}</a>
            <span className='card-synopsis'>{article.synopsis}</span>
        </div>
    )
}