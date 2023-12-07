import React from 'react';
import './ArticleCard.css';



function ArticleCard({ imgSrc, description, tier, title }) {
  return (
    <div className='article-card'>
      <img src={imgSrc} alt="Preview" className='article-img' />
      <div className="article-info">
        <div className="article-seperate">
          <p className="article-title">{title}</p>
          <p className="article-description">{description}</p>
          <h3 className="tier-plan">{tier}</h3>
        </div>
        <p className='article-link'>Click to Read</p>
      </div>
    </div>
  )
}

export default ArticleCard
