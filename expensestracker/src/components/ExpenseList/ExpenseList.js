import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../AppContext/AppContext";
import ExpenseType from "./ExpenseType";

const categories = ["Housing", "Food", "Utilities", "Transportation", "Clothing", "Healthcare", "Personal", "Education", "Entertainment"]
const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    
    return (
        <div className="accordion">
            {categories.map(expenseType => {
                return <ExpenseType expenseType={expenseType} />
            })}
        </div>
       
    )
}

export default ExpenseList;