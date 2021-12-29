import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import ExpenseType from "./ExpenseType";


const ExpenseList = () => {
    const { categories } = useContext(AppContext);

    console.log(useContext(AppContext))
    return (
        <div className="accordion accordion-flush">
            {categories.map(expenseType => {
                return <ExpenseType categoryType={expenseType} idNum={categories.indexOf(expenseType)}/>
            })}
        </div>
    )
}

export default ExpenseList;