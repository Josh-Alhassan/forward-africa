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
                        This website brings refreshing information about Africa in a climate of doubt about Africa’s pioneering exploits in civilization, arts and sciences. It has struggled with its colonial image as the ‘Dark Continent’ and its perceived incapacity to develop itself let alone lead the world. 

                    </p>

                    {/* Africa has suffered both misinformation (false information based on insufficient facts or knowledge) and disinformation (false information based on the tendency to deliberately mislead by twisting the facts). This website intends to correct this anomaly. It does so by reporting the facts on Africa based on historical and archaeological records. It will also put pictures and videos that will strengthen the correct information on Africa. It is important to stress that this website does not promote any race against the other. It believes in one human race which integrates all the races. It believes that to achieve one humanity it is imperative to correct the wrong information made against the Negroid race in the past. */}

                </div>
            </div>

            <div className='about-website'>
                <ComponentHeading text="About Website" />

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
