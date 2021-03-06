import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'Delete_Expense',
            payload: props.id
        })
    }
    return (
        <li key={props.name} className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge rounded-pill bg-primary mr-3">
                    ${props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense} style={{ cursor: "pointer"}}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;