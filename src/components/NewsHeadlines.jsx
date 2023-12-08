import React from 'react'
import './NewsHeadlines.css';

function NewsHeadlines() {
    return (
        <div className='news-headlines'>
            <h2 className="news-heading">News</h2>

            <ul className="news-headlines">
                <li className="news-headline"> <a href="https://www.premiumtimesng.com/news/more-news/642426-nigerian-wins-west-african-journalist-of-the-year-award.html" target='_blank'>Nigerian wins West African journalist of the year award</a></li>
                <li className="news-headline"> <a href="https://punchng.com/12-african-musicians-who-have-won-grammy-awards/" target='_blank'>12 African musicians who have won Grammy awards</a></li>
                <li className="news-headline"> <a href="https://www.channelstv.com/2023/11/17/channels-tvs-juliana-olayinka-wins-best-business-journalist-in-west-africa-award/">Channels TV’s Juliana Olayinka Wins Best Business Journalist In West Africa Award</a></li>
                {/* <li className="news-headline"> <a href="#">Catchy Heading 4</a></li>
                <li className="news-headline"> <a href="#">Catchy Heading 5</a></li> */}
            </ul>
        </div>
    )
}

export default NewsHeadlines
