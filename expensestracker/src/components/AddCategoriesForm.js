import React, { useContext, useState, setState } from "react";
const AddCategoriesForm = () => 
{
    const [type, SetType] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }
return(

    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label for="Catorgorie">Catergorie</label>
                <input
                    required
                    placeholder="Catorgorie"
                    type="text"
                    className="form-control"
                    id="catorgorie"
                    value={type}
                    onChange={e => SetType(e.target.value)}
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