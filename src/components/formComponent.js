import './formComponent.css'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (e) => {
        setTitle(e.target.value)
    }
    const inputAmount = (e) => {
        setAmount(e.target.value)
    }
    const saveItem = (e) => {
        e.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }
    useEffect(() => {
        if (amount !== 0 && amount !== '' && title.trim() !== '') {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [title, amount])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className='form-control list'>
                    <label>Add your list</label>
                    <input type='text' placeholder='Type your list here' name='list' onChange={inputTitle} value={title}></input>
                </div>
                <div className='form-control amount'>
                    <label>Amount</label>
                    <input type='number' placeholder=' ( + for income ) ( - for expenses )' name='amount' onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type='submit' className='add-btn' disabled={!formValid}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent