'use client'
import Link from 'next/link';
import styles from './AdminPanel.module.css'
import { useState } from 'react';
import CreatePart from './CreatePart/CreatePart';
import DeletePart from './DeletePart/DeletePart';


export default function AdminPanel(){


    return <div className={styles.admin}>
        <Link className={styles.ref} href={'/account'}>
            <button className={styles.pagebttn}>       
                    Details
            </button>
        </Link>
        <Link className={styles.ref} href={'/account/cart'}>
            <button className={styles.pagebttn}>
                    Cart
            </button>
        </Link>
        <button className={styles.pagebttnact}>Admin Panel</button>

        <div className={styles.column}>
            
            <CreatePart/>
            
            <DeletePart/>
        </div>
    </div>;

}