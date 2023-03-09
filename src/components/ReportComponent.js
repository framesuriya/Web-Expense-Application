import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'

const ReportComponent = () => {
    const { income, expenses } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="totalSummary">
            <div>
                <div className="totalIncome">Total Income</div>
                <div className="totalAmount">฿{formatNumber(income)}</div>
            </div>
            <div>
                <div className="totalExpense">Total Expense</div>
                <div className="totalAmount">฿{formatNumber(expenses)}</div>
            </div>
        </div>
    )
}

export default ReportComponent