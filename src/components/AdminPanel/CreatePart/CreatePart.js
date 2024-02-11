
import axios from '@/app/configs/axiosWithBaseUrl';
import styles from '../AdminPanel.module.css'
import { useEffect, useState } from 'react';
import Compound from './Compound/Compound';


export default function CreatePart(){
    const [createForm, setCreateForm] = useState({
        name:"", 
        description:"",
        price:"",
        type:"sweets",
        compounds: []
    });
    const [file, setFile] = useState();

    const [compounds, setCompounds] = useState([]);

    const handleCreateChange = (event) => {
        const { name, value } = event.target;
        setCreateForm({ ...createForm, [name]: value });
    };

    useEffect(()=>{
        const fetchCompounds = async() =>{
            const resp = await axios.get('Product/GetCompounds');

            const formattedComp = resp.data.map(item => ({
                id: item.id,
                name: item.name,
                isSelected: false,
                gram: 0
            }));
              
            setCompounds(formattedComp);
        }
        fetchCompounds();
    },[])
    
    useEffect(()=>{
        setCreateForm({ ...createForm, ["compounds"]: compounds });
    },[compounds])

    async function handleFileUpload(event) {
        if (!event.target.files || event.target.files.length === 0) {
          return; 
        }
        setFile(event.target.files[0]);
      }

    const Create = async() =>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('dto', JSON.stringify(createForm));
        console.log(formData)

        const resp = await axios.post('Product/Create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        });
        
        if(resp){
            alert("product created successfully");
        }
    }
    return <div className={styles.createPart}>
        <h3>Add new product</h3>
        <div className={styles.blocks}>
            <div className={styles.left}>
                <div className={styles.input_group}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"
                        value={createForm.name}
                        onChange={handleCreateChange}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className={styles.desc}
                        value={createForm.description}
                        onChange={handleCreateChange}
                    >
                    </textarea>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.input_group}>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price"
                        value={createForm.price}
                        onChange={handleCreateChange}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="image">Select image</label>
                    <input type="file" name="image"
                        onChange={handleFileUpload}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="type">Type</label>
                    <select name='type' onChange={handleCreateChange}>
                        <option value="sweets">sweets</option>
                        <option value="drinks">drinks</option>
                    </select>
                </div>
            </div>
        </div>
        <div className={styles.input_group}>
            <label>Compounds</label>
            <div className={styles.grayback}>
                {compounds ? compounds.map(compound =>
                <Compound key={compound.id} compound={compound} setCompounds={setCompounds} compounds={compounds}/>): ""}     
            </div>      
        </div>   
        <br/>
        <button className={styles.confirm} onClick={Create}>Create product</button>
    </div>
}