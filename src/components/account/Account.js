import Link from 'next/link'
import styles from './Account.module.css'
import { useEffect, useState } from 'react'
import axios from '@/app/configs/axiosWithBaseUrl';
import parse_token from '@/app/configs/parse_token'
import Cookies from 'js-cookie';

export default function Account(){

    const [accountForm, setAccountForm] = useState({email:"", password: ""});
    const [deliveryForm, setDeliveryForm] = useState({town:"", street: "", phoneNumber: ""});
    const accData = parse_token();

    const handleAccountChange = (event) => {
        const { name, value } = event.target;
        setAccountForm({ ...accountForm, [name]: value });
    };

    const handleDeliveryChange = (event) => {
        const { name, value } = event.target;
        setDeliveryForm({ ...deliveryForm, [name]: value });
    };
    useEffect(()=>{      
        setAccountForm({email: accData.Email, password: ""});

        const fetchDeliveryData = async () =>{
            const resp = await axios.get(`User/GetDeliveryData?userId=${accData.Id}`);
            setDeliveryForm(resp.data);  
        }
        fetchDeliveryData();  
    }, []);

    console.log(deliveryForm)

    const SaveAccountData = async () => {
        const data = { 
            userId: accData.Id,
            email: accountForm.email,
            password: accountForm.password
        }
        const resp = await axios.post('User/ChangeProps', data);

        Cookies.set('token', resp.data, { 
            expires: 14, 
            httpOnly: false, 
            secure: true, 
            sameSite: 'none' 
        });

        alert("Account properties changed successfully");
    }
    const SaveDeliveryData = async () => {
        const data = { 
            userId: accData.Id,
            town: deliveryForm.town,
            street: deliveryForm.street,
            phone: deliveryForm.phoneNumber
        }
        const resp = await axios.post('User/ChangeDelivery', data);
        
        if (resp.data) {
            alert("Delivery information changed successfully");
        }
    }

    return <div className={styles.detail}>
        <button className={styles.pagebttnact}>Details</button>
        <Link className={styles.ref} href={'/account/cart'}>
            <button className={styles.pagebttn}>
                    Cart
            </button>
        </Link>
        <div className={styles.parts}>
            <div className={styles.left}>
                <h3>Account properties</h3>
                <div className={styles.input_group}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"
                        value={accountForm.email}
                        onChange={handleAccountChange}
                    />
                </div>
                
                <div className={styles.input_group}>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder='input new password'
                        value={accountForm.password}
                        onChange={handleAccountChange}
                    />
                </div>
                <button onClick={SaveAccountData}>Change properties</button>
            </div>
            <div className={styles.right}>
                <h3>Delivery adress</h3>
                <div className={styles.input_group}>
                    <label htmlFor="town">Town</label>
                    <input type="text" name="town"
                        value={deliveryForm.town}
                        onChange={handleDeliveryChange}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street"
                        value={deliveryForm.street}
                        onChange={handleDeliveryChange}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="phoneNumber">Phone</label>
                    <input type="text" name="phoneNumber"
                        value={deliveryForm.phoneNumber}
                        onChange={handleDeliveryChange}
                    />
                </div>
                <button onClick={SaveDeliveryData}>Save</button>
            </div>
        </div>
    </div>


}