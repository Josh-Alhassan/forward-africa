import React from 'react'
import './AboutCard.css'

import { NavLink } from 'react-router-dom';

function AboutCard({title, image, description, hrefLink}) {
  return (
    <div className='about-card'>
      <h3 className="about-card--title">{title}</h3>

      <div className="about-card--img-wrap">
        <img src={image} alt="About card article" className='about-card-img' />

      </div>

      <article className="about-card-article">{description}</article>

      <NavLink to={hrefLink} className='about-card-link'>Read More...</NavLink>
    </div>
  )
}

export default AboutCard
