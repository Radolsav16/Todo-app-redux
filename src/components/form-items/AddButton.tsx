import React, { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../features/todos/todosThunks";
import { Todo } from "../../features/todos/types";


type Props = {
  setText:(val:string) => void
  text:string
}

const AddButton:React.FC<Props> = ({text,setText}):ReactElement =>{
  const dispatch = useAppDispatch();

  const todo:Todo = {
    text,
    completed:false
  }
  const addHanlder = () =>{
    dispatch(addTodo(todo))
    setText(" ")
    
  }
    return(
         <button
                type="submit"
                className="btn btn-primary btn-lg ms-2"
                onClick={addHanlder}
              >
                Add
              </button>
    )
} 

export default AddButton;