import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './components/AppContext/AppContext'
import AddCategoriesForm from './components/AddCategoriesForm'
/*
Remove input values from form after submit
Add Different sections of expense
group Expenses together
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

        <h3 ClassName='mt-3'>Add Categories </h3>
        <div className='row mt-3'>
          <div className='col-sm'> 
          <AddCategoriesForm/>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
