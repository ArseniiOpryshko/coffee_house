import styles from '../../AdminPanel.module.css'

export default function Compound({compound, setCompounds, compounds}){

    const handleСhange = (event) => {
        const { name, value, checked } = event.target;
        const updatedCompounds = compounds.map(c => {
            if (c.id === compound.id) {
                return { ...c, [name]: name === 'isSelected' ? checked : value };
            }
            return c;
        });
        setCompounds(updatedCompounds);
    };

    return <div className={styles.compound}>
        <input type='checkbox' className={styles.checkbox} 
            name='isSelected'
            onChange={handleСhange}
        />
        <p>{compound.name}</p>
        <div className={styles.sub}>
            <input type='number' className={styles.number}
                name='gram'
                onChange={handleСhange}
            />
            <span>g</span>
        </div>
    </div>
} 