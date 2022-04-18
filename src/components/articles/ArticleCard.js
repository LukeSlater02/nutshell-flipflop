import React from 'react';
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard.css"
//Nathan
export const ArticleCard = ({article, handleDeleteArticle}) => {
    return (
        <div className='articleCard-content'>
            <a href={article.url} className="card-title">{article.title}</a>
            <span className='card-synopsis'>{article.synopsis}</span>
        </div>
    )
}