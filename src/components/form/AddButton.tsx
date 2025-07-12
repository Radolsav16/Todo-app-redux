import React, { ReactElement } from "react";

const AddButton:React.FC = ():ReactElement =>{
    return(
         <button
                type="submit"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-primary btn-lg ms-2"
              >
                Add
              </button>
    )
} 

export default AddButton;