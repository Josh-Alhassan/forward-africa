import React from 'react';
import './OldUniversities.css';

// Image Import
import university1 from '../assets/university1.png';
import university2 from '../assets/university2.png';

function OldUniversities() {
  return (
    <div className='university-wrapper'>
      <div className="university-card">
        <img src={university1} alt="University of Al-Karaouine" className='university-img' />

        <p className="university-info">
        University of Al-Karaouine - located in Morocco, it is the oldest university in the world, established in 859 AD/CE.
        </p>

        <a className='university-link' href="https://www.vice.com/en/article/ezjjyz/the-worlds-oldest-university-was-founded-by-a-woman-of-color" target='_blank'>Read More...</a>
      </div>

      <div className="university-card">
        <img src={university2} alt="Al-Azhar University" className='university-img' />

        <p className="university-info">
        Al-Azhar University - a public university in Egypt and the second oldest in the world, established in 970 AD/CE. 
        </p>

        <a className='university-link' href="https://perkemas.org/a-brief-history-of-al-azhar-asy-syarif/" target='_blank'>Read More...</a>
      </div>
    </div>
  )
}

export default OldUniversities
