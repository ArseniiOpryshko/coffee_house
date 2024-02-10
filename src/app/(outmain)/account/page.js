'use client'

import Account from "@/components/account/Account"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function AccountPage(){
    const router = useRouter();
    const [content, setContent] = useState(<p>Loading...</p>);

    useEffect(()=>{
        if (!Cookies.get('token')) {
            router.push('/login');
        }
        else{
            setContent(<Account/>)
        }
    }, [])
    
    return content
}