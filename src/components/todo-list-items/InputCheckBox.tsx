import { ReactElement } from "react";
import Todo from "../../types/Todo.type";

const InputCheckBox = ({todoText}:Todo):ReactElement => {
    return(
         <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    aria-label="..."
                  />
                 {todoText}

        </div>
            
    )
}

export default InputCheckBox;