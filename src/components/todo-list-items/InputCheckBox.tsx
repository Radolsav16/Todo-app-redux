import React, { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { makeTodoCheck } from "../../features/todos/todosThunks";

type Prop = {
    id:string,
    text:string,
    isCompleted:boolean,
    setCompleted:(val:boolean) => void;
}

type onChangeEvent = React.ChangeEventHandler<HTMLInputElement>



const InputCheckBox = ({text,id,isCompleted,setCompleted}:Prop):ReactElement => {
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