import Link from 'next/link'
import styles from './Account.module.css'

export default function Account(){

    return <div className={styles.detail}>
        <button className={styles.pagebttnact}>Details</button>
        <Link className={styles.ref} href={'/account/cart'}>
            <button className={styles.pagebttn}>
                    Cart
            </button>
        </Link>
        <div className={styles.parts}>
            <div className={styles.left}>
                <h3>Account properties</h3>
                <div className={styles.input_group}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                </div>
                
                <div className={styles.input_group}>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"/>
                </div>
                <button>Change password</button>
            </div>
            <div className={styles.right}>
                <h3>Delivery adress</h3>
                <div className={styles.input_group}>
                    <label htmlFor="town">Town</label>
                    <input type="text" name="town"/>
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street"/>
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone"/>
                </div>
                <button>Save</button>
            </div>
        </div>
    </div>


}