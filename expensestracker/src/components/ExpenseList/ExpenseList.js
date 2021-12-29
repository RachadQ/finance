import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import ExpenseType from "./ExpenseType";


const ExpenseList = () => {
<<<<<<< HEAD
    const { expenses } = useContext(AppContext);
    
    
=======
    const { categories } = useContext(AppContext);

>>>>>>> 78a8e81daba70ee17cf7087e83d1d1a7306aa7b7
    return (
        <div className="accordion accordion-flush">
            {categories.map(expenseType => {
<<<<<<< HEAD
                return <ExpenseType expenseType={expenseType} />
            })}
        </div>
       
=======
                return <ExpenseType categoryType={expenseType} idNum={categories.indexOf(expenseType)}/>
            })}
        </div>
>>>>>>> 78a8e81daba70ee17cf7087e83d1d1a7306aa7b7
    )
}

export default ExpenseList;