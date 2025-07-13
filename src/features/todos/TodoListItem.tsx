import { ReactElement } from "react";
import RemoveItemButton from "../../components/todo-list-items/RemoveItemButton";
import InputCheckBox from "../../components/todo-list-items/InputCheckBox";
import Todo from "./types";



const TodoListItem = ({id,text,completed}:Todo):ReactElement =>{
    return(
         <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <InputCheckBox text={text} id={id} completed={completed} />
               <RemoveItemButton />
        </li>
    )
}


export default TodoListItem;