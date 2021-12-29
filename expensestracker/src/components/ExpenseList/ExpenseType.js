import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseType = (props) => {
    const { expenses } = useContext(AppContext);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${props.idNum}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    {props.categoryType}
                </button>
            </h2>
            <div id={`panelsStayOpen-collapse${props.idNum}`} className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <ul className="list-group">
                        {
                            expenses.filter(({ type }) => type === props.categoryType).map(({ id, name, cost }) => (
                                <ExpenseItem id={id} name={name} cost={cost} />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpenseType;