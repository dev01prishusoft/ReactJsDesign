import Link from 'next/link';
import { useRouter } from 'next/router'
import navbarStyle from '../styles/Navbar.module.css';

const Navbar = () => {
    const router = useRouter()
    const data = [
        {
            name: 'HOME',
            pathName: '/home'
        },
        {
            name: 'MATERIALS',
            pathName: '/materials'
        },
        {
            name: 'SERVICES',
            pathName: '/'
        },
    ]
    return (
        <nav className={navbarStyle.nav}>
            <div className={navbarStyle.leftHeader}>PHI ACOUSTICS</div>
            <div className={navbarStyle.rightHeader}>
                <ul>
                    {data.map(d => (
                        <li key={d.name} className={d.pathName === router.pathname ? navbarStyle.rightHeaderActive : navbarStyle.rightHeader}>
                            <Link href={d.pathName}>{d.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;