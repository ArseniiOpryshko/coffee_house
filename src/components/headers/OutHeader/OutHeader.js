import Link from 'next/link'
import styles from './OutHeader.module.css'
import Footer from '../../footer/Footer'

const OutHeader = ({ children })=>{
    return <>
    <div className={styles.header}>
        <Link href="/">
            <div className={styles.logo}></div>
        </Link>
        
        <ul>
            <li>
                <Link href="/">
                    Main page
                </Link>
            </li>
            <li>
                <Link href="/">
                    Menu
                </Link>
            </li>
            <li>
                <Link href="/">
                    Cart
                </Link>
            </li>
            <li>
                <Link href="/">
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