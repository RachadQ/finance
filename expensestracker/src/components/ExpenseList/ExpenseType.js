import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseType = (props) => {
    const { expenses } = useContext(AppContext);

    const expenseByCategory = expenses.filter(({ type }) => type === props.categoryType);
    const totalExpenseByCategory = expenseByCategory.reduce((total, item) => total+item.cost, 0);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${props.idNum}`} aria-expanded="false" aria-controls="collapse">
                    {`${props.categoryType} $${totalExpenseByCategory}`}
                </button>
            </h2>
<<<<<<< HEAD
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                   {props.categories}
=======
            <div id={`panelsStayOpen-collapse${props.idNum}`} className="accordion-collapse collapse" aria-labelledby="Expense Category">
                <div className="accordion-body">
                    <ul className="list-group">
                        {
                            expenseByCategory.map(({ id, name, cost }) => (
                                <ExpenseItem id={id} name={name} cost={cost} />
                            ))}
                    </ul>
>>>>>>> 78a8e81daba70ee17cf7087e83d1d1a7306aa7b7
                </div>
            </div>
        </div>
    )
}

export default ExpenseType;