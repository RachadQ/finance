import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../AppContext/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    return (
        <ul className="list-group">
            {
            expenses.map(({ id, name, cost}) => (
                <ExpenseItem id={id} name={name} cost={cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;