import React, { ReactElement, useState } from "react";
import AddButton from "./form-items/AddButton";
import TodoInput from "./form-items/TodoInput";

const Form:React.FC = ():ReactElement =>{
    const [text,setText] = useState("")

    return(
         <div className="d-flex justify-content-center align-items-center mb-4">
            <TodoInput text={text} setText = {setText}/>
            <AddButton text={text} setText={setText}/>
         </div>
    )
}

export default Form;