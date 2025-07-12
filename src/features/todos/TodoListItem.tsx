import { ReactElement } from "react";

import Todo from "../../types/Todo.type";
import RemoveItemButton from "../../components/todo-list-items/RemoveItemButton";
import InputCheckBox from "../../components/todo-list-items/InputCheckBox";


const TodoListItem = ({todoText}:Todo):ReactElement =>{
    return(
         <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <InputCheckBox todoText={todoText} id={""} completed={false} />
               <RemoveItemButton />
        </li>
    )
}


export default TodoListItem;