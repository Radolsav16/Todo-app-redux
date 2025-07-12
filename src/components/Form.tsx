import React, { ReactElement } from "react";
import NeedText from "./form-items/NeedText";
import AddButton from "./form-items/AddButton";

const Form:React.FC = ():ReactElement =>{
    return(
         <form className="d-flex justify-content-center align-items-center mb-4">
            <NeedText />
            <AddButton />
         </form>
    )
}

export default Form;