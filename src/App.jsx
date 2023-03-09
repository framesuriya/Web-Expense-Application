import './App.css';
import Title from './components/title'
import Transaction from './components/transaction'
import FormComponent from './components/formComponent';
import { useReducer, useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import ReportSummary from './components/ReportSummary';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
let totalIncome = 0
let totalExpense = 0
function App() {
  const [items, setItems] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    if (newItem.amount > 0) {
      totalIncome += newItem.amount
      setReportIncome(Math.abs(totalIncome))
    } else {
      totalExpense += newItem.amount
      setReportExpense(Math.abs(totalExpense))
    }
    setItems((previousItem) => {
      return [newItem, ...previousItem]
    })
  }
  const [showReport, setShowReport] = useState(true)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return setShowReport(true)
      case 'HIDE':
        return setShowReport(false)
    }
  }
  const [result, dispatch] = useReducer(reducer, showReport)
  return (
    <DataContext.Provider value={{ income: reportIncome, expenses: reportExpense }}>
      <div className='container'>
        <Title />
        <Router>
          <div>
            <ul className="horizontalMenu">
              <li>
                <Link to='/'>Summary</Link>
              </li>
              <li>
                <Link to='/insert'>Input Data</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<>
                <ReportSummary />
                {showReport && <ReportComponent />}
                <div align='center' className='btnStatus'>
                  <button className='btnDisplay' onClick={() => { dispatch({ type: 'SHOW' }) }}>Display</button>
                  <button className='btnHide' onClick={() => { dispatch({ type: 'HIDE' }) }}>Hide</button>
                </div>
              </>}>
              </Route>
              <Route path='/insert' element={<>
                <FormComponent onAddItem={onAddNewItem} /><Transaction items={items} />
              </>}>

              </Route>
            </Routes>

          </div>
        </Router>
      </div >
    </DataContext.Provider >

  );
}

export default App;
