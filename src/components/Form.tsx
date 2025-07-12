import React, { ReactElement } from "react";
import NeedText from "./form/NeedText";
import AddButton from "./form/AddButton";

const Form:React.FC = ():ReactElement =>{
    return(
         <form className="d-flex justify-content-center align-items-center mb-4">
            <NeedText />
            <AddButton />
         </form>
    )
}

export default Form;