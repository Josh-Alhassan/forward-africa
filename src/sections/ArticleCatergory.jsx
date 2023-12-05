import React from 'react';
import './ArticleCatergory.css';
import ArticleCard from '../components/ArticleCard';

import imgTest from '../assets/logo.png';

function ArticleCatergory() {
    return (
        <div className='article-category'>
            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Text box with a snippet of 
what would be in the page.
And with a tap on this text,
it moves you to a full 
viewed info." />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Text box with a snippet of 
what would be in the page.
And with a tap on this text,
it moves you to a full 
viewed info." />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Text box with a snippet of 
what would be in the page.
And with a tap on this text,
it moves you to a full 
viewed info." />

            <ArticleCard imgSrc={imgTest} tier="N 25.00" description="Text box with a snippet of 
what would be in the page.
And with a tap on this text,
it moves you to a full 
viewed info." />
        </div>
    )
}

export default ArticleCatergory
