'use client'
import { useState } from 'react';
import styles from './Registration.module.css'
import axios from '@/app/configs/axiosWithBaseUrl';

export default function RegistrationForm(){
    const [formData, setFormData] = useState({email: "", password: "", reppassword: ""});
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function onSubmit(event){
        event.preventDefault();
        if (formData.password == formData.reppassword) {
            const resp = axios.post('User/register', formData);
            console.log(resp);
            setError("");
        }
        else{
            setError("Passwords do not match!");
        }
       
    }
    return <>
        <form className={styles.form} onSubmit={onSubmit}>
            <input type="text" 
                name="email" 
                placeholder='username'
                value={formData.email}
                onChange={handleChange}/>
            <input type="text" 
                name="password" 
                placeholder='password'
                value={formData.password}
                onChange={handleChange}/>

            <input type="text" 
                name="reppassword" 
                placeholder='repeat your password'
                value={formData.reppassword}
                onChange={handleChange}/>
            <span>{error}</span>

            <button type="submit">
                Confirm
            </button>
        </form>
    </>
}