import styles from './ProductsRange.module.css'

export default function ProductsRange(){
    return <>
    <div className={styles.drinks_range} id="drinks">
        <h1>Drinks</h1>
        <div className={styles.products}>
            <div className={styles.bigproduct}>
                <div className={styles.img}></div>
                <div className={styles.right}>
                    <div className={styles.innerright}>
                        <p className={styles.label}>Vanilla Latte</p>
                        <p className={styles.text}>Our dark, premium espresso is blended with steamed milk and a light layer of foam, and finished with vanilla syrup for a sweet experience.</p>
                    </div>
                </div>
            </div>
            <div className={styles.smallproduct}>
                <div className={styles.img}></div>
                <div className={styles.right}>
                    <p className={styles.label}>Vanilla Latte</p>
                    <p className={styles.text}>Our dark, premium espresso is blended with steamed milk and a light layer of foam, and finished with vanilla syrup for a sweet experience.</p>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.sweets_range} id="sweets">
        <h1>Sweets</h1>
        <div className={styles.products}>
            <div className={styles.bigproduct}>
                <div className={styles.img}></div>
                <div className={styles.right}>
                    <div className={styles.innerright}>
                        <p className={styles.label}>Vanilla Latte</p>
                        <p className={styles.text}>Our dark, premium espresso is blended with steamed milk and a light layer of foam, and finished with vanilla syrup for a sweet experience.</p>
                    </div>
                </div>
            </div>
            <div className={styles.smallproduct}>
                <div className={styles.img}></div>
                <div className={styles.right}>
                    <p className={styles.label}>Vanilla Latte</p>
                    <p className={styles.text}>Our dark, premium espresso is blended with steamed milk and a light layer of foam, and finished with vanilla syrup for a sweet experience.</p>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    </>
}