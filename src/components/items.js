import './items.css';
import PropTypes from 'prop-types';

const Item = ({ title, amount }) => {
    // const { title, amount } = props
    const status = amount < 0 ? "expenses" : "income"
    const symbol = amount < 0 ? "-" : "+";
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className={status}>{title}<span>฿{symbol}{formatNumber(Math.abs(amount))}</span></div>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired //isRequired คือบังคับต้องป้อนข้อมูลนี้ด้วยเท่านั้น ไม่งั้นจะ error
}

export default Item