import React from 'react';
import './ArticleCatergory.css';
import ArticleCard from '../components/ArticleCard';

import imgTest from '../assets/logo.png';

function ArticleCatergory() {
    return (
        <div className='article-category'>
            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Africa Invented School (Formal Education)" />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Black Africans Wrote the Bible and the Qur'an." />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Black Owners of Egype not White Arabs" />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="These are Originally African Concepts: Mus, Tragedy, etc" />
        </div>
    )
}

export default ArticleCatergory
