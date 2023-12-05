import Link from 'next/link'
import styles from './Header.module.css'

const Header = ({ children })=>{
    return <>
    <div className={styles.header}>
        <ul>
            <li>
                <Link href="#frame2" className={styles.link} >
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
                <Link href="#frame2" className={styles.link}>
                    Menu
                </Link>
            </li>
            <li>
                <Link href="#frame2" className={styles.link}>
                    Account
                </Link>
            </li>
        </ul>
    </div>
    { children }
    </>
}
export default Header