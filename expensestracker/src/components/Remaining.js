import React, { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpense = expenses.reduce((total, item) => total + item.cost, 0)

    const alertType = (totalExpense > budget) ? "alert-danger" : "alert-success";
    return (
        <div className={`alert ${alertType}`}>
            <span>{(totalExpense > budget) ? `Remaining: -$${Math.abs(budget - totalExpense)}` : `Remaining: $${budget - totalExpense}`} </span>
        </div>
    )
}

export default Remaining;