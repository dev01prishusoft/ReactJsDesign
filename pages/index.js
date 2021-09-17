import Link from 'next/link'
import phiLogoImg from '../images/phiLogo.svg'
import appStyle from '../styles/App.module.css';

export default function Home() {
  return (
    <div className={appStyle.container}>
      <div className={appStyle.innerContainer}>
        <div className={appStyle.spacing}><img src={phiLogoImg.src} alt="designPhotos" height={phiLogoImg.height} width={phiLogoImg.width} /></div>
        <div className={appStyle.spacing}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiN3YZpwoaA0NecIafmUyn97M0qaFQAFojg&usqp=CAU" alt="designPhotos" height="270" width="270" /></div>
        <div className={appStyle.spacing}><Link href="./home"><button className={appStyle.enterBtn}>Enter</button></Link></div>
      </div>
    </div>
  )
}
