import React from "react";
import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type)
    {
        case 'Add_Expense':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'Delete_Expense':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        
        case 'Change_Budget':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
    }
}
const initialState = {
    budget: 0,
    expenses: [],
    categories: ["Housing", "Food", "Utilities", "Transportation", "Clothing", "Healthcare", "Personal", "Education", "Entertainment"]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
        value = {{
            budget: state.budget,
            expenses: state.expenses,
            categories: state.categories,
            dispatch
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}


