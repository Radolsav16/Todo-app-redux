import { ReactElement, useState } from "react";
import RemoveItemButton from "../../components/todo-list-items/RemoveItemButton";
import InputCheckBox from "../../components/todo-list-items/InputCheckBox";


type Prop = {
    id:string,
    text:string,
    completed:boolean
}


const TodoListItem = ({id,text,completed}:Prop):ReactElement =>{
    const [isCompleted,setCompleted] = useState(completed);
    return(
         <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <InputCheckBox text={text} id={id} isCompleted={isCompleted} setCompleted={setCompleted} />
               <RemoveItemButton id={id} />
        </li>
    )
}


export default TodoListItem;