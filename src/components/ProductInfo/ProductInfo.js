'use client'

import styles from './ProductInfo.module.css'
import axios from '../../app/configs/axiosWithBaseUrl';
import { useEffect, useState } from 'react';
import parse_token from '@/app/configs/parse_token'

export default function ProductInfo({productId}){
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`/Product/GetProductById?id=${productId}`);
            setProduct(resp.data)
        }
        fetchData();
    }, []);

    if (product==null) {
        return "";
    }

    const addToCart = async () => {
        const decodedToken = parse_token();
        const cartId = decodedToken.cartId;
        
        const resp = await axios.post('/Product/AddToCart', { productId: product.id, cartId: cartId });   
        if (resp.data) {
            alert("Successfully added to cart");
        }
    }

    return <div className={styles.product_screen}>
        <div className={styles.flex_parts}>
            <div className={styles.img_part}></div>
            <div className={styles.info_part}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <span className={styles.price}>Price: {product.price}$</span>
            </div>
        </div>
        <div className={styles.compound_block}>
            <h2 className={styles.c_head}>Compounds:</h2>
            <div className={styles.compound_list}>
                {product.compounds ? product.compounds.map(compound => (
                    <div className={styles.compound} key={compound.id}>
                        {compound.compound.name}: {compound.gramm}g
                    </div>
                )) : <span>No info</span>}    
            </div>
            <input onClick={addToCart} className={styles.add_button} type='button' value='Add to cart' />
        </div>
        
    </div>
}