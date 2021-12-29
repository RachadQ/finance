import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './components/AppContext/AppContext'

/*
Add aria-labels
add names
add component to create new expense category
Add logo icon
*/
function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget/>
          </div>
          <div className='col-sm'>
            <Remaining/>
          </div>
          <div className='col-sm'>
            <ExpenseTotal/>
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList/>
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm/>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
