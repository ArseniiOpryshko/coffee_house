import styles from './App.module.css'

export default function Home() {
  return <>
    <div className={styles.central_block}>
      <h1>Make your day with us</h1>
      <p>Discover the taste of real coffee</p>
    </div>        
    <a className={styles.arrow_main} href="#frame2">
      <span>&#10140;</span>
    </a>     
  </>
}
