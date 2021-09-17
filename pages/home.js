import { useEffect } from "react"
import imageData from '../components/ImageList.json'
import logoImageData from '../components/LogoImageList.json'
import runningImageList from '../components/RunningImageList.json'
import successfulImgList from '../components/SuccessfullProImgList.json'
import newProductList from '../components/NewProductList.json'
import acousticDesignList from '../components/AcousticDesignList.json'
import acousticMaterialList from '../components/AcousticMaterualList.json'
import musicalRoom from '../images/musicRoom.svg';
import firstImg from '../images/1.svg'
import secondImg from '../images/2.svg'
import thirdImg from '../images/3.svg'
import fourthImg from '../images/4.svg'
import fifthImg from '../images/5.svg'
import sixthImg from '../images/6.svg'
import saventhImg from '../images/7.svg'
import Navbar from '../components/Navbar.js'
import FooterContent from '../components/FooterComponent.js'
import homeStyle from '../styles/Home.module.css';

const HomeComponent = () => {

    return (
        <>
            <Navbar />
            <div className={homeStyle.mainDiv}>
                <div className={homeStyle.pageBlock}>
                    <div className={homeStyle.heading}>Acoustic Materials</div>
                    <div className={homeStyle.imageCards}>
                        {imageData.map(d => (
                            <div key={d.id} className={homeStyle.singleImage}>
                                <img src={`${d.imageURL}`} alt="designPhotos" height="316" width="379" />
                                <div className={homeStyle.imageName}>{d.imageType}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock2}>
                    <div className={homeStyle.logoImageCards}>
                        {logoImageData.map(d => (
                            <div key={d.id} className={homeStyle.singleLogoImage}>
                                <img src={d.imageURL} alt="designPhotos" height="84" width="255" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock}>
                    <div className={homeStyle.heading}>Running Photo Images</div>
                    <div className={homeStyle.imageCards}>
                        {runningImageList.map(d => (
                            <div key={d.id} className={homeStyle.singleImage4}>
                                <img src={d.imageURL} alt="designPhotos" height="255" width="255" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock2}>
                    <div className={homeStyle.musicalImgPortion}>
                        <img src={musicalRoom.src} alt="MusicRoom" height="487" width="560" />
                        <div className={homeStyle.acousticiansContent}>
                            <p className={homeStyle.heading2}>Expert  solutions by
                                highly qualified acousticians
                            </p>
                            <ul className={homeStyle.listItemStyle}>
                                <li>Architectural Acoustics</li>
                                <li>Building Acoustics</li>
                                <li>Noise Control</li>
                                <li>Vibration Isolation</li>
                                <li>Audio Enginering</li>
                                <li>Acoustic / Audio Measurements</li>
                                <li>Acoustic Material Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className={homeStyle.acousticMaterialPortion}>
                        <div className={homeStyle.heading3}>Acoustic Materials</div>
                        <div className={homeStyle.detailContent}>Innovative, creative, attractive, customer centric solutions to acoustic /noise problemsusing decorative materials</div>
                    </div>
                    <div className={homeStyle.imageCards}>
                        <div className={homeStyle.singleImage3}>
                            <ul className={homeStyle.listItemStyle2}>
                                <li>Sound absorbing</li>
                                <li>Sound Insulating</li>
                                <li>Sound Diffusing</li>
                                <li>Vibration Damping</li>
                                <li>Bass traps</li>
                                <li>Installation materials</li>
                            </ul>
                        </div>
                        {acousticMaterialList.map(d => (
                            <div key={d.id} className={homeStyle.singleImage}>
                                <img src={d.imageURL} alt="designPhotos" height="255" width="255" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock}>
                    <div className={homeStyle.heading}>Hundreds of hugely successful projects:</div>
                    <div className={homeStyle.imageCards2}>
                        <ul className={homeStyle.listItemStyle3}>
                            <li>Schools</li>
                            <li>Offices</li>
                            <li>Churches</li>
                            <li>Cafes</li>
                            <li>Home Cinemas</li>
                            <li>Hotels</li>
                        </ul>
                        <ul className={homeStyle.listItemStyle3}>
                            <li>Gyms</li>
                            <li>Theatres</li>
                            <li>Nursery Schools</li>
                            <li>Homes</li>
                            <li>Music Venue</li>
                            <li>Universities</li>
                        </ul>
                        <ul className={homeStyle.listItemStyle3}>
                            <li>Conference Rooms</li>
                            <li>Community Centres</li>
                            <li>Restaurants</li>
                            <li>Sound Studios</li>
                            <li>Music Venue</li>
                            <li>Tourist Villages</li>
                        </ul>
                        <ul className={homeStyle.listItemStyle3}>
                            <li>Dancing Studios</li>
                            <li>Music Schools</li>
                            <li>Children Playground</li>
                            <li>Sound Studios</li>
                            <li>Buildings</li>
                            <li>Open Space Acoustics</li>
                        </ul>
                    </div>
                    <div className={homeStyle.imageCards}>
                        {successfulImgList.map(d => (
                            <div key={d.id} className={homeStyle.singleImageProduct}>
                                <img src={d.imageURL} alt="designPhotos" height="255" width="255" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock2}>
                    <div className={homeStyle.heading}>New Products</div>
                    <div className={homeStyle.imageCards}>
                        {newProductList.map(d => (
                            <div key={d.id} className={homeStyle.singleImageProduct}>
                                <img src={d.imageURL} alt="designPhotos" height="255" width="255" />
                            </div>
                        ))}
                    </div>
                    <div className={homeStyle.acousticDesignPortion}>
                        <div className={homeStyle.heading4}>Acoustic  Design</div>
                        <div className={homeStyle.headingSubContent4}>Acoustic Science solutions in perfect integration with the Architecture and Interior Design of spaces </div>
                    </div>
                    <div className={homeStyle.imageCards3}>
                        {acousticDesignList.map(d => (
                            <div key={d.id} className={homeStyle.singleImageProduct}>
                                <img src={d.imageURL} alt="designPhotos" height="255" width="255" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.pageBlock3}>
                    <div className={homeStyle.firstDiv}>
                        <div className={homeStyle.lastPgLeftPortion}>
                            <div className={homeStyle.heading3}>Phi Acoustics</div>
                            <div className={homeStyle.detailContent}>What is in a name?</div>
                            <div className={homeStyle.paragraph}>
                                <p>
                                    The name of the company, 'PHI Acoustics' is an obvious reference to the 'golden number PHI', the 'divine proportion', the 'golden section', the 'Fibonacci number' Phi (1.6180339...), symbolized by the Greek letter 'Φ', in honour of Phidias, the Greek architect and sculptor who was the first to use it with precision in the design of the Parthenon. It is the employment of this number Φ in the proportions of the temple that creates the sense of harmony of this unique architectural masterpiece. The number is also known as Plato's Golden Section because he believed in the metaphysical properties of it to create aesthetically ideal proportions. It was mathematically derived by Eudoxus, a student of Plato, by geometrical considerations.</p>
                                <p>
                                    Its subsequent use in the ancient world was widespread, especially so, in the renaissance period, during which it became a criterion in architectural design and all forms of art. Classical architecture is deeply rooted in Φ!
                                    Φ was also derived (rediscovered) independently by Fibonacci in the mathematical series named after him. There exist now several mathematical derivations. The number is encountered in countless examples not just in Art and Architecture and Music but also in Nature a fundamental design criterion, for example, for the human body, plant and animal growth, apparently in the DNA structure, the solar system and the galaxy formations ... It may even be linked to the stock exchange variations and there appear to be references to it in the Bible. It has evcalled God’s number. And Nature’s number- like an indispensable design tool! It is the secret number that determines beauty and since the number is
    mathematically derived, to Plato, this must have been evidence for the objectivity of ideal beauty. Not only does the design of architectural spaces based on 'Φ' give them visual beauty and harmony but, in addition, such spaces are well known for their superior acoustics. There is indeed some theoretical and experimental justification in this, evidenced in the superior acoustics of famous sound studios with Φ proportions.</p>

                                <p>Φ is a number, a ratio, or λόγος in Greek. According to Plato a minimum of 3 things are needed for comparison! One thing cannot be compared to itself meaningfully, neither can two things be compared to each other usefully. A third one of the same kind is necessary, to act as reference.</p>

                                <p> Take as a simple example, the division of straight line into 2 sections of lengths a and b. How may a be related to b in the absence of a guiding principle or a criterion? The answer may appear intuitive but it is probably arrived at after plenty of soul searching: Link a and b to total length of the line a+b, so that a relationship is established between the three 3 items a, b and a+b: The crucial question is how? Surely not just anyhow! A good relationship must have a logical basis, the division must be fairBack to the task: So, what happens when the line is divided so that: a is to b what a + b is to a?  Or, a / b = a + b / a
                            The ratio a/b is called Φ. Calculation shows that a/b = Φ= 1.618813…. This is Plato’s Golden section.</p>

                                <p>Isn’t this absolutely amazing?  That which satisfies the mind and soul is also perceived by the eye as the most beautiful! It seems that, if a large number of candidates were given the task of dividing the line, their average choice would converge on the mathematically ‘correct’ Φ.
                                It can be argued that Φ establishes a link between aesthetics and ethics. Apparently, the morally correct is also aesthetically beautiful!
                                Put differently, moral and aesthetic choices are governed by the same criterion. The question then can be asked: Are morality and beauty two different aspects of a single quality or are they one and the same? In ancient Greek the word ‘καλός’ had the dual meaning of ‘beautiful’ and ‘virtuous’, so for the Greeks there was n
                         </p>
                            </div>
                        </div>
                        <div className={homeStyle.lastPgRightPortion}>
                            <div className={homeStyle.singleImage2}>
                                <img src={firstImg.src} alt="designPhotos" height={firstImg.height} width={firstImg.width} />
                            </div>
                            <div className={homeStyle.singleImage2}>
                                <img src={secondImg.src} alt="designPhotos" height={secondImg.height} width={secondImg.width} />
                            </div>
                            <div className={homeStyle.singleImage2}>
                                <img src={thirdImg.src} alt="designPhotos" height={thirdImg.height} width={thirdImg.width} />
                            </div>
                            <div className={homeStyle.singleImage2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <img src={fourthImg.src} alt="designPhotos" height={fourthImg.height} width={fourthImg.width} />
                                <img src={fifthImg.src} alt="designPhotos" height={fifthImg.height} width={fifthImg.width} />
                            </div>
                        </div>
                    </div>
                    <div className={homeStyle.secondDiv}>
                        <div className={homeStyle.lastPgRightPortion} style={{ marginRight: '10px' }}>
                            <div className={homeStyle.singleImage3}>
                                <img src={sixthImg.src} alt="designPhotos" height={sixthImg.height} width={sixthImg.width} />
                            </div>
                            <div className={homeStyle.singleImage3}>
                                <img src={saventhImg.src} alt="designPhotos" height={saventhImg.height} width={saventhImg.width} />
                            </div>
                        </div>
                        <div className={homeStyle.lastPgLeftPortion}>
                            <div className={homeStyle.heading5}>So why is Φ such a special number?</div>
                            <div className={homeStyle.paragraph}>
                                <p >This is my personal view, hence, open to discussion. Here is what I think is happening:<br/> 
                                The straight line of length a+b could have been divided in an infinite number of ways, yet the point of subdivision is chosen so that a mathematical relationship is established between the two sections a and b such that a/b = a+b/a! Any other solution seems unjustified. Put differently, the solution whereby a / b is mathematically analogous to a + b / a, is both ‘fair’ and aesthetically the most pleasing! The connection of the parts to the whole is logically justified when a/b = Φ. By comparison, any other ratio seems more arbitrary.
</p>
                                <p>Isn’t this absolutely amazing?  That which satisfies the mind and soul is also perceived by the eye as the most beautiful! It seems that, if a large number of candidates were given the task of dividing the line, their average choice would converge on the mathematically ‘correct’ Φ.</p>
                                <p>It can be argued that Φ establishes a link between aesthetics and ethics. Apparently, the morally correct is also aesthetically beautiful!
                                Put differently, moral and aesthetic choices are governed by the same criterion. The question then can be asked: Are morality and beauty two different aspects of a single quality or are they one and the same? In ancient Greek the word ‘καλός’ had the dual meaning of ‘beautiful’ and ‘virtuous’, so for the Greeks there was no such dilemma! The noun ‘κάλλος’ which means ‘beauty’ in Greek – both ancient and modern- is derived from ‘καλός’ which means ‘virtuous’. Beauty is inextricably linked with virtue. Not only did they believe this but also Plato’s Golden section Φ, provided the mathematical proof! This may be the reason why Plato considered that absolute reality existed as a mathematical abstraction of ideal forms, which were only approximately copied in the actual world perceived by the senses.
Φ then is a measure of all things. For example, the punishment for a crime must be analogous to its severity.  This can be naturally extended to the other senses. Classical proportions of architecture and sculpture has its equivalent in ‘harmony’ in music. Pythagoras discovered the mathematical relationship of harmonic sounds. The public exhibition of beautiful art works and architectural masterpieces in classical Athens cultivated the soul and created ‘χρηστούς πολίτες’ = socially useful. </p>
                                <p>Φ (or PHI) has indeed amazing properties. The above is just a brief introduction for the uninitiated.
 Amongst other things, PHI symbolizes the perfection to which PHI Φ ACOUSTICS aspires!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <FooterContent />
            </div>
        </>
    )
}

export default HomeComponent;