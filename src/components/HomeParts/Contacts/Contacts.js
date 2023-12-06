import styles from './Contacts.module.css'

export default function ContactsPart(){
    return <div className={styles.contacts} id="frame4">
        <h1>Where are we located?</h1>
        <div className={styles.mapblock}>
            <div className={styles.left}>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5024.876903251258!2d11.560708287639313!3d48.155702204771245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75dc5191209f%3A0xdc9724a1ec3f5b3e!2sCaf%C3%A9%20Franca!5e0!3m2!1sru!2sde!4v1687280059764!5m2!1sru!2sde' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.right}>
                <div>
                    <h1>Where are we located?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nam perspiciatis dignissimos repellat, iusto quas exercitationem error aspernatur. Dignissimos, quia! Cumque perspiciatis quisquam, laborum modi et autem ullam tenetur asperiores.</p>
                    
                    <h2>Contact us</h2>
                    <p>qwqeqe: +32673476329 <br/>qwqeqe: +32673476329 <br/>qwqeqe: +32673476329</p>
                </div>
            </div>
        </div>
    </div>
}