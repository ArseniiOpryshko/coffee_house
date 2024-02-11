import styles from './ProductsRange.module.css'
import Link from 'next/link'

export default function BigProductCard({sweet}){

    return <Link href= {`menu/${sweet.id}`} className={styles.bigproduct}>
            <img className={styles.img} src={"data:image/png;base64," + (sweet.image!=null?sweet.image:"") } />
            <div className={styles.right}>
                <div className={styles.innerright}>
                    <p className={styles.label}>{sweet.name}</p>
                    <p className={styles.text}>{sweet.description}</p>
                </div>
            </div>
    </Link>
}