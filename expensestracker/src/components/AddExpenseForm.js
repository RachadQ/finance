import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch, categories } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
<<<<<<< HEAD
   
=======
    const [type, setType] = useState('');

>>>>>>> 78a8e81daba70ee17cf7087e83d1d1a7306aa7b7
    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
<<<<<<< HEAD
            
=======
            type: type,
>>>>>>> 78a8e81daba70ee17cf7087e83d1d1a7306aa7b7
            cost: parseInt(cost)
        }

        dispatch({
            type: 'Add_Expense',
            payload: expense
        })

        setName('');
        setCost('');
        setType('');
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm">
                        <label for="name">Name</label>
                        <input
                            required
                            placeholder="Rent"
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="col-sm">
                        <label for="expenseType">Expense Type</label>
                        <select 
                        required
                        className="form-select" 
                        id="expenseType" 
                        aria-label="Select expense Type"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Open this select menu</option>
                            {categories.map(categoryType => {
                                return <option value={`${categoryType}`}>{categoryType}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-sm">
                        <label for="cost">Cost</label>
                        <input
                            required
                            placeholder="40"
                            type="number"
                            min="0"
                            step="any"
                            className="form-control"
                            id="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        >
                        </input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary mt-3">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;