import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportSummary.css'

const ReportSummary = () => {
    const { income, expenses } = useContext(DataContext)
    const summary = income - expenses
    const status = summary < 0 ? 'minus' : 'plus'
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="summary">
            <div className="summaryTitle">Total balance :</div>
            <div className={status}>฿{formatNumber(summary)}</div>
        </div>
    )
}
export default ReportSummary