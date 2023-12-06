import styles from './App.module.css'
import AboutUsPart from '../components/HomeParts/AboutUs/AboutUs'
import MenuPart from '../components/HomeParts/Menu/Menu'
import ContactsPart from '../components/HomeParts/Contacts/Contacts'
import MainHeader from '../components/headers/MainHeader/MainHeader'

export default function Home() {
  return <MainHeader>
    <div className={styles.main}>
      <div className={styles.central_block}>
        <h1>Make your day with us</h1>
        <p>Discover the taste of real coffee</p>
      </div>        
      <a className={styles.arrow_main} href="#frame2">
        <span>&#10140;</span>
      </a>  
    </div>
    <AboutUsPart/>  
    <MenuPart/> 
    <ContactsPart/>
  </MainHeader>
}
