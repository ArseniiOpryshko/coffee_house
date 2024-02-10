'use client'
import Cart from "@/components/Cart/Cart";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function CartPage(){
    const router = useRouter();
    const [content, setContent] = useState(<p>Loading...</p>);

    useEffect(()=>{
        if (!Cookies.get('token')) {
            router.push('/login');
        }
        else{
            setContent(<Cart/>)
        }
    }, [])
    
    return content
}