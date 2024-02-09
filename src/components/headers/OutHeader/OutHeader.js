import Link from 'next/link'
import styles from './OutHeader.module.css'
import Footer from '../../footer/Footer'
import { Main_Urls } from '@/app/configs/main-urls'

const OutHeader = ({ children })=>{
    return <>
    <div className={styles.header}>
        <Link href="/">
            <div className={styles.logo}></div>
        </Link>
        
        <ul>
            <li>
                <Link href={Main_Urls.Main}>
                    Main page
                </Link>
            </li>
            <li>
                <Link href={Main_Urls.Menu}>
                    Menu
                </Link>
            </li>
            <li>
                <Link href={Main_Urls.Cart}>
                    Cart
                </Link>
            </li>
            <li>
                <Link href={Main_Urls.Account}>
                    Account
                </Link>
            </li>
        </ul>
    </div>
    { children }
    <Footer/>
    </>
}
export default OutHeader