import React from 'react'
import Header from '../sections/Header'
import Navigatiion from '../sections/Navigatiion'

import './AboutWebsite.css';

import AboutWebsiteImg from '../assets/paper.png'

function AboutWebsite() {
    return (
        <div>
            <Header />
            <Navigatiion />
            <div className="about-website-section">
                <div className="about-website-section__header">
                    <h3 className="about-website-title">About Website</h3>
                    <div className="about-website--img-wrap">
                        <img src={AboutWebsiteImg} alt="" className='about-website--img' />
                    </div>
                </div>

                <div className="about-website-section__main">
                    <p className="about-website-paragraph">
                        AL-BISHAK, FORWARD AFRICA! brings refreshingly profound information about Africa and her people in a climate of doubt about Africa’s past great and pioneering exploits in terms of civilization and technological breakthroughs in all spheres of knowledge, and its current perceived incapability to lead the world. Africa has been a pitiable victim of both misinformation (false information based on insufficient facts or knowledge) and disinformation (false information based on the tendency to deliberately mislead by twisting the facts). Eurasian modern historical records have painted Africa in lurid tales of backwardness, barbarism, illiteracy, poverty, helplessness, etc. Sadly, African leaders and their governments have misruled the continent, and placed it in an unfortunate situation of backwardness that lays credence to the false information about Africa. It is therefore not difficult to point at current trends of undevelopment in Africa as evidence of the backwardness of the continent and her people. Regrettably, Africanist writers from Africa who seek to counter the negative propaganda about Africa misfire by limiting their own reading of Africa’s earliest history to contact with Eurasia at the time Eurasia took the world lead ahead of Africa after subjugating Africa via slave trade, colonialism and imperialism. Thus, their protest is often seen as sourgraping or mere lamentations. The greatest weapon that has held Africa down is mental slavery carefully and relentlessly orchestrated by the Eurasians since the 19th century when their intellectuals like Hegel, Hume, Kant, Ibn Khaldun, Ibn Sina, al-Qutbay, Roper, etc. documented their negative impression of Africans with their black skin. The black human race or Negroid has since then dominated world record in negative terms as a symbol of backwardness or retrogress. The correct history of Africa must begin with the earliest human civilization, which occurred in Africa, and how Africa led the world with the first global authority known as the Egyptian Empire before the Persian Empire, Macedonian Empire of Greece, Roman Empire, Ottoman Empire, British Empire, etc.
                        This website is not about lamentation or protest. It presents with facts concrete achievements of the African continent and her people. In so doing, it relies on information purveyed by intellectuals from all races that report Africa with positive sentiments from the past, who are few compared to the deluge of propagandists against the continent who have more than sufficient information about their negative views of Africa, and their publications are readily available and affordable. African-positive works of European intellectuals like Basil Davidson, Margaret A. Murray, Martin Bernal, etc. supported by African scholars such as Molefi Kete Asante, George G.M. James, George O. Cox, Ashaka Musa Barashango, Clyde Winters, etc. find their worth in this website.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutWebsite
