import styles from './Menu.module.css'

export default function MenuPart(){
    return <div className={styles.menu} id="frame3">
    <h1>Product Menu</h1>
    <div className={`${styles.productblock} ${styles.coffee}`}>
        <img src='/coffee/01_Latte.png' alt=""/>
        <img src='/coffee/05.png' alt=""/>
        <img src='/coffee/05.png' alt=""/>
        <img src='/coffee/04.png' alt=""/>

    </div>
    <div className={`${styles.productblock} ${styles.sweets}`}>
        <img src='/eat/eat3.png' alt=""/>
        <img src='/eat/eat3.png' alt=""/>
        <img src='/eat/eat4.png' alt=""/>
        <img src='/eat/eat2.png' alt=""/>

    </div>
    <button className={styles.cta}>
        <span className={styles['hover-underline-animation']}> See more </span>
        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
    </button>

    <a className={styles.arrow} href="#frame4">
        <i className={`fa-solid fa-arrow-down ${styles.customClass}`}></i>
    </a>
</div>
}