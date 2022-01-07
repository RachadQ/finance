import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext/AppContext";

const Budget = () => {
    const { dispatch } = useContext(AppContext);

    const [budget, setBudget] = useState('');

    const handleBudgetChange = (e) => {
        e.preventDefault();

        dispatch({
            type: 'Change_Budget',
            payload: budget
        })
    }
    return (
        <div className="alert alert-secondary">
            <form onSubmit={handleBudgetChange}>
                <div className="input-group input-group-sm">
                    <label htmlFor="Budget" className="me-2">Budget:</label>
                    <input className="form-control shadow-none" 
                    name="Budget" id="Budget" 
                    type="number" min="0" value={budget}
                    onChange = {e => setBudget(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Budget;