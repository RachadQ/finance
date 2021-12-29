import React, { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpense = expenses.reduce((total, item2) => total+item2.cost, 0)
    return (
        <div className="alert alert-primary">
            <span>Spent So Far: ${totalExpense}</span>
        </div>
    )
}

export default ExpenseTotal;