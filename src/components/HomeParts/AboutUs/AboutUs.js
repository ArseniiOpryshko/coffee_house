import styles from './AboutUs.module.css'

export default function AboutUsPart(){
    return <div className={styles.about_page}>
        <h1>About us</h1>
        <div className={styles.categories}>
        <div className={styles.outblock}>
            <div className={styles.catblock}>
                <div className={styles.img1}></div>                           
            </div>
            <h2>Hot drinks</h2>
        </div>  
        <div className={styles.outblock}>
            <div className={styles.catblock}>
                <div className={styles.img2}></div>                           
            </div>
            <h2>Coffee to go</h2>
        </div>
        <div className={styles.outblock}>
            <div className={styles.catblock}>
                <div className={styles.img3}></div>
            </div>
            <h2>Sweets</h2>
            </div>
        </div>
    
        <div className={styles.screen}>
        <div className={styles.info}>
            <h2>We provide wide range of food and drink: range of drinks and snacks.</h2>
            <p>Few things are as important to our quality of life as food and drink. And with our range, you can be sure that whatever you choose will be of the highest quality. Treat yourself to the perfect cup of coffee and a few gourmet delicious snacks anytime.</p>
            <a href="#frame3">Check our menu &rarr;</a>
        </div>
        <video autoPlay loop muted playsInline>
        <source src="/coffecup.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
    </div>
    
}