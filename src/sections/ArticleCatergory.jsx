import React from 'react';
import './ArticleCatergory.css';
import ArticleCard from '../components/ArticleCard';

import formalEducationImg from '../assets/afica-invented-school.jpg';

import BibleNQuran from '../assets/img-3.png';
import blackArabs from '../assets/black-arab-1.png';
import africanConcepts from '../assets/black-img-2.png';
import { NavLink } from 'react-router-dom';

function ArticleCatergory() {
    return (
        <div className='article-category'>
            <NavLink to="formal-education">
                <ArticleCard imgSrc={formalEducationImg} tier="N25.00" title="Africa Invented School (Formal Education)" description="Formal education in the four walls of the classroom began in Khemet (ancient Egypt) over 3,000 before the common era (BCE). At first, children were trained by their parents at home or their workshops to acquire skills of the parents’ trades. Gradually, as the children began to increase in different homesteads it was deemed necessary to create a place away from home where training could take place, and some trainers were hired to teach the pupils at such a place called school." />
            </NavLink>

            <ArticleCard imgSrc={BibleNQuran} tier="N25.00" title="Black Africans Wrote the Bible and the Qur'an." description= "Both the Old and New Testaments of The Bible were written down or originally compiled by the black Hebrews in Egypt. The first translation of The Bible from Hebrew was by the Greeks in Alexandria, Egypt, who called it The Septuagint.  Later the Romans translated it into Latin known as The Vulgate Bible. Other translations and versions came later." />

            <ArticleCard imgSrc={blackArabs} tier="N25.00" title="Black Owners of Egypt not White Arabs" description="Khemet is currently known as the Arab Republic of Egypt. The urban areas of Egypt are dominated by white-skinned Arabs. Arabs have governed Egypt since 639 CE when an army led by Amr bin al-Asd swept into the country from Arabia. The dominant culture you see is Mediterranean which integrates both Western and Arab ways of life. Geographers and cartographers used to say that Egypt belongs to Western or Arab civilization in the Mediterranean. " />

            <ArticleCard imgSrc={africanConcepts} tier="N25.00" description="These are Originally African Concepts: Mus, Tragedy, etc" />
        </div>
    )
}

export default ArticleCatergory
