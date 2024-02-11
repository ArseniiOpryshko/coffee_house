import styles from '../AdminPanel.module.css'
import { useState } from 'react';
import axios from '@/app/configs/axiosWithBaseUrl';

export default function DeletePart(){
    const [deleteName, setDeleteName] = useState({name: ""});

    const handleDeleteNameChange = (event) => {
        const { name, value } = event.target;
        setDeleteName({ ...deleteName, [name]: value });
    };

    const Delete = async () =>{
        const resp = await axios.delete(`Product/DeleteWithName?name=${deleteName.name}`)
        if (resp.data == 0) {
            alert("Product with that name doesn't exist");
        }
        else{
            alert("Product deleted successfully");
        }
    } 

    return <div className={styles.delete}>
        <h3>Delete product</h3>
        <div className={styles.deletePart}>
            <div className={styles.input_group}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"
                    value={deleteName.name}
                    onChange={handleDeleteNameChange}
                />
            </div>
            <button onClick={Delete} className={styles.confirm}>Delete with name</button>
        </div>
    </div>
}