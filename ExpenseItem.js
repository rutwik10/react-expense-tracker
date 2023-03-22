import React, {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    
    let [amount, setAmount] = useState(props.amount)

    let clickHandler = () => {
      setAmount("100$")
      console.log(amount)
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
        
        <h2>{props.title}</h2>
        
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Amount</button>
      
    </Card>
    )
}

export default ExpenseItem;
