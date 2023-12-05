import React from 'react'
import './NewsHeadlines.css';

function NewsHeadlines() {
    return (
        <div className='news-headlines'>
            <h2 className="news-heading">News</h2>

            <ul className="news-headlines">
                <li className="news-headline"> <a href="#">Catchy Heading 1</a></li>
                <li className="news-headline"> <a href="#">Catchy Heading 2</a></li>
                <li className="news-headline"> <a href="#">Catchy Heading 3</a></li>
                <li className="news-headline"> <a href="#">Catchy Heading 4</a></li>
                <li className="news-headline"> <a href="#">Catchy Heading 5</a></li>
            </ul>
        </div>
    )
}

export default NewsHeadlines
