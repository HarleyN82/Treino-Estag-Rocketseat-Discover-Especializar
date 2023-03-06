import './styles.css';
import {Trash} from 'react-bootstrap-icons';

export function Card ({name,time,index,onDelete}){

    const handleDelete = () => {
        onDelete(index);
    };

    return (
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
            <button onClick={handleDelete}> <Trash/></button>
        </div>
    )
}