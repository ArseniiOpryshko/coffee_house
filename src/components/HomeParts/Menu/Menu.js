'use client'

import { useEffect, useState } from 'react';
import styles from './Menu.module.css'
import Link from 'next/link';
import axios from '@/app/configs/axiosWithBaseUrl';

export default function MenuPart(){
    const [drink, setDrink] = useState();
    const [sweet, setSweet] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            const resp1 = await axios.get(`/Product/GetProductImgs?id=1`);
            setSweet(resp1.data)
            const resp2 = await axios.get(`/Product/GetProductImgs?id=2`);
            setDrink(resp2.data)
        }
        fetchData();
    }, [])
    return <div className={styles.menu} id="frame3">
    <h1>Product Menu</h1>
    <div className={`${styles.productblock} ${styles.coffee}`}>
        {drink?.map(item => <img className={styles.img} src={"data:image/png;base64," + (item!=null?item:"") } />)}
    </div>
    <div className={`${styles.productblock} ${styles.sweets}`}>
        {sweet?.map(item => <img className={styles.img} src={"data:image/png;base64," + (item!=null?item:"") } />)}
    </div>
    
    <Link href="/menu" className={styles.menu_link}>
        <button className={styles.cta}>
            <span className={styles['hover-underline-animation']}> See more </span>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
        </button>
    </Link>

    <a className={styles.arrow} href="#frame4">
        <i className={`fa-solid fa-arrow-down ${styles.customClass}`}></i>
    </a>
</div>
}