import Link from 'next/link'
import styles from './Cart.module.css'
import { useEffect, useState } from 'react'
import axios from '@/app/configs/axiosWithBaseUrl';
import parse_token from '@/app/configs/parse_token'
import ProductInCart from './ProductInCart/ProductInCart';

export default function Cart(){
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);
console.log("cart", cart)
    useEffect(() => {
        const decodedToken = parse_token();
        const cartId = decodedToken.cartId;

        async function fetchData() {
            const resp = await axios.get(`Product/GetCart?id=${cartId}`);
            setCart(resp.data);
            setProducts(resp.data.productInCarts);
        }
        fetchData();
    }, []);

    async function ConfirmOrder() {
        console.log({cartId: cart.id, products: products})
        const resp = await axios.post('Product/ConfirmOrder', {cartId: cart.id, products: products});
        alert("Thank you for your purchase");
        setCart(resp.data);
        setProducts(resp.data.productInCarts);

    }
    return <div className={styles.cart}>
        <Link className={styles.ref} href={'/account'}>
            <button className={styles.pagebttn}>       
                    Details
            </button>
        </Link>
        <button className={styles.pagebttnact}>Cart</button>

        <div className={styles.tinier}>
            <div className={styles.products}>
                { products.map((prod) => <ProductInCart key={prod.id} product={prod} setCart={setCart} setProducts={setProducts}/>) }
            </div>
            <hr/>
            <h3>Total price: {cart.price}$</h3>
            <button className={styles.confirm} onClick={ConfirmOrder}>Confirm order</button>
        </div>  
    </div>
}