import React, { useContext, useState, setState } from "react";
import { AppContext } from "./AppContext/AppContext";

const RemoveCategoriesForm = () => {
  const [cType, SetType] = useState("");
  const { dispatch, categories } = useContext(AppContext);

  
  const onSubmit = (e) => {
    e.preventDefault();

  
    SetType('');

    dispatch({
        type: 'remove_Category',
        payload: cType
    })
    
}

  return (
    <form onSubmit={onSubmit}>
      <div className="col-sm">
        <label htmlFor="expenseType">Expense Type</label>
        <select
          required
          className="form-select"
          id="expenseType"
          aria-label="Select expense Type"
          value={cType}
          onChange={(e) => SetType(e.target.value)}
        >
          {categories.map((categoryType, index) => {
            return (
              <option key={index} value={`${categoryType}`}>
                {categoryType}
              </option>
            );
          })}
        </select>
        <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary mt-3">
                            Remove
                        </button>
                    </div>
                </div>
      </div>
    </form>
  );
};

export default RemoveCategoriesForm;
