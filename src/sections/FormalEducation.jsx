import React from 'react'
import Header from './Header'
import Navigatiion from './Navigatiion'

import './FormalEducation.css'

import formalEducationImage from '../assets/afica-invented-school.jpg';

function FormalEducation() {
    return (
        <div>
            <Header />
            <Navigatiion />

            <div className="article-container">
                <div className="article-page">
                    <div className="img-rept">
                        <img className='full-page-article-image' src={formalEducationImage} alt="" />
                    </div>
                    {/* Article Content */}
                    <div className="article-contents">
                        <h2 className="article-title">
                            AFRICA INVENTED SCHOOL (FORMAL EDUCATION)
                        </h2>
                        <p className="article-paragraph">
                            Formal education in the four walls of the classroom began in Khemet (ancient Egypt) over 3,000 before the common era (BCE). At first, children were trained by their parents at home or their workshops to acquire skills of the parents’ trades. Gradually, as the children began to increase in different homesteads it was deemed necessary to create a place away from home where training could take place, and some trainers were hired to teach the pupils at such a place called school. The most experienced trainer became the head of the school. Training began orally where the teachers spoke to the pupils, and taught them what they needed to know about the skills of the trades. Gradually the scope of knowledge was expanded beyond the trades to other things that could develop the pupils better. Thus, different subjects were created and added to the school curriculum.
                        </p>

                        <p className="article-paragraph">
                            As time went on, the skill of writing was developed by some gifted set of people usually mystics or priests who could combine some symbols to represent units of sounds of a language, and interpret them to have meaning. Those symbols became words. In Khemet writing was considered a divine art hence called in Khemetian language medu-netjer (words of god). When the Greeks came to Khemet, and encountered writing they called it hieroglyphs, with the same meaning ‘words of god’.  The art of writing came in two ways –
                        </p>
                        <ol className='article-items' type='i'>
                            <li className="article-item">
                                <span className="article-subtitle">Writing:</span> on the soft surface of leaves, bones, rocks, dry animal skins, pottery, etc; at a later stage around 3300 BCE paper was invented in Khemet from the pulp of the papyrus plant called <strong>paperaa:</strong> the European removed the last two letters or vowels, and called it paper with the claim that he invented paper; along with paper the Khemetians invented pen, ink, pouch for carrying writing materials, blackboard, desks with chairs!
                            </li>
                            <li className="article-item">
                                <span className="article-subtitle">Sculpting</span> or <span className="article-subtitle">carving</span> on the hard surface of rocks, walls, temples, tombs, wood, obelisks, etc.
                            </li>
                        </ol>

                        <p className="article-paragraph">
                            Because of the divine nature of writing, the Khemetians had a god of writing called <strong>Tehuti</strong> whom the Greco-Romans adapted as Thoth or Hermes Trismegistus. The Christian church euhemerized Tehuti as St. Christopher, while in Islam he is Prophet Idris. There were also famous scribes of Khemet such as Imhotep, etc.
                        </p>

                        <p className="article-paragraph">
                            In the Khemetian school there was a library where learning materials were stored. The custodian of the library or librarian was seen as divine hence a goddess called <strong>Sheshat</strong>, wife of Tehuti. When paper was invented, instructors wrote down their knowledge on paper scrolls, which were rolled and inserted in a cylindrical container or pouch. So different scrolls according to different disciplines were arranged in an orderly fashion along rows.
                        </p>
                    </div>
                </div>


                {/* SECOND CATEGORY */}
                <div className="second-category">
                    <div className="recent-articles">
                        <h2 className="recent-articles-title">
                            Recent Article
                        </h2>

                        <h3 className="article-title"> <a href="http://#">Catchy Heading 1</a></h3>
                        <h3 className="article-title"> <a href="http://#">Catchy Heading 2</a></h3>
                        <h3 className="article-title"> <a href="http://#">Catchy Heading 3</a></h3>
                        <h3 className="article-title"> <a href="http://#">Catchy Heading 4</a></h3>
                        
                    </div>

                    <div className="news-head">
                        NEWS HEAD
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormalEducation
