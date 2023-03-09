import './styles.css';
import {Trash} from 'react-bootstrap-icons';

export type CardProps = {
    name: string;
    time: string;
}

export type ExtraProps = {
    index: number;
    onDelete: (index:number) => void;
}

export type InfoProps = CardProps & ExtraProps;

export function Card (props: InfoProps){

    const handleDelete = () => {
        props.onDelete(props.index);
    };

    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
            <button onClick={handleDelete}> <Trash/></button>
        </div>
    )
}