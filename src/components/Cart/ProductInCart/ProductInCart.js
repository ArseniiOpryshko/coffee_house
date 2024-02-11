import { useState } from 'react'
import styles from '../Cart.module.css'

export default function ProductInCart({product, setCart, setProducts}){
    const [quantity, setQuantity] = useState(product.quantity);
    const [isInOrder, setIsInOrder] = useState(product.isChosen);

    function MinusHandle() {
        if (quantity !== 1) {
            setProducts(prevProducts => 
                prevProducts.map(pr => 
                    pr.id === product.id ? { ...pr, quantity: pr.quantity - 1 } : pr
                )
            );
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }
    
    function PlusHandle() {
        setProducts(prevProducts => 
            prevProducts.map(pr => 
                pr.id === product.id ? { ...pr, quantity: pr.quantity + 1 } : pr
            )
        );
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    function del_addToOrder(){
        setIsInOrder(isInOrder => !isInOrder);
        if (!isInOrder) {
            setCart(prevCart => ({
                ...prevCart,
                price: prevCart.price + (product.product.price * quantity)
            }));   
        }
        else{
            setCart(prevCart => ({
                ...prevCart,
                price: prevCart.price - (product.product.price * quantity)
            }));
        }

        setProducts(prevProducts => 
            prevProducts.map(pr => 
                pr.id === product.id ? { ...pr, isChosen: !pr.isChosen } : pr
            )
        );
    }
    
    return <div className={styles.product}>
        <img className={styles.img} src={"data:image/png;base64," + (product.product.image!=null?product.product.image:"") } />
        <p className={styles.name}>{product.product.name}</p>
        <div className={styles.regular}>
            <span className={styles.minus} onClick={MinusHandle}></span>
            <span className={styles.count}>{quantity}</span>
            <span className={styles.plus} onClick={PlusHandle}></span>
        </div>
        <p className={styles.price}>Price: {product.product.price * quantity}$</p>
        <button className={isInOrder 
            ? styles.del : styles.add} 
            onClick={del_addToOrder}>
                {isInOrder ? "In order" : "Add to order"} 
        </button>
    </div>

}