// 'use client'

import React from 'react';
import styles from './Registration.module.css'
import RegistrationForm from './RegistrationForm';

export default function Registration(){
    return <>
        <div className={styles.log_window}> 
            <div className={styles.content}> 
                <p className={styles.top_text}>
                    Sign up
                </p>
                <RegistrationForm/>
            </div>
            <div className={styles.image}></div>
        </div>
    </>
}