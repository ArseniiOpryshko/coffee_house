'use client'
import Cart from "@/components/Cart/Cart";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CartPage(){
    const router = useRouter();

    useEffect(()=>{
        if (!Cookies.get('token')) {
            router.push('/login');
        }
    }, [])
    
    return <Cart/>
}