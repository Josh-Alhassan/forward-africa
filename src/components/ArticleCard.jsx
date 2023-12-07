import React from 'react';
import './ArticleCard.css';

function ArticleCard({imgSrc, description, tier}) {
  return (
    <div className='article-card'>
      <img src={imgSrc} alt="Preview" className='article-img' />
      <div className="article-info">
        <h3 className="tier-plan">{tier}</h3>
        <p className="article-description">{description}</p>
        <a href="../sections/FormalEducation.jsx" className='article-link'>Click to Read</a>
      </div>
    </div>
  )
}

export default ArticleCard
