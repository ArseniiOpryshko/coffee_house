import styles from './Footer.module.css'

export default function Footer(){
    return <footer className={styles.footer}>
        <div className={styles.innerf}>
            <div className={styles.socialmed}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div className={styles.other}>
                <span>Home</span>
                <span>About us</span>

                <span>Menu</span>
                <span>Contact</span>
            </div>
            <span className={styles.company}> CoffeeHouse ©2023</span>
        </div> 
    </footer>
}