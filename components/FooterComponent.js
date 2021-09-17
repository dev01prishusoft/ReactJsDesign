import footerStyle from '../styles/Footer.module.css';

const FooterContent = () => {
    return (
        <div className={footerStyle.pageBlock}>
            <div className={footerStyle.footerBox}>
                <div className={footerStyle.footerTitle}>PHI ACOUSTICS</div>
                <div className={footerStyle.footerBtmPortion}>
                    <div className={footerStyle.contactTitle}>
                        <div className={footerStyle.footerInfo}>info@phiacoustics.com</div>
                        <div className={footerStyle.footerInfo}>+357 99416605</div>
                    </div>
                    <div className={footerStyle.contactTitle}>
                        <div className={footerStyle.office}>OFFICES</div>
                        <div className={footerStyle.footerInfo}>24 Socrates street, <br />
                        2123 Aglantzia<br />
                        Nicosia, Cyprus </div>
                    </div>
                    <div className={footerStyle.contactTitle}>
                        <div className={footerStyle.office}>SHOWROOM</div>
                        <div className={footerStyle.footerInfo}>26 Athalassis street, <br />
                        2221 Latsia<br />
                         Nicosia, Cyprus</div>
                    </div>
                    <div className={footerStyle.contactTitle}>
                        <div className={footerStyle.footerInfo}>Copyright © 2021<br />
                        Cyprus | Phi Acoustics |<br />
                        Privacy Policy</div>
                        <div className={footerStyle.footerInfo} style={{ marginTop: '15px' }}>Site by <span style={{ textDecoration: 'underline' }}>Mojo Digital</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContent;