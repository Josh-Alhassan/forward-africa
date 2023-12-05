import React from 'react'
import Header from '../sections/Header'
import Navigatiion from '../sections/Navigatiion'
import About from '../sections/About'
import OldUniversities from '../sections/OldUniversities'
import ArticleCatergory from '../sections/ArticleCatergory'
import NewsFeature from '../sections/NewsFeature'

import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <Navigatiion />
      <About />
      <OldUniversities />
 
      <div className="article-section">
        <ArticleCatergory />
        <NewsFeature />
      </div>
    </div>
  )
}

export default Home
