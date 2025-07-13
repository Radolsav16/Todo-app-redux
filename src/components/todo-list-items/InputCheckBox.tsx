import React, { ReactElement } from "react";
import Todo from "../../features/todos/types";


type onChangeEvent = React.ChangeEventHandler<HTMLInputElement>



const InputCheckBox = ({text,completed}:Todo):ReactElement => {
  const onChange:onChangeEvent = () =>{
    
  }

    return(
         <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    aria-label="..."
                    checked = {completed}
                    onChange={onChange}
                  />
                 {text}

        </div>
            
    )
}

export default InputCheckBox;