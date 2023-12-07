import React from 'react'
import ComponentHeading from '../components/ComponentHeading'

import './About.css';
import aboutlogo from '../assets/logo.png';
import author from '../assets/author.png';

function About() {
    return (
        <div className='about-website__wrapper'>
            <div className='about-website'>
                <ComponentHeading text="About Website" />

                <div className="about-website__info">
                    <img src={aboutlogo} alt="About Logo" className='about-website__img' />

                    <p className="about-website-description">
                    "AL-BISHAK, FORWARD AFRICA!" challenges negative stereotypes about Africa, attributing its perceived challenges to misinformation and leadership mismanagement. Criticizing the focus on the slavery era by Africanist writers, the text highlights mental slavery, introduced by Eurasian intellectuals associating black skin with backwardness. The website aims to showcase Africa's concrete achievements, emphasizing the importance of tracing its history to the Egyptian Empire. It seeks a balanced perspective, incorporating positive contributions from intellectuals of all races, both European and African, instead of being a platform for lamentation.

                    </p>

                </div>
            </div>

            <div className='about-website'>
                <ComponentHeading text="About Author" />

                <div className="about-website__info">
                    <img src={author} alt="Author" className='about-website__img' />

                    <p className="about-website-description">
                    Al-Bishak is a Pan-African scholar who holds a doctorate degree, and is a Professor of African Literature with speciality in Literary Egyptology. He lectures at the Department of English and Literary Studies, Federal University of Lafia, Nasarawa State, Nigeria. He is a Fellow of the Association of Nigerian Authors (ANA).

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
