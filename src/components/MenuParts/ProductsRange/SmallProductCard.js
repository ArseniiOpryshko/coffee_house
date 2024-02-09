import styles from './ProductsRange.module.css'
import Link from 'next/link'
export default function SmallProductCard({sweet}){

    return <Link href= {`menu/${sweet.id}`} className={styles.smallproduct}> 
        <div className={styles.img}></div>
        <div className={styles.right}>
            <p className={styles.label}>{sweet.name}</p>
            <p className={styles.text}>{sweet.description}</p>
        </div>
    </Link>
}