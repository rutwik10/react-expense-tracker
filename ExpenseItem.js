import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    const clickHandler = () => {
    console.log("Clicked")
  }
    

    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        <button onClick={clickHandler}>Delete Expense</button>
    </div>
    )
}

export default ExpenseItem;
