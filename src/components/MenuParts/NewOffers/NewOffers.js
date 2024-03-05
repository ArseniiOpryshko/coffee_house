'use client'

import { useEffect, useState } from 'react';
import styles from './NewOffers.module.css'
import Link from 'next/link';
import axios from '@/app/configs/axiosWithBaseUrl';

export default function NewOffers(){
    const [drink, setDrink] = useState();
    const [sweet, setSweet] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            const resp1 = await axios.get(`/Product/GetLastProductWithType?id=1`);
            setSweet(resp1.data)
            const resp2 = await axios.get(`/Product/GetLastProductWithType?id=2`);
            setDrink(resp2.data)
        }
        fetchData();
    }, [])

    return <div className={styles.new_offers}>
        <h1>Our offer</h1>
        <div className={styles.flex_component}>
            <div className={styles.new_products}>
                <h3>New products</h3>
                <div className={styles.flex_products}>
                    <div className={styles.product}>
                        <div className={styles.product_inner_flex}>
                            <div className={styles.text_part}>
                                <h4>{drink?.name}</h4>
                                <p>{drink?.description.length > 100 ? 
                                    drink?.description.substring(0, 140) + '...' : 
                                    drink?.description}</p>
                            </div>
                            <img className={styles.img_part} src={"data:image/png;base64," + (drink?.image!=null?drink.image:"") } />
                        </div>
                    </div>
                    <div className={styles.product}>
                            <div className={styles.product_inner_flex}>
                                <div className={styles.text_part}>
                                <h4>{sweet?.name}</h4>
                                <p>{sweet?.description.length > 100 ? 
                                    sweet?.description.substring(0, 140) + '...' : 
                                    sweet?.description}</p>                         
                                </div>
                                <img className={styles.img_part} src={"data:image/png;base64," + (sweet?.image!=null?sweet.image:"") } />
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