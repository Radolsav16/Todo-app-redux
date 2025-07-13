import React, { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../features/todos/todosThunks";
import Todo from "../../features/todos/types";
import { v4 as uuidv4 } from "uuid";

type Props = {
  setText:(val:string) => void
  text:string
}

const AddButton:React.FC<Props> = ({text,setText}):ReactElement =>{
  const dispatch = useAppDispatch();

  const todo:Todo = {
    id:uuidv4(),
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