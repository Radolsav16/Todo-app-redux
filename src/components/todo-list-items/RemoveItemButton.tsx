import { ReactElement } from "react";
import { useAppDispatch} from "../../app/hooks";
import { deleteTodo } from "../../features/todos/todosThunks";

type Props =  {
    id:string
}

const RemoveItemButton:React.FC<Props> = ({id}):ReactElement =>{
    const dispatch = useAppDispatch()

    const deleteHanlder = () =>{
        dispatch(deleteTodo(id))
    }
    return (
         <a className="remove-btn" title="Remove item" onClick={deleteHanlder}>
                  <i className="fas fa-times text-primary" />
         </a>
    )
}


export default RemoveItemButton;