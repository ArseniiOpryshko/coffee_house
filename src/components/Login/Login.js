// 'use client'

import React from 'react';
import styles from './Login.module.css'
import LoginForm from './LoginForm';
import Link from 'next/link';

export default function Login(){
    
    return <>
        <div className={styles.log_window}> 
            <div className={styles.content}> 
                <p className={styles.top_text}>
                    Welcome to <br/>
                    <span className={styles.phrase}>
                        CoffeeHouse
                    </span>
                </p>
                <LoginForm/>
                <Link href={'registration'} className={styles.not_reg}>not registered yet?</Link>
            </div>
            <div className={styles.image}></div>
        </div>
    </>
}