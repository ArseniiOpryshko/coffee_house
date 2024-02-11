import { useEffect, useState } from 'react'
import styles from './ProductsRange.module.css'
import Link from 'next/link'
export default function SmallProductCard({sweet}){
    return <Link href= {`menu/${sweet.id}`} className={styles.smallproduct}> 
        <img className={styles.img} src={"data:image/png;base64," + (sweet.image!=null?sweet.image:"") } />
        <div className={styles.right}>
            <p className={styles.label}>{sweet.name}</p>
            <p className={styles.text}> 
                {sweet.description.length > 100 ? 
                sweet.description.substring(0, 160) + '...' : 
                sweet.description}
            </p>
        </div>
    </Link>
}