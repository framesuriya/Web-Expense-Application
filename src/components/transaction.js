import './transaction.css';
import Item from "./items";
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';

const Transaction = ({ items }) => {
    return (
        <div>

            <ul className='item-list'>
                {items.map((e) => {
                    return <Item {...e} key={e.id} />
                    // return <Item {title={e.title} amount={e.amount}} /> ทำงานได้เหมือนข้างบน กรณีชื่อของ prop ตรงกับ key
                })}
            </ul>
        </div>
    )
}

export default Transaction