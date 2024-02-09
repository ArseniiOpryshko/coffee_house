'use client'

import Account from "@/components/account/Account"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AccountPage(){
    const router = useRouter();

    useEffect(()=>{
        if (!Cookies.get('token')) {
            router.push('/login');
        }
    }, [])
    
    return <Account/>
}