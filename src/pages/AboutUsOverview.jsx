import React from 'react'
import Header from '../sections/Header'
import Navigatiion from '../sections/Navigatiion'
import AboutCard from '../components/AboutCard'

import './AboutUsOverview.css'

import formalEducation from '../assets/africa-invented-school.jpg';
import Author from '../assets/download.jpeg';
import paperaa from '../assets/paper.png';
import NewsFeature from '../sections/NewsFeature'

function AboutUsOverview() {
  return (
    <div className='about-overview'>
      <Header />
      <Navigatiion />

      <div className="about-card-wrap">
        <div className="about-card">
          <AboutCard title="About Website" image={formalEducation} description="AL-BISHAK, FORWARD AFRICA! counters doubt about Africa's historical achievements and current capabilities, citing misinformation and disinformation as obstacles. Eurasian records depict Africa negatively, attributing backwardness and misrule by African leaders to this perception. Undevelopment is seen as evidence of Africa's backwardness. Africanist writers are criticized for focusing on the era of Eurasian dominance, and mental slavery is identified as a major obstacle perpetuated since the 19th century. The correct history, according to the website, begins with Africa's earliest civilization and its leadership in the Egyptian Empire. Rather than lamenting, the website presents concrete achievements, relying on positive sentiments from intellectuals of all races, countering the prevailing negative propaganda against Africa. African-positive works by European intellectuals and African scholars are highlighted for their worth on the website." hrefLink="/" />

  <AboutCard title="About Author" image={Author} description="Al-Bishak, a Professor of African Literature specializing in Literary Egyptology at the Federal University of Lafia, Nigeria, conducted a 10-year doctorate research at Nasarawa State University, with archaeological visits to Egypt. His doctorate thesis, The Chronological Limits of Eurasian Literature, was later published as BLACK PAPYRUS in 2022, tracing global writing origins to Black Africa. His Master’s thesis at the University of Lagos focused on The Search For African Dramaturgy. Al-Bishak, a Member of the Order of Niger and Fellow of the Association of Nigerian Authors, earned his Bachelor's degree at Ahmadu Bello University. He has lectured at the University of Ibadan, published poetry like I Can't Breathe, and authored the award-winning novel Mrs. President in 1985. His latest work is the poetry collection Save Dunama! And Other Poems." hrefLink="https://#" />

  <AboutCard title="Our Mission" image={paperaa} description="Text box with a snippet of what would be in the page.
  And with a button below for more info...
  Lorem ipsum dolor sit amet consectetur. Pellentesque 
  eros nulla placerat magna praesent leo ridiculus.eros
  nulla placerat magna praesent leo ridiculus.
  Aliquam eleifend consectetur sapien ut adipiscing et. 
  Lorem ipsum dolor sit amet consectetur. Pellentesque
  eros nulla placerat magna 
  praesent leo ridiculus." hrefLink="https://#" />
        </div>

          <div className="about-news-category">
            <NewsFeature />
          </div>
      </div>

    </div>
  )
}

export default AboutUsOverview
