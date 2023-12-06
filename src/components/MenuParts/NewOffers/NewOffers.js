import styles from './NewOffers.module.css'
import Link from 'next/link';

export default function NewOffers(){
    return <div className={styles.new_offers}>
        <h1>Our offer</h1>
        <div className={styles.flex_component}>
            <div className={styles.new_products}>
                <h3>New products</h3>
                <div className={styles.flex_products}>
                    <div className={styles.product}>
                        <div className={styles.product_inner_flex}>
                            <div className={styles.text_part}>
                                <h4>Name</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur.</p>
                            </div>
                            <div className={styles.img_part}></div>
                        </div>
                    </div>
                    <div className={styles.product}>
                            <div className={styles.product_inner_flex}>
                                <div className={styles.text_part}>
                                    <h4>Name</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur.</p>
                                </div>
                                <div className={styles.img_part}></div>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.categories}>
                <Link className={styles.cat_block} href="#drinks">
                    <div className={styles.drinks_img}></div>
                    <h2>Go to drinks</h2>
                </Link>
                <Link className={styles.cat_block} href="#sweets">
                    <div className={styles.sweets_img}></div>
                    <h2>Go to sweets</h2>
                </Link>
            </div>
        </div>
    </div>
}