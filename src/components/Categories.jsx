import React from 'react'

import './NewsHeadlines'

function Categories() {
  return (
    <div>
      <h2 className="categories">Categories</h2>

      <ul className="news-headlines">
                <li className="news-headline"> <a href="#">African Information</a></li>
                <li className="news-headline"> <a href="#">Articles</a></li>
                <li className="news-headline"> <a href="#">Books</a></li>
                <li className="news-headline"> <a href="#">Literature for High School</a></li>
                <li className="news-headline"> <a href="#">Past Questions- Jamb/NECO/WAEC/ <br />
      GCE/NABTEB</a></li>
            </ul>
    </div>
  )
}

export default Categories
