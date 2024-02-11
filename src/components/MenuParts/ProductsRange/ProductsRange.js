'use client'

import { useEffect, useState } from 'react'
import styles from './ProductsRange.module.css'
import axios from '../../../app/configs/axiosWithBaseUrl';
import BigProductCard from './BigProductCard';
import SmallProductCard from './SmallProductCard';

export default function ProductsRange(){
    const [sweets, setSweets] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchSweets = async () => {
            const resp = await axios.get('/Product/GetSweets');
            setSweets(resp.data)
            console.log(resp.data)
        }
        fetchSweets();

        const fetchDrinks = async () => {
            const resp = await axios.get('/Product/GetDrinks');
            setDrinks(resp.data)
            console.log(resp.data)
        }
        fetchDrinks();
    }, []);

    return <>
    <div className={styles.drinks_range} id="drinks">
        <h1>Drinks</h1>
        <div className={styles.products}>
        { drinks.map((sweet, index) => {
            if (index % 7 === 0) {
                return <BigProductCard key={index} sweet={sweet} />;
            } else {
                return <SmallProductCard key={index} sweet={sweet} />;
            }
        })}
        </div>
    </div>
    <div className={styles.sweets_range} id="sweets">
        <h1>Sweets</h1>
        <div className={styles.products}>
            { sweets.map((sweet, index) => {
                if (index % 7 === 0) {
                    return <BigProductCard key={index} sweet={sweet} />;
                } else {
                    return <SmallProductCard key={index} sweet={sweet} />;
                }
            })}
        </div>
    </div>
    <hr/>
    </>
}