import { useState, createRef } from "react"
import HTMLFlipBook from "react-pageflip";
import backIcon from '../images/backIcon.svg';
import nextIcon from '../images/nextIcon.svg';
import Navbar from '../components/Navbar';
import flipBookData from '../components/FlipBookList.json';
import FooterContent from "../components/FooterComponent";
import materialStyle from '../styles/Material.module.css';

const Materials = () => {
    const [page, setPage] = useState(0);
    let flipBook = createRef();

    const nextButtonClick = () => {
        if (flipBook && flipBook.current.pageFlip()) {
            flipBook.current.pageFlip().flipNext()
        }
    };

    const prevButtonClick = () => {
        flipBook.current.pageFlip().flipPrev();
    };

    const onFlip = (e) => {
        setPage(e);
    };

    return (
        <div style={{width:'100%', height: '100%'}}>
            <Navbar />
            <div className={materialStyle.mainDiv}>
                <div className={materialStyle.heading}>Materials</div>
                <div style={{ position: 'relative', height: '100%' }}>
                    <div className={materialStyle.flipBookContainer}>
                        <div className={materialStyle.arrowIcon}>
                            <img src={backIcon.src} onClick={prevButtonClick} alt="designPhotos" height={backIcon.height} width={backIcon.width} />
                        </div>
                        <div className={materialStyle.flipBookDiv}>
                            <HTMLFlipBook
                                width={550}
                                height={633}
                                size="fixed"
                                minWidth={315}
                                maxWidth={1000}
                                minHeight={533}
                                maxHeight={633}
                                maxShadowOpacity={0.5}
                                showCover={false}
                                mobileScrollSupport={true}
                                className={materialStyle.demoBook}
                                // drawShadow={true}
                                onFlip={(e) => onFlip(e.data)}
                                // changeOrientation="portrait"
                                ref={flipBook}
                            >
                                {flipBookData.map(d => (
                                    <div key={d.id} className={materialStyle.demoPage}>
                                        <div className={materialStyle.flipBookTitle}>{d.title}</div>
                                        <img src={d.imageURL} alt="designPhotos" height="250" width="430" />
                                        <div className={materialStyle.flipBookDesc}>{d.content}</div>
                                    </div>
                                ))}
                            </HTMLFlipBook>
                        </div>
                        <div className={materialStyle.arrowIcon}>
                            <img src={nextIcon.src} onClick={nextButtonClick} alt="designPhotos" height={nextIcon.height} width={nextIcon.width} />
                        </div>
                    </div>
                    <div className={materialStyle.halfCover}></div>
                </div>
            </div>
            <FooterContent />
        </div>
    )
}

export default Materials;