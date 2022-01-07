import React, { useContext, useState, setState } from "react";
import { AppContext } from "./AppContext/AppContext";
const AddCategoriesForm = () => 
{
    const [cType, SetType] = useState('');
    const { dispatch,categories } = useContext(AppContext);

    const onSubmit = (e) => {
        e.preventDefault();

      
       

        dispatch({
            type: 'Add_Category',
            payload: cType
        })
        SetType('');
        
    }
    

   
return(

    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="Category">Catergory</label>
                <input
                    required
                    placeholder="Category"
                    type="text"
                    className="form-control"
                    id="Category"
                    value={cType}
                    onInput={e => SetType(e.target.value)}
                    >
                    
                </input>
            </div>
        </div>
        <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-3">
                        Add
                    </button>
                </div>
            </div>
     </form>
)
}

export default AddCategoriesForm;