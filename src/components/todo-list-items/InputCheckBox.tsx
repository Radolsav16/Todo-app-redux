import React, { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { makeTodoCheck } from "../../features/todos/todosThunks";
import { CheckProp } from "../../features/todos/types";

type onChangeEvent = React.ChangeEventHandler<HTMLInputElement>



const InputCheckBox = ({text,id,isCompleted,setCompleted}:CheckProp):ReactElement => {
  const dispatch = useAppDispatch()

  const onChange:onChangeEvent = () =>{
    dispatch(makeTodoCheck(id))
    setCompleted(!isCompleted)
  }

    return(
         <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    aria-label="..."
                    checked = {isCompleted}
                    onChange={onChange}
                  />
                 {text}

        </div>
            
    )
}

export default InputCheckBox;