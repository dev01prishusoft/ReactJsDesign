import footerStyle from '../styles/Footer.module.css';

const FooterContent = () => {
    return (
        <div className={footerStyle.pageBlock}>
            <div className={footerStyle.footerBox}>
                <div className={footerStyle.footerTitle}>PHI ACOUSTICS</div>
                <div className={footerStyle.footerBtmPortion}>
                    <div>
                        <div className={footerStyle.footerInfo}>info@phiacoustics.com</div>
                        <div className={footerStyle.footerInfo}>+357 99416605</div>
                    </div>
                    <div>
                        <div className={footerStyle.office}>OFFICES</div>
                        <div className={footerStyle.footerInfo}>24 Socrates street,</div>
                        <div className={footerStyle.footerInfo}>2123 Aglantzia</div>
                        <div className={footerStyle.footerInfo}>Nicosia, Cyprus</div>
                    </div>
                    <div>
                        <div className={footerStyle.office}>SHOWROOM</div>
                        <div className={footerStyle.footerInfo}>26 Athalassis street,</div>
                        <div className={footerStyle.footerInfo}>2221 Latsia</div>
                        <div className={footerStyle.footerInfo}>Nicosia, Cyprus</div>
                    </div>
                    <div>
                        <div className={footerStyle.footerInfo}>Copyright © 2021</div>
                        <div className={footerStyle.footerInfo}> Cyprus | Phi Acoustics |</div>
                        <div className={footerStyle.footerInfo}>Privacy Policy</div>
                        <div className={footerStyle.footerInfo} style={{ marginTop: '10px' }}>Site by <span style={{ textDecoration: 'underline' }}>Mojo Digital</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContent;