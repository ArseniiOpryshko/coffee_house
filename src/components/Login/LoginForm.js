'use client'
import { useState } from 'react';
import styles from './Login.module.css'
import axios from '@/app/configs/axiosWithBaseUrl';
import { useRouter } from 'next/navigation'
export default function LoginForm(){

    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    async function onSubmit(event){
        event.preventDefault();
        
        const fetchData = async () => {
            try{
                const resp = await axios.post(`/User/login`, formData, { withCredentials: true });
                setError("");
                router.push('/account');
            } catch (error){
                setError(error.response.data);
            }  
        }
        fetchData();
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

            <span>{error}</span>
            <button type="submit">Login
                <span className={styles.cup}></span>
            </button>
        </form>
    </>
}