import Link from 'next/link'
import styles from './MainHeader.module.css'
import Footer from '../../footer/Footer'
import { Main_Urls } from '@/app/configs/main-urls'

const MainHeader = ({ children })=>{
    return <>
    <div className={styles.header}>
        <ul>
            <li>
                <Link href={Main_Urls.Main}  className={styles.link} >
                    Main
                </Link>
            </li>
            <li>
                <Link href="#frame2" className={styles.link}>
                    Discover us
                </Link>
            </li>
        </ul>
        <div className={styles.logo}></div>
        <ul>
            <li>    
                <Link href={Main_Urls.Menu} className={styles.link}>
                    Menu
                </Link>
            </li>
            <li>
                <Link href={Main_Urls.Account} className={styles.link}>
                    Account
                </Link>
            </li>
        </ul>
    </div>
    { children }
    <Footer/>
    </>
}
export default MainHeader